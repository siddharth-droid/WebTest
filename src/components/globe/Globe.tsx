'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Bloom, EffectComposer, Noise, SMAA, ToneMapping } from '@react-three/postprocessing';
import { BlendFunction, ToneMappingMode } from 'postprocessing';
import { Atmosphere, Sky, Stars, type AtmosphereApi } from '@takram/three-atmosphere/r3f';
import { Ellipsoid } from '@takram/three-geospatial';
import * as THREE from 'three';
import { asset } from '@/lib/asset';
import { useTier } from '@/lib/quality';
import { EXPOSURE } from './units';

const EARTH_RADIUS_M = 6_371_000;
/** We model Earth as a sphere, so tell the atmosphere the same. */
const SPHERE = new Ellipsoid(EARTH_RADIUS_M, EARTH_RADIUS_M, EARTH_RADIUS_M);

/**
 * Earth-local axes (our spheres are Y-up with longitude 0 on +X) to ECEF
 * (Z-up, X through Greenwich, Y through 90° E).
 */
const LOCAL_TO_ECEF = new THREE.Matrix4().set(1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1);
const ECEF_TO_LOCAL = LOCAL_TO_ECEF.clone().invert();

interface GlobeAtmosphereProps {
  /** The Earth-fixed group (what <Earth ref> points at). */
  earth: React.RefObject<THREE.Group | null>;
  /** Earth radius in scene units. */
  radius: number;
  /**
   * Sun direction in world space. In "real" mode it is written every frame
   * from the actual date; in "fixed" mode it is read (for staged shots).
   */
  sun: THREE.Vector3;
  mode: 'real' | 'fixed';
  /** In "real" mode: the moment to show (defaults to now). */
  date?: () => Date;
  stars?: boolean;
  children?: React.ReactNode;
}

/**
 * Physically based atmosphere (Bruneton precomputed scattering via
 * @takram/three-atmosphere): limb glow, sky colour, twilight and real stars.
 */
export function GlobeAtmosphere({ earth, radius, sun, mode, date, stars = true, children }: GlobeAtmosphereProps) {
  const [atmosphere, setAtmosphere] = useState<AtmosphereApi | null>(null);
  return (
    <Atmosphere ref={setAtmosphere} ellipsoid={SPHERE} correctAltitude>
      {atmosphere && <FrameSync atmosphere={atmosphere} earth={earth} radius={radius} sun={sun} mode={mode} date={date} />}
      {/* The Sun is drawn as a lens glare (below), not the sky's hard-edged disc */}
      <Sky sun={false} />
      <SunGlare sun={sun} />
      {stars && <Stars data={asset('/textures/sky/stars.bin')} intensity={0.9} pointSize={1.2} />}
      {children}
    </Atmosphere>
  );
}

/** A soft glare texture: hot core, wide halo and faint diffraction spikes, drawn once. */
function glareTexture() {
  const n = 256;
  const c = document.createElement('canvas');
  c.width = c.height = n;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, n, n);
  ctx.globalCompositeOperation = 'lighter';
  const radial = (r: number, stops: [number, string][]) => {
    const g = ctx.createRadialGradient(n / 2, n / 2, 0, n / 2, n / 2, r);
    for (const [at, col] of stops) g.addColorStop(at, col);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, n, n);
  };
  radial(n / 2, [[0, 'rgba(255,236,214,0.55)'], [0.25, 'rgba(255,214,176,0.12)'], [1, 'rgba(0,0,0,0)']]);
  radial(n * 0.09, [[0, 'rgba(255,255,255,1)'], [0.5, 'rgba(255,250,240,0.9)'], [1, 'rgba(0,0,0,0)']]);
  // Six thin spikes, the way a camera aperture renders a point of light
  ctx.translate(n / 2, n / 2);
  for (let i = 0; i < 6; i++) {
    ctx.rotate(Math.PI / 3);
    const g = ctx.createLinearGradient(0, 0, n / 2, 0);
    g.addColorStop(0, 'rgba(255,240,220,0.5)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(0, -1.2);
    ctx.lineTo(n / 2, 0);
    ctx.lineTo(0, 1.2);
    ctx.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const GLARE_DISTANCE = 900;

/** The Sun as the eye (or a camera) sees it from space; the planet occludes it naturally. */
function SunGlare({ sun }: { sun: THREE.Vector3 }) {
  const sprite = useRef<THREE.Sprite>(null);
  const material = useMemo(
    () =>
      new THREE.SpriteMaterial({
        map: glareTexture(),
        color: new THREE.Color(0.5, 0.48, 0.45),
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        transparent: true,
      }),
    [],
  );
  useEffect(() => () => {
    material.map?.dispose();
    material.dispose();
  }, [material]);
  useFrame(({ camera }) => {
    sprite.current?.position.copy(camera.position).addScaledVector(sun, GLARE_DISTANCE);
  });
  return <sprite ref={sprite} material={material} scale={GLARE_DISTANCE * 0.32} renderOrder={1} />;
}

function FrameSync({
  atmosphere,
  earth,
  radius,
  sun,
  mode,
  date,
}: { atmosphere: AtmosphereApi } & Pick<GlobeAtmosphereProps, 'earth' | 'radius' | 'sun' | 'mode' | 'date'>) {
  const m = useMemo(
    () => ({ inv: new THREE.Matrix4(), scale: new THREE.Matrix4(), rot: new THREE.Matrix3(), v: new THREE.Vector3() }),
    [],
  );
  // Runs before the atmosphere components copy their state each frame
  useFrame(() => {
    const g = earth.current;
    if (!g) return;
    g.updateWorldMatrix(true, false);
    if (mode === 'real') atmosphere.updateByDate(date ? date() : new Date());

    // world → Earth-local (scene units) → ECEF axes → metres
    m.inv.copy(g.matrixWorld).invert();
    const s = EARTH_RADIUS_M / radius;
    m.scale.makeScale(s, s, s);
    atmosphere.worldToECEFMatrix.copy(m.scale).multiply(LOCAL_TO_ECEF).multiply(m.inv);

    if (mode === 'real') {
      // ECEF sun → world, for our own shaders and lights
      m.v.copy(atmosphere.sunDirection).applyMatrix4(ECEF_TO_LOCAL);
      sun.copy(m.v).transformDirection(g.matrixWorld);
    } else {
      m.v.copy(sun).transformDirection(m.inv).applyMatrix4(LOCAL_TO_ECEF).normalize();
      atmosphere.sunDirection.copy(m.v);
    }
  }, -1);
  return null;
}

/**
 * Post chain: bloom, tone mapping and film finish. Atmospheric haze over the
 * planet is computed in the Earth shader itself, and the vignette is a CSS
 * overlay, so the chain stays as short as the quality tier allows.
 */
export function GlobeEffects({ bloom = 0.6 }: { bloom?: number }) {
  const gl = useThree((s) => s.gl);
  const tier = useTier();
  useMemo(() => {
    gl.toneMappingExposure = EXPOSURE;
  }, [gl]);
  if (tier === 'low') {
    return (
      <EffectComposer multisampling={0} enableNormalPass={false}>
        <ToneMapping mode={ToneMappingMode.AGX} />
      </EffectComposer>
    );
  }
  const high = tier === 'high';
  return (
    <EffectComposer multisampling={0} enableNormalPass={false}>
      <Bloom mipmapBlur levels={high ? 5 : 4} intensity={bloom} luminanceThreshold={0.22} luminanceSmoothing={0.15} radius={0.45} />
      <ToneMapping mode={ToneMappingMode.AGX} />
      {high ? <SMAA /> : <></>}
      {high ? <Noise premultiply blendFunction={BlendFunction.ADD} opacity={0.035} /> : <></>}
    </EffectComposer>
  );
}
