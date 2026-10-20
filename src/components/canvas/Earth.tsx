'use client';

import { forwardRef, useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { suspend } from 'suspend-react';
import * as THREE from 'three';
import { limbFragment, limbVertex, surfaceFragment, surfaceVertex } from '@/lib/shaders/earth';
import { asset } from '@/lib/asset';
import { getTier, useTier } from '@/lib/quality';
import { RADIANCE } from '@/components/globe/units';

/** Bundled 4K set (NASA imagery via the three.js examples), used if the CI-built set is missing. */
const BASE = {
  day: asset('/textures/earth_day_4096.jpg'),
  night: asset('/textures/earth_night_4096.jpg'),
  brc: asset('/textures/earth_bump_roughness_clouds_4096.jpg'),
};
const DIR = asset('/textures/earth/');

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

/**
 * Decode images off the main thread where the browser can (createImageBitmap),
 * so a large texture never freezes scrolling while it unpacks.
 */
const bitmaps = typeof createImageBitmap !== 'undefined';
const bitmapLoader = new THREE.ImageBitmapLoader().setOptions({ imageOrientation: 'flipY', premultiplyAlpha: 'none' });
const imageLoader = new THREE.TextureLoader();
async function load(url: string, srgb: boolean) {
  let t: THREE.Texture;
  if (bitmaps) {
    t = new THREE.Texture(await bitmapLoader.loadAsync(url));
    t.flipY = false;
    t.needsUpdate = true;
  } else {
    t = await imageLoader.loadAsync(url);
  }
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = 8;
  t.wrapS = THREE.RepeatWrapping;
  return t;
}

interface Maps {
  day: THREE.Texture;
  night: THREE.Texture;
  clouds: THREE.Texture;
  relief: THREE.Texture | null;
  /** Land/ocean mask in G; the legacy set packs clouds into B of the same map. */
  water: THREE.Texture;
  legacy: boolean;
  manifest: TextureManifest | null;
}

/** The CI-built 2K set (small, so the planet appears fast); the 4K bundled set otherwise. */
async function loadMaps(): Promise<Maps> {
  const res = await fetch(asset('/textures/earth/manifest.json')).catch(() => null);
  const m = res?.ok ? ((await res.json()) as TextureManifest) : null;
  const brc = await load(BASE.brc, false);
  if (m?.day && m.night && m.clouds) {
    const [day, night, clouds, relief] = await Promise.all([
      load(`${DIR}${m.day}-2k.jpg`, true),
      load(`${DIR}night-2k.jpg`, true),
      load(`${DIR}clouds-2k.jpg`, false),
      m.relief ? load(`${DIR}${m.relief}`, false).catch(() => null) : Promise.resolve(null),
    ]);
    return { day, night, clouds, relief, water: brc, legacy: false, manifest: m };
  }
  const [day, night] = await Promise.all([load(BASE.day, true), load(BASE.night, true)]);
  return { day, night, clouds: brc, relief: null, water: brc, legacy: true, manifest: null };
}

/** Run once the reader has stopped scrolling for a moment, so a big upload never lands mid-gesture. */
function whenIdle(fn: () => void) {
  let timer = 0;
  const arm = () => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      window.removeEventListener('scroll', arm);
      if ('requestIdleCallback' in window) requestIdleCallback(fn, { timeout: 2000 });
      else fn();
    }, 1200);
  };
  window.addEventListener('scroll', arm, { passive: true });
  arm();
  return () => {
    clearTimeout(timer);
    window.removeEventListener('scroll', arm);
  };
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
  const tier = useTier();
  const maps = suspend(loadMaps, ['earth-maps']);

  const uniforms = useMemo(
    () => ({
      uDay: { value: maps.day },
      uNight: { value: maps.night },
      uClouds: { value: maps.clouds },
      uCloudsChannel: { value: maps.legacy ? 1 : 0 },
      uRelief: { value: maps.relief ?? maps.water },
      uHasRelief: { value: maps.relief ? 1 : 0 },
      uWater: { value: maps.water },
      uSun: { value: sun },
      uIntensity: { value: RADIANCE },
      uCloudOffset: { value: 0 },
      uDetail: { value: getTier() === 'low' ? 0 : 1 },
    }),
    [maps, sun],
  );
  useEffect(() => {
    uniforms.uDetail.value = tier === 'low' ? 0 : 1;
  }, [tier, uniforms]);

  // High tier: swap in the 8K set once the reader pauses, one texture at a time
  useEffect(() => {
    const m = maps.manifest;
    const big = tier === 'high' && gl.capabilities.maxTextureSize >= 8192 && window.matchMedia('(min-width: 900px)').matches;
    if (!m || !big) return;
    let cancelled = false;
    const owned: THREE.Texture[] = [];
    const queue: ['uDay' | 'uClouds' | 'uNight', string, boolean][] = [
      ['uDay', `${DIR}${m.day}-8k.jpg`, true],
      ['uClouds', `${DIR}clouds-8k.jpg`, false],
      ['uNight', `${DIR}night-8k.jpg`, true],
    ];
    let stopIdle = () => {};
    const next = () => {
      const job = queue.shift();
      if (!job || cancelled) return;
      load(job[1], job[2])
        .then((t) => {
          if (cancelled) return t.dispose();
          owned.push(t);
          // Upload now, while idle, rather than on the next frame that happens to draw it
          gl.initTexture(t);
          uniforms[job[0]].value = t;
          stopIdle = whenIdle(next);
        })
        .catch(() => undefined);
    };
    stopIdle = whenIdle(next);
    return () => {
      cancelled = true;
      stopIdle();
      uniforms.uDay.value = maps.day;
      uniforms.uClouds.value = maps.clouds;
      uniforms.uNight.value = maps.night;
      owned.forEach((t) => t.dispose());
    };
  }, [maps, tier, uniforms, gl]);

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
        <sphereGeometry args={tier === 'low' ? [radius, 128, 80] : [radius, 192, 128]} />
        <shaderMaterial uniforms={uniforms} vertexShader={surfaceVertex} fragmentShader={surfaceFragment} />
      </mesh>
      {children}
    </group>
    </>
  );
});
