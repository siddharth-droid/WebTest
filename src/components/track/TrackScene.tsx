'use client';

import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Html, Lightformer, OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three';
import { propagate } from 'satellite.js';
import { Earth } from '@/components/canvas/Earth';
import { Satellite, type ModelId } from '@/components/canvas/Satellite';
import { Starfield } from '@/components/canvas/Starfield';
import { Effects } from '@/components/canvas/Effects';
import { eventColor } from '@/lib/events';
import { earthRotation, eciToScene, latLonToScene, sunDirection } from '@/lib/sat/astro';
import { satrecFor, type Catalog, type SatelliteRecord } from '@/lib/sat/catalog';
import type { Observer } from '@/lib/sat/passes';
import { SatelliteCloud } from './SatelliteCloud';
import type { LiveSnapshot } from './useLiveCatalog';

/** Real 3D models for satellites NASA has published one for. */
const MODEL_FOR: Record<number, ModelId> = { 25544: 'iss', 20580: 'hubble', 39084: 'landsat8' };
const OVERVIEW_DISTANCE = 3.4;
const FOLLOW_DISTANCE = 0.09;

export interface AuroraGrid {
  width: number;
  height: number;
  grid: string;
}

export interface EarthEvent {
  id: string;
  title: string;
  category: string;
  lat: number;
  lon: number;
}

interface TrackSceneProps {
  catalog: Catalog;
  live: React.MutableRefObject<LiveSnapshot | null>;
  visibleCategories: Set<string>;
  selected: SatelliteRecord | null;
  hovered: number | null;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
  onDeselect: () => void;
  observer: Observer | null;
  aurora: AuroraGrid | null;
  events: EarthEvent[] | null;
  showOrbit: boolean;
}

/** Where a satellite is right now, in scene units (null if SGP4 fails, e.g. after decay). */
function satPosition(sat: SatelliteRecord, date: Date, out: THREE.Vector3) {
  const pv = propagate(satrecFor(sat), date);
  if (!pv) return null;
  return eciToScene(pv.position.x, pv.position.y, pv.position.z, out);
}

function TrackLighting({ sun }: { sun: THREE.Vector3 }) {
  const light = useRef<THREE.DirectionalLight>(null);
  useFrame(() => light.current?.position.copy(sun).multiplyScalar(40));
  return (
    <>
      <directionalLight ref={light} intensity={4} color="#fff3e2" />
      <hemisphereLight args={['#05070d', '#1e4f9c', 0.4]} />
      <Environment resolution={128} frames={1} environmentIntensity={0.7}>
        <Lightformer form="rect" intensity={2} color="#fff1dc" position={[10, 4, 6]} scale={[4, 4, 1]} target={[0, 0, 0]} />
        <Lightformer form="rect" intensity={0.6} color="#4a6c9e" position={[0, -10, 0]} rotation-x={Math.PI / 2} scale={[40, 40, 1]} />
      </Environment>
    </>
  );
}

function FollowRig({ selected }: { selected: SatelliteRecord | null }) {
  const controls = useThree((s) => s.controls) as OrbitControlsImpl | null;
  const camera = useThree((s) => s.camera);
  const flying = useRef(true);
  const v = useMemo(
    () => ({ goal: new THREE.Vector3(), ahead: new THREE.Vector3(), delta: new THREE.Vector3(), offset: new THREE.Vector3(), dir: new THREE.Vector3(), up: new THREE.Vector3() }),
    [],
  );

  useEffect(() => {
    flying.current = true;
  }, [selected]);

  useFrame((_, dt) => {
    if (!controls) return;
    const k = 1 - Math.exp(-dt * 2.4);
    const now = new Date();
    const ok = selected && satPosition(selected, now, v.goal) && satPosition(selected, new Date(now.getTime() + 60_000), v.ahead);
    if (!ok) v.goal.set(0, 0, 0);

    v.delta.copy(v.goal).sub(controls.target).multiplyScalar(ok && !flying.current ? 1 : k);
    controls.target.add(v.delta);
    camera.position.add(v.delta);

    if (flying.current) {
      v.offset.copy(camera.position).sub(controls.target);
      const dist = v.offset.length();
      const desired = ok ? FOLLOW_DISTANCE : OVERVIEW_DISTANCE;
      if (ok) {
        // Chase cam: behind and above, looking along the ground track
        v.up.copy(v.goal).normalize();
        v.dir.copy(v.goal).sub(v.ahead).normalize().multiplyScalar(0.85).addScaledVector(v.up, 0.5).normalize();
        v.offset.normalize().lerp(v.dir, k).normalize();
      }
      v.offset.setLength(THREE.MathUtils.lerp(dist, desired, k));
      camera.position.copy(controls.target).add(v.offset);
      if (Math.abs(dist - desired) < desired * 0.02 && v.goal.distanceTo(controls.target) < 1e-3) flying.current = false;
    }
    controls.update();
  });
  return null;
}

function SelectedSatellite({ sat, showOrbit }: { sat: SatelliteRecord; showOrbit: boolean }) {
  const group = useRef<THREE.Group>(null);
  const p = useMemo(() => new THREE.Vector3(), []);
  const ahead = useMemo(() => new THREE.Vector3(), []);
  const model = MODEL_FOR[sat.norad];

  // One full revolution of the orbit, from now, in the inertial frame
  const orbit = useMemo(() => {
    const periodMs = (1440 / sat.meanMotion) * 60_000;
    const t0 = Date.now();
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 240; i++) {
      const q = satPosition(sat, new Date(t0 + (i / 240) * periodMs), new THREE.Vector3());
      if (q) pts.push(q);
    }
    const g = new THREE.BufferGeometry().setFromPoints(pts);
    return new THREE.Line(g, new THREE.LineBasicMaterial({ color: '#e8edf5', transparent: true, opacity: 0.35, depthWrite: false }));
  }, [sat]);

  useEffect(() => () => orbit.geometry.dispose(), [orbit]);

  useFrame(() => {
    if (!group.current) return;
    const now = new Date();
    if (!satPosition(sat, now, p) || !satPosition(sat, new Date(now.getTime() + 30_000), ahead)) return;
    group.current.position.copy(p);
    group.current.up.copy(p).normalize();
    group.current.lookAt(ahead);
  });

  return (
    <>
      {showOrbit && <primitive object={orbit} />}
      <group ref={group}>
        {model && (
          <Suspense fallback={null}>
            <Satellite model={model} size={0.02} float={false} />
          </Suspense>
        )}
        <Html zIndexRange={[20, 10]} style={{ pointerEvents: 'none' }}>
          <div className="sat-tag mono">{sat.name}</div>
        </Html>
      </group>
    </>
  );
}

function ObserverPin({ observer }: { observer: Observer }) {
  const pos = useMemo(() => latLonToScene(observer.lat, observer.lon, 1.002), [observer]);
  return (
    <group position={pos}>
      <mesh>
        <sphereGeometry args={[0.008, 16, 16]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
      <Html zIndexRange={[20, 10]} style={{ pointerEvents: 'none' }}>
        <div className="observer-tag mono">{observer.label ?? 'You'}</div>
      </Html>
    </group>
  );
}

/** NOAA OVATION aurora probability, draped just above the surface (Earth-fixed). */
function AuroraLayer({ aurora }: { aurora: AuroraGrid }) {
  const texture = useMemo(() => {
    const raw = Uint8Array.from(atob(aurora.grid), (c) => c.charCodeAt(0));
    const { width: w, height: h } = aurora;
    const data = new Uint8Array(w * h * 4);
    for (let row = 0; row < h; row++) {
      for (let col = 0; col < w; col++) {
        // Texture column 0 is longitude −180; the grid's column 0 is longitude 0
        const p = raw[row * w + ((col + 180) % 360)] / 100;
        const o = (row * w + col) * 4;
        // Green → red as probability rises, like the aurora itself
        data[o] = Math.round(60 + 195 * Math.max(0, p - 0.5) * 2);
        data[o + 1] = 255;
        data[o + 2] = Math.round(140 * (1 - p));
        data[o + 3] = Math.round(255 * Math.min(1, p * 1.8));
      }
    }
    const t = new THREE.DataTexture(data, w, h, THREE.RGBAFormat);
    t.magFilter = THREE.LinearFilter;
    t.minFilter = THREE.LinearFilter;
    t.colorSpace = THREE.SRGBColorSpace;
    t.needsUpdate = true;
    return t;
  }, [aurora]);

  return (
    <mesh scale={1.01}>
      <sphereGeometry args={[1, 128, 64]} />
      <meshBasicMaterial map={texture} transparent depthWrite={false} blending={THREE.AdditiveBlending} toneMapped={false} />
    </mesh>
  );
}


function EventMarkers({ events }: { events: EarthEvent[] }) {
  return (
    <>
      {events.map((e) => (
        <mesh key={e.id} position={latLonToScene(e.lat, e.lon, 1.003)}>
          <sphereGeometry args={[0.006, 10, 10]} />
          <meshBasicMaterial color={eventColor(e.category)} toneMapped={false} />
        </mesh>
      ))}
    </>
  );
}

export default function TrackScene(props: TrackSceneProps) {
  const { catalog, live, visibleCategories, selected, hovered, onSelect, onHover, onDeselect, observer, aurora, events, showOrbit } = props;
  const sun = useMemo(() => sunDirection(new Date()), []);

  return (
    <div className="stage">
      <Canvas
        flat
        dpr={[1, 2]}
        gl={{ antialias: false }}
        camera={{ fov: 40, near: 0.001, far: 3000, position: [1.2, 1.4, 3.0] }}
        raycaster={{ params: { Points: { threshold: 0.012 } } as THREE.Raycaster['params'] }}
        onPointerMissed={onDeselect}
        style={{ cursor: hovered !== null ? 'pointer' : 'grab' }}
      >
        <color attach="background" args={['#02040a']} />
        <SunTracker sun={sun} />
        <OrbitControls makeDefault enablePan={false} enableDamping dampingFactor={0.08} rotateSpeed={0.45} minDistance={selected ? 0.02 : 1.15} maxDistance={40} />
        <FollowRig selected={selected} />
        <Suspense fallback={null}>
          <TrackLighting sun={sun} />
          <Starfield />
          <Earth radius={1} sun={sun} spin={() => earthRotation(new Date())}>
            {observer && <ObserverPin observer={observer} />}
            {aurora && <AuroraLayer aurora={aurora} />}
            {events && <EventMarkers events={events} />}
          </Earth>
          <SatelliteCloud
            catalog={catalog}
            live={live}
            visibleCategories={visibleCategories}
            selected={selected?.index ?? null}
            hovered={hovered}
            onSelect={onSelect}
            onHover={onHover}
          />
          {selected && <SelectedSatellite sat={selected} showOrbit={showOrbit} />}
          <Effects bloom={0.55} />
        </Suspense>
      </Canvas>
    </div>
  );
}

/** Keeps the shared sun vector pointing at the real Sun. */
function SunTracker({ sun }: { sun: THREE.Vector3 }) {
  const last = useRef(0);
  useFrame(() => {
    const t = Date.now();
    if (t - last.current < 5_000) return;
    last.current = t;
    sunDirection(new Date(t), sun);
  });
  return null;
}
