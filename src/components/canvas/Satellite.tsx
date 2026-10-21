'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { asset } from '@/lib/asset';
import { upgradeMaterial } from '@/lib/materials';
import { story, type HotspotKey } from '@/lib/story';
import { RADIANCE } from '@/components/globe/units';
import { buildWings, updateWings } from './stationDetail';

export const MODELS = {
  landsat8: asset('/models/landsat8.glb'),
  iss: asset('/models/iss.glb'),
  issHd: asset('/models/iss-hd.glb'),
  hubble: asset('/models/hubble.glb'),
};
export type ModelId = keyof typeof MODELS;

interface Hotspot {
  key: HotspotKey;
  /** Material names of the parts the label points at. */
  parts: RegExp;
  /** Where on those parts: their centre, or the far end along the model's longest axis. */
  anchor?: 'center' | 'end';
  title: string;
  detail: string;
  side: 'left' | 'right';
  /** Leader direction, so neighbouring labels don't stack on each other. */
  v?: 'up' | 'down';
}

const HOTSPOTS: Partial<Record<ModelId, Hotspot[]>> = {
  issHd: [
    { key: 'a', parts: /^IROSA/, anchor: 'end', title: 'Solar arrays', detail: 'Turn to track the Sun', side: 'right', v: 'up' },
    { key: 'b', parts: /^Node\.Cupola/, title: 'Cupola', detail: 'Seven-window observatory', side: 'right', v: 'down' },
    { key: 'c', parts: /^JEM_PM$/, title: 'Kibō', detail: 'Japan’s laboratory module', side: 'left', v: 'up' },
  ],
  landsat8: [
    { key: 'a', parts: /solarpanel-face|LRO-solarpanel-\d/i, title: 'Solar array', detail: 'Single deployable wing', side: 'right' },
    { key: 'b', parts: /gold-cyl/i, title: 'Instrument deck', detail: 'OLI + TIRS imagers', side: 'left' },
    { key: 'c', parts: /thruster-out/i, title: 'Propulsion', detail: 'Hydrazine thrusters', side: 'right' },
  ],
};

/** Parts that make up Landsat 8's body; the long wing would drag the pivot off to one side. */
const LANDSAT_BUS = /^LDCM-(gold-cyl|silver|white-sm|darkbronze)/;

interface SatelliteProps {
  model?: ModelId;
  /** Longest dimension of the model in scene units. */
  size?: number;
  hotspots?: boolean;
  /** Zero-g drift. Turned off when the model is placed in orbit. */
  float?: boolean;
  /** Self-shadowing from the sun light (costly on dense models). */
  shadows?: boolean;
  /**
   * World-space direction to the Sun. When given, the model brings its own
   * sun light (with shadows if enabled) and the ISS turns its wings to face it.
   */
  sun?: THREE.Vector3;
  /** Reflect the real surroundings (Earth, sky) via a live cube camera. */
  reflections?: boolean;
}

export function Satellite({
  model: modelId = 'landsat8',
  size = 4,
  hotspots = false,
  float = true,
  shadows = false,
  sun,
  reflections = false,
}: SatelliteProps) {
  const { scene } = useGLTF(MODELS[modelId]);
  const floatRef = useRef<THREE.Group>(null);
  const spots = HOTSPOTS[modelId] ?? [];

  const { model, offset, scale, anchors, wings } = useMemo(() => {
    const model = scene.clone(true);
    const wings = modelId === 'issHd' ? buildWings(model) : [];
    model.traverse((o) => {
      if (o instanceof THREE.Mesh) {
        o.material = Array.isArray(o.material) ? o.material.map(upgradeMaterial) : upgradeMaterial(o.material);
        // Ambient occlusion baked into vertex colours in Blender (scripts/blender/*.py)
        if (o.geometry.attributes.color) {
          for (const m of Array.isArray(o.material) ? o.material : [o.material]) m.vertexColors = true;
        }
        o.castShadow = shadows;
        o.receiveShadow = shadows;
      }
    });
    model.updateMatrixWorld(true);

    const bounds = new THREE.Box3().setFromObject(model);
    const dims = bounds.getSize(new THREE.Vector3());
    let pivot = bounds;
    if (modelId === 'landsat8') {
      const bus = new THREE.Box3();
      model.traverse((o) => {
        if (o instanceof THREE.Mesh && LANDSAT_BUS.test((o.material as THREE.Material).name)) bus.expandByObject(o);
      });
      if (!bus.isEmpty()) pivot = bus;
    }
    const center = pivot.getCenter(new THREE.Vector3());

    // Each hotspot sits at the centre of the parts it names
    const anchors = new Map<HotspotKey, THREE.Vector3>();
    for (const h of HOTSPOTS[modelId] ?? []) {
      const box = new THREE.Box3();
      model.traverse((o) => {
        if (!(o instanceof THREE.Mesh)) return;
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        if (mats.some((m) => h.parts.test(m.name))) box.expandByObject(o);
      });
      if (box.isEmpty()) {
        anchors.set(h.key, center.clone());
        continue;
      }
      const at = box.getCenter(new THREE.Vector3());
      if (h.anchor === 'end') {
        // Along the longest axis of the parts, 85% of the way to the far end
        const d = box.getSize(new THREE.Vector3());
        const axis = d.x >= d.y && d.x >= d.z ? 'x' : d.y >= d.z ? 'y' : 'z';
        at[axis] = box.min[axis] + d[axis] * 0.92;
      }
      anchors.set(h.key, at);
    }

    return { model, offset: center.clone().negate(), scale: size / Math.max(dims.x, dims.y, dims.z), anchors, wings };
  }, [scene, size, modelId, shadows]);

  // --- Live reflections: capture the surroundings from the craft's position every ~20 frames
  const gl = useThree((s) => s.gl);
  const scene3 = useThree((s) => s.scene);
  const cube = useMemo(() => {
    if (!reflections) return null;
    const rt = new THREE.WebGLCubeRenderTarget(128, { type: THREE.HalfFloatType, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter });
    return { rt, cam: new THREE.CubeCamera(size * 0.6, 5000, rt) };
  }, [reflections, size]);
  useEffect(() => {
    if (!cube) return;
    model.traverse((o) => {
      if (!(o instanceof THREE.Mesh)) return;
      for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
        if (m instanceof THREE.MeshStandardMaterial) {
          m.envMap = cube.rt.texture;
          m.envMapIntensity = 1;
          m.needsUpdate = true;
        }
      }
    });
    return () => cube.rt.dispose();
  }, [cube, model]);

  // --- Own sun light: tight shadow frustum around the craft
  const light = useRef<THREE.DirectionalLight>(null);
  const frame = useRef(0);
  const local = useMemo(() => ({ v: new THREE.Vector3(), q: new THREE.Quaternion() }), []);

  useFrame((state, dt) => {
    const root = floatRef.current;
    if (sun && root) {
      // Sun direction in this group's parent space, so the light sits sunward of the craft
      root.parent?.getWorldQuaternion(local.q);
      local.v.copy(sun).applyQuaternion(local.q.invert());
      light.current?.position.copy(local.v).multiplyScalar(size * 3);
      updateWings(wings, model, sun, dt);
    }
    if (cube && root && frame.current++ % 20 === 0) {
      root.visible = false;
      root.getWorldPosition(cube.cam.position);
      cube.cam.update(gl, scene3);
      root.visible = true;
    }
    if (!float || !root) return;
    const t = state.clock.elapsedTime;
    root.position.y = Math.sin(t * 0.55) * 0.01 * size;
    root.rotation.x = Math.sin(t * 0.37) * 0.02;
    root.rotation.z = Math.cos(t * 0.29) * 0.015;
  });

  return (
    <group ref={floatRef}>
      {sun && (
        <directionalLight
          ref={light}
          intensity={11 * RADIANCE}
          color="#fff4e6"
          castShadow={shadows}
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0004}
          shadow-normalBias={size * 0.004}
          shadow-camera-left={-size * 0.7}
          shadow-camera-right={size * 0.7}
          shadow-camera-top={size * 0.7}
          shadow-camera-bottom={-size * 0.7}
          shadow-camera-near={size * 0.5}
          shadow-camera-far={size * 6}
        />
      )}
      <group scale={scale}>
        <group position={offset}>
          <primitive object={model} />
          {hotspots &&
            spots.map((h) => <HotspotLabel key={h.key} spot={h} position={anchors.get(h.key)!} />)}
        </group>
      </group>
    </group>
  );
}

function HotspotLabel({ spot, position }: { spot: Hotspot; position: THREE.Vector3 }) {
  const el = useRef<HTMLDivElement>(null);
  // Visibility comes from the scroll timeline; written straight to the DOM.
  useFrame(() => {
    if (!el.current) return;
    const v = story.labels[spot.key];
    el.current.style.opacity = String(v);
    el.current.style.transform = `translateY(${(1 - v) * 8}px)`;
  });
  return (
    <Html position={position} zIndexRange={[20, 10]} style={{ pointerEvents: 'none' }}>
      <div ref={el} className="hotspot" data-side={spot.side} data-v={spot.v ?? 'up'} style={{ opacity: 0 }}>
        <span className="hotspot-ring" />
        <span className="hotspot-leader" />
        <div className="hotspot-copy">
          <strong>{spot.title}</strong>
          <span>{spot.detail}</span>
        </div>
      </div>
    </Html>
  );
}
