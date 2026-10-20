'use client';

import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { story } from '@/lib/story';
import { Earth } from './Earth';
import { Satellite } from './Satellite';
import { Starfield } from './Starfield';
import { SpaceLighting } from './SpaceLighting';
import { Constellation } from './Constellation';
import { Effects } from './Effects';

const SUN = new THREE.Vector3(1, 0.4, 0.45).normalize();
const EARTH_RADIUS = 12;
const EARTH_POSITION: [number, number, number] = [0, -16.5, -9];

/** Copies the scroll-driven numbers in `story` onto the camera every frame. */
function CameraRig() {
  const look = useMemo(() => new THREE.Vector3(), []);
  const parallax = useRef({ x: 0, y: 0 });
  // The canvas sits behind the page, so listen on window rather than via R3F events
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
    // Pointer parallax, critically damped so it never feels twitchy
    parallax.current.x = THREE.MathUtils.damp(parallax.current.x, pointer.current.x, 2.5, dt);
    parallax.current.y = THREE.MathUtils.damp(parallax.current.y, pointer.current.y, 2.5, dt);

    const { camera: c, target: t, intro } = story;

    // Shots are composed for landscape. On narrow screens, pull back and
    // recentre on the spacecraft so it stays in frame.
    const narrow = THREE.MathUtils.clamp((1.6 - size.width / size.height) / 1.1, 0, 1);
    const pull = 1 + narrow * 1.1;
    const tx = THREE.MathUtils.lerp(t.x, t.x * 0.15, narrow);

    look.set(tx, t.y - intro * 1.5, t.z);
    camera.position.set(
      tx + (c.x - t.x) * pull + parallax.current.x * 0.45,
      t.y + (c.y - t.y) * pull + parallax.current.y * 0.3 + intro * 4,
      t.z + (c.z - t.z) * pull + intro * 16,
    );
    camera.lookAt(look);
  });
  return null;
}

function StorySatellite() {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const s = story.satellite;
    ref.current.rotation.set(s.rx, s.ry + clock.elapsedTime * 0.012, s.rz);
  });
  return (
    <group ref={ref}>
      <Satellite size={5.2} hotspots />
    </group>
  );
}

export default function StoryScene() {
  return (
    <div className="stage">
      <Canvas
        flat
        dpr={[1, 2]}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        camera={{ fov: 32, near: 0.1, far: 2000, position: [0, 2, 30] }}
      >
        <color attach="background" args={['#02040a']} />
        <CameraRig />
        <Suspense fallback={null}>
          <SpaceLighting sun={SUN} />
          <Starfield />
          <group position={EARTH_POSITION} rotation-z={0.38}>
            <Earth radius={EARTH_RADIUS} sun={SUN} spin={(t) => t * 0.006 + story.earthSpin} />
            <Constellation earthRadius={EARTH_RADIUS} opacity={() => story.constellation} linkRange={0.7} />
          </group>
          <StorySatellite />
          <Effects />
        </Suspense>
      </Canvas>
    </div>
  );
}
