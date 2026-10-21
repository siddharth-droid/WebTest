'use client';

import { useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Bloom, EffectComposer, Noise, SMAA, ToneMapping, Vignette } from '@react-three/postprocessing';
import { BlendFunction, ToneMappingMode } from 'postprocessing';
import { AerialPerspective, Atmosphere, Sky, Stars, type AtmosphereApi } from '@takram/three-atmosphere/r3f';
import { Ellipsoid } from '@takram/three-geospatial';
import * as THREE from 'three';
import { asset } from '@/lib/asset';
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
  stars?: boolean;
  children?: React.ReactNode;
}

/**
 * Physically based atmosphere (Bruneton precomputed scattering via
 * @takram/three-atmosphere): limb glow, sky colour, twilight and real stars.
 */
export function GlobeAtmosphere({ earth, radius, sun, mode, stars = true, children }: GlobeAtmosphereProps) {
  const [atmosphere, setAtmosphere] = useState<AtmosphereApi | null>(null);
  return (
    <Atmosphere ref={setAtmosphere} ellipsoid={SPHERE} correctAltitude>
      {atmosphere && <FrameSync atmosphere={atmosphere} earth={earth} radius={radius} sun={sun} mode={mode} />}
      <Sky />
      {stars && <Stars data={asset('/textures/sky/stars.bin')} intensity={0.9} pointSize={1.2} />}
      {children}
    </Atmosphere>
  );
}

function FrameSync({
  atmosphere,
  earth,
  radius,
  sun,
  mode,
}: { atmosphere: AtmosphereApi } & Pick<GlobeAtmosphereProps, 'earth' | 'radius' | 'sun' | 'mode'>) {
  const m = useMemo(
    () => ({ inv: new THREE.Matrix4(), scale: new THREE.Matrix4(), rot: new THREE.Matrix3(), v: new THREE.Vector3() }),
    [],
  );
  // Runs before the atmosphere components copy their state each frame
  useFrame(() => {
    const g = earth.current;
    if (!g) return;
    g.updateWorldMatrix(true, false);
    if (mode === 'real') atmosphere.updateByDate(new Date());

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

/** Post chain: atmosphere haze over the planet, then bloom, tone mapping and film finish. */
export function GlobeEffects({ bloom = 0.6 }: { bloom?: number }) {
  const gl = useThree((s) => s.gl);
  useMemo(() => {
    gl.toneMappingExposure = EXPOSURE;
  }, [gl]);
  const ref = useRef(null);
  return (
    <EffectComposer multisampling={0} enableNormalPass={false}>
      {/* Extinction only: in-scattering is computed per pixel in the Earth shader, which suits our scaled scene better */}
      <AerialPerspective ref={ref} transmittance inscatter={false} correctGeometricError={false} />
      <Bloom mipmapBlur intensity={bloom} luminanceThreshold={0.22} luminanceSmoothing={0.15} radius={0.7} />
      <ToneMapping mode={ToneMappingMode.AGX} />
      <SMAA />
      <Vignette offset={0.32} darkness={0.62} />
      <Noise premultiply blendFunction={BlendFunction.ADD} opacity={0.035} />
    </EffectComposer>
  );
}
