'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import type * as THREE from 'three';
import { RADIANCE } from '@/components/globe/units';

/**
 * Space lighting is one hard sun plus blue "earthshine" from below. Metals
 * need something to reflect, so we build a small environment out of light
 * panels (Lightformers) rather than a photographic HDRI, which would put
 * trees and skies into the reflections. Intensities are in the atmosphere's
 * radiance units (see globe/units.ts).
 */
export function SpaceLighting({ sun, directional = true }: { sun: THREE.Vector3; directional?: boolean }) {
  const light = useRef<THREE.DirectionalLight>(null);
  useFrame(() => light.current?.position.copy(sun).multiplyScalar(40));
  return (
    <>
      {directional && <directionalLight ref={light} intensity={11 * RADIANCE} color="#fff4e6" />}
      <hemisphereLight args={['#05070d', '#2a5aa8', 0.9 * RADIANCE]} />
      <Environment resolution={256} frames={1} environmentIntensity={1.1 * RADIANCE}>
        <Lightformer form="rect" intensity={3} color="#fff1dc" position={[10, 4, 6]} scale={[5, 5, 1]} target={[0, 0, 0]} />
        <Lightformer form="rect" intensity={1.4} color="#3d6fb8" position={[0, -10, 0]} rotation-x={Math.PI / 2} scale={[40, 40, 1]} />
        <Lightformer form="rect" intensity={0.6} color="#a8c8ff" position={[-10, 3, -4]} scale={[3, 12, 1]} target={[0, 0, 0]} />
      </Environment>
    </>
  );
}
