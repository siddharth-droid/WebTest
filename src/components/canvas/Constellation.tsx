'use client';

import { useLayoutEffect, useMemo, useRef } from 'react';
import { useFrame, type ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import { FLEET, PLANE_IDS, type SatelliteStatus } from '@/lib/fleet';
import { orbitPath, positionAt, simNow } from '@/lib/orbit';

const STATUS_COLOR: Record<SatelliteStatus, THREE.Color> = {
  NOMINAL: new THREE.Color('#9fdcff').multiplyScalar(2.2),
  DEGRADED: new THREE.Color('#ffb547').multiplyScalar(2.2),
  'SAFE MODE': new THREE.Color('#ff5a4f').multiplyScalar(2.2),
};
const SELECTED_COLOR = new THREE.Color('#ffffff').multiplyScalar(4);

interface ConstellationProps {
  earthRadius: number;
  /** 0..1, read every frame so it can be driven by scroll. */
  opacity?: () => number;
  selectedId?: string | null;
  hoveredId?: string | null;
  onSelect?: (id: string) => void;
  onHover?: (id: string | null) => void;
  /** Max distance (in Earth radii) for drawing a crosslink between two satellites. */
  linkRange?: number;
}

export function Constellation({
  earthRadius,
  opacity = () => 1,
  selectedId,
  hoveredId,
  onSelect,
  onHover,
  linkRange = 0.62,
}: ConstellationProps) {
  const markers = useRef<THREE.InstancedMesh>(null);
  const group = useRef<THREE.Group>(null);
  const positions = useMemo(() => FLEET.map(() => new THREE.Vector3()), []);
  const matrix = useMemo(() => new THREE.Matrix4(), []);
  const markerSize = earthRadius * 0.014;
  const interactive = Boolean(onSelect);

  // One faint orbit path per plane (satellites in a plane share it)
  const orbitLines = useMemo(
    () =>
      PLANE_IDS.map((plane) => {
        const sat = FLEET.find((s) => s.plane === plane)!;
        const geometry = new THREE.BufferGeometry().setFromPoints(orbitPath(sat.orbit, earthRadius));
        const material = new THREE.LineBasicMaterial({ color: '#7fc8ff', transparent: true, depthWrite: false });
        return { plane, line: new THREE.Line(geometry, material) };
      }),
    [earthRadius],
  );

  const maxLinks = FLEET.length * 4;
  const links = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(maxLinks * 6), 3));
    const material = new THREE.LineBasicMaterial({
      color: '#5fb8ff',
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    return new THREE.LineSegments(geometry, material);
  }, [maxLinks]);

  useLayoutEffect(() => {
    if (!markers.current) return;
    FLEET.forEach((sat, i) => {
      const c = sat.id === selectedId || sat.id === hoveredId ? SELECTED_COLOR : STATUS_COLOR[sat.status];
      markers.current!.setColorAt(i, c);
    });
    markers.current.instanceColor!.needsUpdate = true;
  }, [selectedId, hoveredId]);

  useFrame(() => {
    const a = opacity();
    if (group.current) group.current.visible = a > 0.002;
    if (a <= 0.002 || !markers.current) return;

    const t = simNow();
    FLEET.forEach((sat, i) => {
      positionAt(sat.orbit, t, earthRadius, positions[i]);
      // The selected satellite is drawn as the full 3D model instead
      const s = sat.id === selectedId ? 0 : sat.id === hoveredId ? 1.5 : 1;
      matrix.makeScale(s, s, s).setPosition(positions[i]);
      markers.current!.setMatrixAt(i, matrix);
    });
    markers.current.instanceMatrix.needsUpdate = true;
    markers.current.computeBoundingSphere();
    (markers.current.material as THREE.MeshBasicMaterial).opacity = a;

    // Optical crosslinks between satellites that can see each other
    const buf = links.geometry.attributes.position.array as Float32Array;
    const range = linkRange * earthRadius;
    let n = 0;
    for (let i = 0; i < positions.length && n < maxLinks; i++) {
      for (let j = i + 1; j < positions.length && n < maxLinks; j++) {
        if (positions[i].distanceTo(positions[j]) < range) {
          positions[i].toArray(buf, n * 6);
          positions[j].toArray(buf, n * 6 + 3);
          n++;
        }
      }
    }
    links.geometry.setDrawRange(0, n * 2);
    links.geometry.attributes.position.needsUpdate = true;
    (links.material as THREE.LineBasicMaterial).opacity = a * 0.28;

    const selectedPlane = FLEET.find((s) => s.id === selectedId)?.plane;
    for (const { plane, line } of orbitLines) {
      (line.material as THREE.LineBasicMaterial).opacity = a * (plane === selectedPlane ? 0.55 : 0.1);
    }
  });

  const handle = (fn?: (id: string | null) => void) => (e: ThreeEvent<PointerEvent | MouseEvent>) => {
    if (e.instanceId === undefined || !fn) return;
    e.stopPropagation();
    fn(FLEET[e.instanceId].id);
  };

  return (
    <group ref={group}>
      {orbitLines.map(({ plane, line }) => (
        <primitive key={plane} object={line} />
      ))}
      <primitive object={links} />
      <instancedMesh
        ref={markers}
        args={[undefined, undefined, FLEET.length]}
        frustumCulled={false}
        onClick={interactive ? handle(onSelect as (id: string | null) => void) : undefined}
        onPointerOver={interactive ? handle(onHover) : undefined}
        onPointerOut={interactive ? () => onHover?.(null) : undefined}
      >
        <octahedronGeometry args={[markerSize, 0]} />
        <meshBasicMaterial transparent toneMapped={false} />
      </instancedMesh>
    </group>
  );
}
