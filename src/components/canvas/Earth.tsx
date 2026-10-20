'use client';

import { forwardRef, useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { limbFragment, limbVertex, surfaceFragment, surfaceVertex } from '@/lib/shaders/earth';
import { asset } from '@/lib/asset';
import { RADIANCE } from '@/components/globe/units';

/** Bundled 4K set (NASA imagery via the three.js examples); always available. */
const BASE = {
  day: asset('/textures/earth_day_4096.jpg'),
  night: asset('/textures/earth_night_4096.jpg'),
  brc: asset('/textures/earth_bump_roughness_clouds_4096.jpg'),
};

interface TextureManifest {
  day: string | null;
  night: string | null;
  relief: string | null;
  clouds: string | null;
}

interface EarthProps {
  radius: number;
  /** World-space unit vector toward the Sun. Mutated in place by the caller. */
  sun: THREE.Vector3;
  /** Called every frame; returns the planet's spin in radians. */
  spin: (elapsed: number) => number;
  children?: React.ReactNode;
}

const loader = new THREE.TextureLoader();
function load(url: string, srgb: boolean) {
  return loader.loadAsync(url).then((t) => {
    t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    t.anisotropy = 8;
    t.wrapS = THREE.RepeatWrapping;
    return t;
  });
}

/**
 * The planet. Children are placed in the Earth-fixed frame (they rotate with
 * it), so locations given by latitude/longitude stay put on the ground.
 * The ref points at that Earth-fixed group, which the atmosphere uses to
 * line up its own coordinate frame.
 */
export const Earth = forwardRef<THREE.Group, EarthProps>(function Earth({ radius, sun, spin, children }, ref) {
  const spinRef = useRef<THREE.Group>(null);
  const gl = useThree((s) => s.gl);
  const base = useTexture(BASE);

  const uniforms = useMemo(() => {
    base.day.colorSpace = THREE.SRGBColorSpace;
    base.night.colorSpace = THREE.SRGBColorSpace;
    for (const t of Object.values(base)) {
      t.anisotropy = 8;
      t.wrapS = THREE.RepeatWrapping;
    }
    return {
      uDay: { value: base.day as THREE.Texture },
      uNight: { value: base.night as THREE.Texture },
      uClouds: { value: base.brc as THREE.Texture },
      uCloudsChannel: { value: 1 },
      uRelief: { value: base.brc as THREE.Texture },
      uHasRelief: { value: 0 },
      uWater: { value: base.brc as THREE.Texture },
      uSun: { value: sun },
      uIntensity: { value: RADIANCE },
      uCloudOffset: { value: 0 },
    };
  }, [base, sun]);

  // Upgrade to the CI-built set: 2K first (fast), then 8K where the GPU and screen justify it
  useEffect(() => {
    let cancelled = false;
    const owned: THREE.Texture[] = [];
    const use = (key: 'uDay' | 'uNight' | 'uClouds' | 'uRelief', t: THREE.Texture) => {
      if (cancelled) return t.dispose();
      owned.push(t);
      uniforms[key].value = t;
      if (key === 'uClouds') uniforms.uCloudsChannel.value = 0;
      if (key === 'uRelief') uniforms.uHasRelief.value = 1;
    };
    (async () => {
      const res = await fetch(asset('/textures/earth/manifest.json')).catch(() => null);
      if (!res?.ok) return;
      const m = (await res.json()) as TextureManifest;
      const dir = asset('/textures/earth/');
      const small: Promise<unknown>[] = [];
      if (m.day) small.push(load(`${dir}${m.day}-2k.jpg`, true).then((t) => use('uDay', t)));
      if (m.night) small.push(load(`${dir}night-2k.jpg`, true).then((t) => use('uNight', t)));
      if (m.clouds) small.push(load(`${dir}clouds-2k.jpg`, false).then((t) => use('uClouds', t)));
      if (m.relief) small.push(load(`${dir}${m.relief}`, false).then((t) => use('uRelief', t)));
      await Promise.allSettled(small);

      const big = gl.capabilities.maxTextureSize >= 8192 && window.matchMedia('(min-width: 900px)').matches;
      if (!big || cancelled) return;
      if (m.day) load(`${dir}${m.day}-8k.jpg`, true).then((t) => use('uDay', t), () => undefined);
      if (m.clouds) load(`${dir}clouds-8k.jpg`, false).then((t) => use('uClouds', t), () => undefined);
      if (m.night) load(`${dir}night-8k.jpg`, true).then((t) => use('uNight', t), () => undefined);
    })().catch(() => undefined);
    return () => {
      cancelled = true;
      owned.forEach((t) => t.dispose());
    };
  }, [uniforms, gl]);

  const limbUniforms = useMemo(
    () => ({ uSun: { value: sun }, uIntensity: { value: RADIANCE * 1.1 }, uThickness: { value: 0.32 } }),
    [sun],
  );

  const centre = useMemo(() => new THREE.Vector3(), []);
  useFrame((state) => {
    if (spinRef.current) spinRef.current.rotation.y = spin(state.clock.elapsedTime);
    // From low orbit the stylised limb shell reads as a band; let the physical sky take over
    spinRef.current?.getWorldPosition(centre);
    const altitude = state.camera.position.distanceTo(centre) / radius;
    limbUniforms.uIntensity.value = RADIANCE * 1.1 * THREE.MathUtils.smoothstep(altitude, 1.25, 1.9);
  });

  return (
    <>
    <mesh scale={1.022}>
      <sphereGeometry args={[radius, 128, 96]} />
      <shaderMaterial
        uniforms={limbUniforms}
        vertexShader={limbVertex}
        fragmentShader={limbFragment}
        side={THREE.BackSide}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
    <group ref={(g) => {
      spinRef.current = g;
      if (typeof ref === 'function') ref(g);
      else if (ref) ref.current = g;
    }}>
      <mesh>
        <sphereGeometry args={[radius, 192, 128]} />
        <shaderMaterial uniforms={uniforms} vertexShader={surfaceVertex} fragmentShader={surfaceFragment} />
      </mesh>
      {children}
    </group>
    </>
  );
});

useTexture.preload(Object.values(BASE));
