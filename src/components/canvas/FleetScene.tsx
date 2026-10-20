'use client';

import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three';
import { FLEET } from '@/lib/fleet';
import { earthRotationAt, positionAt, simNow } from '@/lib/orbit';
import { Earth } from './Earth';
import { Satellite } from './Satellite';
import { Starfield } from './Starfield';
import { SpaceLighting } from './SpaceLighting';
import { Constellation } from './Constellation';
import { Effects } from './Effects';

export const FLEET_EARTH_RADIUS = 6;
const SUN = new THREE.Vector3(1, 0.25, 0.6).normalize();
const OVERVIEW_DISTANCE = 26;
const FOLLOW_DISTANCE = 0.9;

interface FleetSceneProps {
  selectedId: string | null;
  hoveredId: string | null;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
  onDeselect: () => void;
}

/**
 * Smoothly carries the orbit-controls target to the selected satellite and
 * keeps it there as it moves. The user can still orbit and zoom freely.
 */
function FollowRig({ selectedId }: { selectedId: string | null }) {
  const controls = useThree((s) => s.controls) as OrbitControlsImpl | null;
  const camera = useThree((s) => s.camera);
  const flying = useRef(true);
  const v = useMemo(
    () => ({
      goal: new THREE.Vector3(),
      ahead: new THREE.Vector3(),
      delta: new THREE.Vector3(),
      offset: new THREE.Vector3(),
      dir: new THREE.Vector3(),
      up: new THREE.Vector3(),
    }),
    [],
  );
  const sat = FLEET.find((s) => s.id === selectedId);

  useEffect(() => {
    flying.current = true;
  }, [selectedId]);

  useFrame((_, dt) => {
    if (!controls) return;
    const k = 1 - Math.exp(-dt * 2.6);

    const t = simNow();
    if (sat) {
      positionAt(sat.orbit, t, FLEET_EARTH_RADIUS, v.goal);
      positionAt(sat.orbit, t + 60, FLEET_EARTH_RADIUS, v.ahead);
    } else v.goal.set(0, 0, 0);

    // Move target and camera together so we "ride along" with the satellite
    v.delta
      .copy(v.goal)
      .sub(controls.target)
      .multiplyScalar(sat && !flying.current ? 1 : k);
    controls.target.add(v.delta);
    camera.position.add(v.delta);

    if (flying.current) {
      v.offset.copy(camera.position).sub(controls.target);
      const dist = v.offset.length();
      const desired = sat ? FOLLOW_DISTANCE : OVERVIEW_DISTANCE;
      if (sat) {
        // Chase cam: behind and above the satellite, looking along its track toward the horizon
        v.up.copy(v.goal).normalize();
        v.dir.copy(v.goal).sub(v.ahead).normalize().multiplyScalar(0.85).addScaledVector(v.up, 0.5).normalize();
        v.offset.normalize().lerp(v.dir, k).normalize();
      }
      v.offset.setLength(THREE.MathUtils.lerp(dist, desired, k));
      camera.position.copy(controls.target).add(v.offset);
      if (Math.abs(dist - desired) < 0.02 && v.goal.distanceTo(controls.target) < 0.02) flying.current = false;
    }
    controls.update();
  });

  return null;
}

function SelectedSatellite({ id }: { id: string }) {
  const ref = useRef<THREE.Group>(null);
  const sat = FLEET.find((s) => s.id === id)!;
  const p = useMemo(() => new THREE.Vector3(), []);
  const ahead = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    if (!ref.current) return;
    const t = simNow();
    positionAt(sat.orbit, t, FLEET_EARTH_RADIUS, p);
    positionAt(sat.orbit, t + 30, FLEET_EARTH_RADIUS, ahead);
    ref.current.position.copy(p);
    // Fly along the velocity vector with "up" pointing away from Earth
    ref.current.up.copy(p).normalize();
    ref.current.lookAt(ahead);
  });

  return (
    <group ref={ref}>
      <Satellite size={0.32} float={false} />
      <Html zIndexRange={[20, 10]} style={{ pointerEvents: 'none' }}>
        <div className="sat-tag mono">{sat.name}</div>
      </Html>
    </group>
  );
}

export default function FleetScene({ selectedId, hoveredId, onSelect, onHover, onDeselect }: FleetSceneProps) {
  return (
    <div className="stage">
      <Canvas
        flat
        dpr={[1, 2]}
        gl={{ antialias: false }}
        camera={{ fov: 35, near: 0.01, far: 3000, position: [10, 9, 22] }}
        onPointerMissed={onDeselect}
        style={{ cursor: hoveredId ? 'pointer' : 'grab' }}
      >
        <color attach="background" args={['#02040a']} />
        <OrbitControls
          makeDefault
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.5}
          minDistance={selectedId ? 0.6 : 8}
          maxDistance={80}
        />
        <FollowRig selectedId={selectedId} />
        <Suspense fallback={null}>
          <SpaceLighting sun={SUN} />
          <Starfield />
          <Earth radius={FLEET_EARTH_RADIUS} sun={SUN} spin={() => earthRotationAt(simNow())} />
          <Constellation
            earthRadius={FLEET_EARTH_RADIUS}
            selectedId={selectedId}
            hoveredId={hoveredId}
            onSelect={onSelect}
            onHover={onHover}
          />
          {selectedId && <SelectedSatellite id={selectedId} />}
          <Effects bloom={0.7} />
        </Suspense>
      </Canvas>
    </div>
  );
}
