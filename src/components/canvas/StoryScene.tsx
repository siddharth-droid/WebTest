'use client';

import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { eciToGeodetic, gstime, json2satrec, propagate, degreesLat, degreesLong, type OMMJsonObject, type SatRec } from 'satellite.js';
import { SUNRISE_MINUTES, story } from '@/lib/story';
import { dprRange, getTier, useTier } from '@/lib/quality';
import { loadData } from '@/lib/data';
import { eciToScene, isSunlit, sunEci } from '@/lib/sat/astro';
import { Earth } from './Earth';
import { Satellite } from './Satellite';
import { SpaceLighting } from './SpaceLighting';
import { RealConstellation } from './RealConstellation';
import { GlobeAtmosphere, GlobeEffects } from '@/components/globe/Globe';
import { AdaptiveQuality } from './AdaptiveQuality';

const EARTH_R = 6;
/** The station is drawn ~600× life size so it reads at this scale. */
const ISS_SIZE = 0.12;

/** The moment the scene shows: the real clock plus however far the reader has scrolled ahead. */
const shownDate = () => new Date(Date.now() + story.minutes * story.timeScale * 60_000);

/**
 * The next time the station flies out of Earth's shadow, at least `after`
 * minutes from now (plus a little, so it is already sunlit with the
 * sunrise on the horizon ahead).
 */
function nextSunrise(rec: SatRec, after: number): number | null {
  const now = Date.now();
  let wasLit: boolean | null = null;
  for (let m = after; m < after + 100; m += 0.25) {
    const date = new Date(now + m * 60_000);
    const pv = propagate(rec, date);
    if (!pv) return null;
    const lit = isSunlit(pv.position, sunEci(date));
    if (wasLit === false && lit) return now + (m + 0.6) * 60_000;
    wasLit = lit;
  }
  return null;
}

/** Fallback while orbital elements load: a circular 51.6° orbit at 420 km. */
const FALLBACK_INC = THREE.MathUtils.degToRad(51.6);
function fallbackState(minutes: number, pos: THREE.Vector3, vel: THREE.Vector3) {
  const u = 0.5 + (minutes / 92.7) * Math.PI * 2;
  const r = EARTH_R * (1 + 420 / 6371);
  const e2 = new THREE.Vector3(0, Math.sin(FALLBACK_INC), -Math.cos(FALLBACK_INC));
  pos.set(Math.cos(u), 0, 0).addScaledVector(e2, Math.sin(u)).multiplyScalar(r);
  vel.set(-Math.sin(u), 0, 0).addScaledVector(e2, Math.cos(u)).normalize();
}

function useIss() {
  const [rec, setRec] = useState<SatRec | null>(null);
  useEffect(() => {
    loadData<{ satellites: OMMJsonObject[] }>('featured.json')
      .then((d) => {
        const iss = d.satellites.find((s) => Number(s.NORAD_CAT_ID) === 25544);
        if (iss) setRec(json2satrec(iss));
      })
      .catch(() => undefined);
  }, []);
  return rec;
}

/** Camera and station both follow `story`: the station along its real orbit, the camera in its frame. */
function Rig({ station, sun, rec }: { station: React.RefObject<THREE.Group | null>; sun: THREE.Vector3; rec: SatRec | null }) {
  const v = useMemo(
    () => ({
      pos: new THREE.Vector3(),
      vel: new THREE.Vector3(),
      fwd: new THREE.Vector3(),
      up: new THREE.Vector3(),
      right: new THREE.Vector3(),
      cam: new THREE.Vector3(),
      look: new THREE.Vector3(),
      global: new THREE.Vector3(),
      basis: new THREE.Matrix4(),
      extra: new THREE.Quaternion(),
      euler: new THREE.Euler(),
      origin: new THREE.Vector3(),
      worldUp: new THREE.Vector3(0, 1, 0),
    }),
    [],
  );
  const parallax = useRef({ x: 0, y: 0 });
  const pointer = useRef({ x: 0, y: 0 });
  const lastLive = useRef(0);
  const sunrise = useRef<number | null>(null);
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

    // Time the ride so the sunrise chapter arrives at the real sunrise (kept 20–110 min out)
    if (rec) {
      const ahead = sunrise.current === null ? -1 : (sunrise.current - Date.now()) / 60_000;
      if (ahead < 20) sunrise.current = nextSunrise(rec, 20) ?? Date.now() + SUNRISE_MINUTES * 60_000;
      if (sunrise.current !== null) story.timeScale = (sunrise.current - Date.now()) / 60_000 / SUNRISE_MINUTES;
    }

    // Where the real ISS is at the shown moment
    const date = shownDate();
    const pv = rec ? propagate(rec, date) : null;
    if (pv) {
      eciToScene(pv.position.x, pv.position.y, pv.position.z, v.pos).multiplyScalar(EARTH_R);
      eciToScene(pv.velocity.x, pv.velocity.y, pv.velocity.z, v.vel).normalize();
      if (performance.now() - lastLive.current > 500) {
        lastLive.current = performance.now();
        const g = eciToGeodetic(pv.position, gstime(date));
        story.live = {
          lat: degreesLat(g.latitude),
          lon: degreesLong(g.longitude),
          alt: g.height,
          sunlit: isSunlit(pv.position, sunEci(date)),
          ready: true,
        };
      }
    } else {
      fallbackState(story.minutes * story.timeScale, v.pos, v.vel);
    }
    v.up.copy(v.pos).normalize();
    v.fwd.copy(v.vel).addScaledVector(v.up, -v.vel.dot(v.up)).normalize();
    v.right.crossVectors(v.fwd, v.up).normalize();

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
      .addScaledVector(v.up, cam.up * (1 + intro * 2) + parallax.current.y * 0.02)
      .addScaledVector(v.right, side * pull + parallax.current.x * 0.035);
    v.look
      .copy(v.pos)
      .addScaledVector(v.fwd, look.ahead)
      .addScaledVector(v.up, look.up)
      .addScaledVector(v.right, lookSide);

    // Wide planetary shot: from the sunlit side, a little above the station's latitude
    const g = story.global;
    v.global
      .copy(sun)
      .applyAxisAngle(v.worldUp, 0.6 + parallax.current.x * 0.05)
      .addScaledVector(v.worldUp, 0.35)
      .normalize()
      .multiplyScalar(EARTH_R * 3.6);
    camera.position.lerpVectors(v.cam, v.global, g);
    v.look.lerp(v.origin, g);
    camera.up.copy(v.up).lerp(v.worldUp, g).normalize();
    camera.lookAt(v.look);

    // Frame the subject beside the copy: shift the image instead of aiming off-centre,
    // so perspective stays natural (on phones the copy sits below, so centre it)
    const fx = story.frameX * (1 - narrow);
    (camera as THREE.PerspectiveCamera).setViewOffset(size.width, size.height, -fx * size.width, 0, size.width, size.height);
  });
  return null;
}

/**
 * Mounted once the planet's textures are in: compile every shader in the
 * scene up front (in parallel where the driver allows), then let the page
 * reveal. Without this, each material compiles the first time it is drawn,
 * which shows up as a hitch mid-scroll.
 */
function Ready({ onReady }: { onReady?: () => void }) {
  const { gl, scene, camera } = useThree();
  useEffect(() => {
    let cancelled = false;
    gl.compileAsync(scene, camera)
      .catch(() => undefined)
      .then(() => {
        if (!cancelled) requestAnimationFrame(() => onReady?.());
      });
    return () => {
      cancelled = true;
    };
  }, [gl, scene, camera, onReady]);
  return null;
}

export default function StoryScene({ onReady }: { onReady?: () => void }) {
  const earth = useRef<THREE.Group>(null);
  const station = useRef<THREE.Group>(null);
  const sun = useMemo(() => new THREE.Vector3(1, 0.3, 0.4).normalize(), []);
  const rec = useIss();
  const tier = useTier();
  const shadows = tier === 'high';

  return (
    <div className="stage">
      <Canvas
        shadows={shadows}
        flat
        dpr={dprRange(getTier())[1]}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        camera={{ fov: 32, near: 0.005, far: 4000, position: [0, 2, 30] }}
      >
        <AdaptiveQuality />
        <color attach="background" args={['#000000']} />
        <Rig station={station} sun={sun} rec={rec} />
        <Suspense fallback={null}>
          <GlobeAtmosphere earth={earth} radius={EARTH_R} sun={sun} mode="real" date={shownDate}>
            <SpaceLighting sun={sun} directional={false} />
            <Earth ref={earth} radius={EARTH_R} sun={sun} spin={() => gstime(shownDate())} />
            <RealConstellation earthRadius={EARTH_R} opacity={() => story.constellation} />
            <GlobeEffects bloom={0.55} />
          </GlobeAtmosphere>
          <Ready onReady={onReady} />
        </Suspense>
        {/* The station streams in on its own, so the planet never waits for it */}
        <group ref={station}>
          <Suspense fallback={null}>
            <Satellite
              model="issHd"
              size={ISS_SIZE}
              hotspots
              float={false}
              sun={sun}
              shadows={shadows}
              reflections
              illumination={() => (story.live.ready && !story.live.sunlit ? 0.04 : 1)}
            />
          </Suspense>
        </group>
      </Canvas>
    </div>
  );
}
