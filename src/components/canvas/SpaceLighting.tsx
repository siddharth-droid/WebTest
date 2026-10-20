'use client';

import { Environment, Lightformer } from '@react-three/drei';
import type * as THREE from 'three';

/**
 * Space lighting is one hard sun plus blue "earthshine" from below.
 * Metals need something to reflect, so we build a tiny environment out of
 * light panels (Lightformers) rather than using a photographic HDRI, which
 * would put trees and skies into the reflections.
 */
export function SpaceLighting({ sun }: { sun: THREE.Vector3 }) {
  const s = sun.clone().multiplyScalar(40);
  return (
    <>
      <directionalLight position={s} intensity={4.2} color="#fff3e2" />
      <hemisphereLight args={['#05070d', '#1e4f9c', 0.55]} />
      <Environment resolution={256} frames={1} environmentIntensity={0.9}>
        <Lightformer form="rect" intensity={2} color="#fff1dc" position={sun.clone().multiplyScalar(10)} scale={[4, 4, 1]} target={[0, 0, 0]} />
        <Lightformer form="rect" intensity={0.6} color="#4a6c9e" position={[0, -10, 0]} rotation-x={Math.PI / 2} scale={[40, 40, 1]} />
        <Lightformer form="rect" intensity={0.8} color="#a8c8ff" position={[-10, 3, -4]} scale={[3, 12, 1]} target={[0, 0, 0]} />
        <Lightformer form="ring" intensity={0.5} color="#ffffff" position={[4, 8, -10]} scale={3} target={[0, 0, 0]} />
      </Environment>
    </>
  );
}
