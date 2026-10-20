'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { propagate } from 'satellite.js';
import { loadData } from '@/lib/data';
import { parseCatalog, satrecFor, type SatelliteFile } from '@/lib/sat/catalog';
import { groupOf } from '@/lib/sat/groups';
import { RADIANCE } from '@/components/globe/units';

/**
 * Every tracked satellite where it is at the moment the page loads, as a
 * static point cloud. The catalog is a few megabytes, so it is fetched once
 * the page has settled and propagated a slice at a time between frames.
 */
export function RealConstellation({ earthRadius, opacity }: { earthRadius: number; opacity: () => number }) {
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);
  const requested = useRef(false);
  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        size: 1.6,
        sizeAttenuation: false,
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        opacity: 0,
      }),
    [],
  );
  const group = useRef<THREE.Group>(null);
  const warmed = useRef(false);

  const start = () => {
    if (requested.current) return;
    requested.current = true;
    build(earthRadius).then(setGeometry, () => undefined);
  };
  useEffect(() => {
    const t = window.setTimeout(start, 4000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame(() => {
    const a = opacity();
    if (a > 0.01) start();
    material.opacity = a;
    if (!group.current) return;
    // Draw once (invisibly) as soon as it exists, so the shader compiles before it is needed
    group.current.visible = a > 0.01 || (geometry !== null && !warmed.current);
    if (geometry) warmed.current = true;
  });

  useEffect(() => () => geometry?.dispose(), [geometry]);

  return <group ref={group}>{geometry && <points geometry={geometry} material={material} />}</group>;
}

async function build(earthRadius: number) {
  const catalog = parseCatalog(await loadData<SatelliteFile>('satellites.json'));
  const now = new Date();
  const pos: number[] = [];
  const col: number[] = [];
  const c = new THREE.Color();
  let sliceStart = performance.now();
  for (const sat of catalog.sats) {
    // Yield every few milliseconds so frames keep flowing while this runs
    if (performance.now() - sliceStart > 6) {
      await new Promise((r) => setTimeout(r, 0));
      sliceStart = performance.now();
    }
    const pv = propagate(satrecFor(sat), now);
    if (!pv) continue;
    const s = earthRadius / 6371;
    pos.push(pv.position.x * s, pv.position.z * s, -pv.position.y * s);
    c.set(groupOf(sat.category).color).multiplyScalar(RADIANCE * 1.6);
    col.push(c.r, c.g, c.b);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  return g;
}
