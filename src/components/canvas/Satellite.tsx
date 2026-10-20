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
  /** Where on those parts: their centre, or this fraction of the way along their longest axis. */
  along?: number;
  title: string;
  detail: string;
  side: 'left' | 'right';
  /** Leader direction, so neighbouring labels don't stack on each other. */
  v?: 'up' | 'down';
}

const HOTSPOTS: Partial<Record<ModelId, Hotspot[]>> = {
  issHd: [
    { key: 'a', parts: /^IROSA/, along: 0.08, title: 'Solar arrays', detail: 'Turn to track the Sun', side: 'right', v: 'up' },
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
  /** Reflect the orbital surroundings (Earth below, the Sun) in metal surfaces. */
  reflections?: boolean;
  /** 0–1 multiplier on sunlight, e.g. 0 while the craft is in Earth's shadow. */
  illumination?: () => number;
}

export function Satellite({
  model: modelId = 'landsat8',
  size = 4,
  hotspots = false,
  float = true,
  shadows = false,
  sun,
  reflections = false,
  illumination,
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
      if (h.along !== undefined) {
        const d = box.getSize(new THREE.Vector3());
        const axis = d.x >= d.y && d.x >= d.z ? 'x' : d.y >= d.z ? 'y' : 'z';
        at[axis] = box.min[axis] + d[axis] * h.along;
      }
      anchors.set(h.key, at);
    }

    return { model, offset: center.clone().negate(), scale: size / Math.max(dims.x, dims.y, dims.z), anchors, wings };
  }, [scene, size, modelId, shadows]);

  // --- Reflections: what a craft in low orbit sees around it (the bright Earth filling the
  // lower sky, black space above, the Sun) painted into a tiny cube map. Far cheaper than
  // capturing the real scene, and metal still picks up the blue planet and the Sun's glint.
  const gl = useThree((s) => s.gl);
  const env = useMemo(() => (reflections ? createOrbitEnvironment() : null), [reflections]);
  useEffect(() => {
    if (!env) return;
    model.traverse((o) => {
      if (!(o instanceof THREE.Mesh)) return;
      for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
        if (m instanceof THREE.MeshStandardMaterial) {
          m.envMap = env.rt.texture;
          m.envMapIntensity = 1;
          m.needsUpdate = true;
        }
      }
    });
    return () => env.dispose();
  }, [env, model]);

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
      if (light.current) light.current.intensity = 11 * RADIANCE * (illumination ? illumination() : 1);
      updateWings(wings, model, sun, dt);
    }
    if (env && root && sun && frame.current++ % 30 === 0) {
      root.getWorldPosition(local.v);
      env.update(gl, local.v, sun, illumination ? illumination() : 1);
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

const envVertex = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const envFragment = /* glsl */ `
uniform vec3 uDown;
uniform vec3 uSun;
uniform float uHorizon;
uniform float uLight;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float below = dot(d, uDown);
  float earth = smoothstep(uHorizon - 0.03, uHorizon + 0.03, below);
  // Day side under a high sun is bright blue-white; the limb carries a thin blue band
  float day = clamp(dot(-uDown, uSun) * 0.8 + 0.35, 0.0, 1.0) * uLight;
  vec3 ground = mix(vec3(0.05, 0.09, 0.16), vec3(0.16, 0.22, 0.32), day) * day;
  vec3 limb = vec3(0.12, 0.3, 0.8) * exp(-abs(below - uHorizon) * 40.0) * day;
  vec3 sun = vec3(1.0, 0.95, 0.88) * pow(max(dot(d, uSun), 0.0), 600.0) * 24.0 * uLight;
  gl_FragColor = vec4(ground * earth + limb + sun, 1.0);
}
`;

/** A 32 px cube map of the orbital surroundings, redrawn as the craft moves. */
function createOrbitEnvironment() {
  const rt = new THREE.WebGLCubeRenderTarget(32, {
    type: THREE.HalfFloatType,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
  });
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uDown: { value: new THREE.Vector3(0, -1, 0) },
      uSun: { value: new THREE.Vector3(1, 0, 0) },
      // cos of the Earth's angular radius from 420 km up (≈ 70°)
      uHorizon: { value: Math.cos(Math.asin(6371 / 6791)) },
      uLight: { value: 1 },
    },
    vertexShader: envVertex,
    fragmentShader: envFragment,
    side: THREE.BackSide,
    depthWrite: false,
  });
  const scene = new THREE.Scene();
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), material);
  scene.add(sphere);
  const camera = new THREE.CubeCamera(0.1, 10, rt);
  return {
    rt,
    update(gl: THREE.WebGLRenderer, position: THREE.Vector3, sun: THREE.Vector3, light: number) {
      material.uniforms.uDown.value.copy(position).negate().normalize();
      material.uniforms.uSun.value.copy(sun);
      material.uniforms.uLight.value = light;
      camera.update(gl, scene);
    },
    dispose() {
      rt.dispose();
      material.dispose();
      sphere.geometry.dispose();
    },
  };
}
