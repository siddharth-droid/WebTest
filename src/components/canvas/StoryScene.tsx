'use client';

import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { story } from '@/lib/story';
import { Satellite } from './Satellite';
import { RealConstellation } from './RealConstellation';
import { RetroEarth } from '@/components/retro/RetroEarth';
import { RetroStars, RetroSun } from '@/components/retro/RetroSky';
import { RetroEffects } from '@/components/retro/RetroEffect';
import { PALETTE } from '@/components/retro/palette';

const EARTH_R = 6;
/** ISS altitude, 420 km, in scene units. */
const ORBIT_R = EARTH_R * (1 + 420 / 6371);
const INCLINATION = THREE.MathUtils.degToRad(51.6);
/** The station is drawn ~700× life size so it reads at this scale. */
const ISS_SIZE = 0.13;

// Orbit plane basis: P(u) = r (cos u · E1 + sin u · E2)
const E1 = new THREE.Vector3(1, 0, 0);
const E2 = new THREE.Vector3(0, Math.sin(INCLINATION), -Math.cos(INCLINATION));
const NORMAL = new THREE.Vector3().crossVectors(E1, E2);

/** Sun overhead a little before the hero position, so the chase ends crossing into night. */
const SUN = new THREE.Vector3()
  .addScaledVector(E1, Math.cos(0.32))
  .addScaledVector(E2, Math.sin(0.32))
  .addScaledVector(NORMAL, 0.28)
  .normalize();

/** Wide establishing shot of the whole planet, on the daylit side. */
const GLOBAL_CAM = new THREE.Vector3().copy(SUN).applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.55).multiplyScalar(EARTH_R * 3.6).add(new THREE.Vector3(0, EARTH_R * 0.7, 0));

function orbitFrame(u: number, pos: THREE.Vector3, fwd: THREE.Vector3, up: THREE.Vector3, right: THREE.Vector3) {
  pos.copy(E1).multiplyScalar(Math.cos(u)).addScaledVector(E2, Math.sin(u)).multiplyScalar(ORBIT_R);
  fwd.copy(E1).multiplyScalar(-Math.sin(u)).addScaledVector(E2, Math.cos(u)).normalize();
  up.copy(pos).normalize();
  right.crossVectors(fwd, up).normalize();
}

/** Camera and station both follow `story`: the station along its orbit, the camera in its frame. */
function Rig({ station }: { station: React.RefObject<THREE.Group | null> }) {
  const v = useMemo(
    () => ({
      pos: new THREE.Vector3(),
      fwd: new THREE.Vector3(),
      up: new THREE.Vector3(),
      right: new THREE.Vector3(),
      cam: new THREE.Vector3(),
      look: new THREE.Vector3(),
      gl: new THREE.Vector3(),
      basis: new THREE.Matrix4(),
      extra: new THREE.Quaternion(),
      euler: new THREE.Euler(),
    }),
    [],
  );
  const parallax = useRef({ x: 0, y: 0 });
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  useFrame(({ camera, size }, dt) => {
    parallax.current.x = THREE.MathUtils.damp(parallax.current.x, pointer.current.x, 2.5, dt);
    parallax.current.y = THREE.MathUtils.damp(parallax.current.y, pointer.current.y, 2.5, dt);
    const { cam, look, intro } = story;
    orbitFrame(story.orbitU, v.pos, v.fwd, v.up, v.right);

    // Station: fly along the velocity vector, "up" away from Earth, plus a staging rotation
    if (station.current) {
      station.current.position.copy(v.pos);
      v.basis.makeBasis(v.right, v.up, v.fwd.clone().negate());
      station.current.quaternion.setFromRotationMatrix(v.basis);
      v.extra.setFromEuler(v.euler.set(story.sat.pitch, story.sat.yaw, story.sat.roll));
      station.current.quaternion.multiply(v.extra);
    }

    // Narrow screens: pull back and centre the station
    const narrow = THREE.MathUtils.clamp((1.6 - size.width / size.height) / 1.1, 0, 1);
    const pull = 1 + narrow * 0.9 + intro * 6;
    const side = THREE.MathUtils.lerp(cam.side, cam.side * 0.2, narrow);
    const lookSide = THREE.MathUtils.lerp(look.side, 0, narrow);

    v.cam
      .copy(v.pos)
      .addScaledVector(v.fwd, -cam.back * pull)
      .addScaledVector(v.up, cam.up * (1 + intro * 2) + parallax.current.y * 0.03)
      .addScaledVector(v.right, side * pull + parallax.current.x * 0.05);
    v.look
      .copy(v.pos)
      .addScaledVector(v.fwd, look.ahead)
      .addScaledVector(v.up, look.up)
      .addScaledVector(v.right, lookSide);

    // Blend toward the wide planetary shot
    const g = story.global;
    v.gl.copy(GLOBAL_CAM).applyAxisAngle(new THREE.Vector3(0, 1, 0), parallax.current.x * 0.05);
    camera.position.lerpVectors(v.cam, v.gl, g);
    v.look.lerp(new THREE.Vector3(0, 0, 0), g);
    camera.up.copy(v.up).lerp(new THREE.Vector3(0, 1, 0), g).normalize();
    camera.lookAt(v.look);

    // Frame the subject beside the copy: shift the image instead of aiming off-centre,
    // so perspective stays natural (on phones the copy sits below, so centre it)
    const fx = story.frameX * (1 - narrow);
    const persp = camera as THREE.PerspectiveCamera;
    persp.setViewOffset(size.width, size.height, -fx * size.width, 0, size.width, size.height);
  });
  return null;
}

/**
 * The landing scene, styled as a 1970s anime cel: flat-shaded planet and
 * station with ink outlines, a poster sun, sparkle stars and a film finish.
 * Deliberately light: no physical atmosphere, no shadow maps, one post pass.
 */
export default function StoryScene() {
  const station = useRef<THREE.Group>(null);
  const sun = useMemo(() => SUN.clone(), []);

  return (
    <div className="stage">
      <Canvas
        flat
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        camera={{ fov: 32, near: 0.005, far: 4000, position: [0, 2, 30] }}
      >
        <color attach="background" args={[PALETTE.ink]} />
        <Rig station={station} />
        <hemisphereLight args={[PALETTE.cream, PALETTE.navy, 0.9]} />
        <RetroStars />
        <RetroSun sun={sun} />
        <Suspense fallback={null}>
          <RetroEarth radius={EARTH_R} sun={sun} spin={(t) => t * 0.002} />
          <RealConstellation earthRadius={EARTH_R} brightness={1.1} opacity={() => story.constellation} />
        </Suspense>
        <group ref={station}>
          <Suspense fallback={null}>
            <Satellite model="issHd" size={ISS_SIZE} hotspots float={false} sun={sun} toon />
          </Suspense>
        </group>
        <RetroEffects />
      </Canvas>
    </div>
  );
}
