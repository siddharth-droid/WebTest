'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import {
  atmosphereFragment,
  atmosphereVertex,
  surfaceFragment,
  surfaceVertex,
} from '@/lib/shaders/earth';
import { asset } from '@/lib/asset';

const TEXTURES = {
  day: asset('/textures/earth_day_4096.jpg'),
  night: asset('/textures/earth_night_4096.jpg'),
  brc: asset('/textures/earth_bump_roughness_clouds_4096.jpg'),
};

interface EarthProps {
  radius: number;
  sun: THREE.Vector3;
  /** Called every frame; returns the planet's spin in radians. */
  spin: (elapsed: number) => number;
  children?: React.ReactNode;
}

export function Earth({ radius, sun, spin, children }: EarthProps) {
  const spinRef = useRef<THREE.Group>(null);
  const { day, night, brc } = useTexture(TEXTURES);

  const uniforms = useMemo(() => {
    day.colorSpace = THREE.SRGBColorSpace;
    night.colorSpace = THREE.SRGBColorSpace;
    for (const t of [day, night, brc]) t.anisotropy = 8;
    brc.wrapS = THREE.RepeatWrapping;
    return {
      uDay: { value: day },
      uNight: { value: night },
      uBRC: { value: brc },
      uSun: { value: sun },
      uCloudOffset: { value: 0 },
    };
  }, [day, night, brc, sun]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (spinRef.current) spinRef.current.rotation.y = spin(t);
    // Clouds drift slightly faster than the ground beneath them
    uniforms.uCloudOffset.value = -t * 0.0015;
  });

  return (
    <group>
      <group ref={spinRef}>
        <mesh>
          <sphereGeometry args={[radius, 128, 128]} />
          <shaderMaterial uniforms={uniforms} vertexShader={surfaceVertex} fragmentShader={surfaceFragment} />
        </mesh>
        {children}
      </group>
      <mesh scale={1.035}>
        <sphereGeometry args={[radius, 96, 96]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={atmosphereVertex}
          fragmentShader={atmosphereFragment}
          side={THREE.BackSide}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

useTexture.preload(Object.values(TEXTURES));
