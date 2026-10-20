'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { asset } from '@/lib/asset';
import { upgradeMaterial } from '@/lib/materials';
import { story, type HotspotKey } from '@/lib/story';

export const MODELS = {
  landsat8: asset('/models/landsat8.glb'),
  iss: asset('/models/iss.glb'),
  hubble: asset('/models/hubble.glb'),
};
export type ModelId = keyof typeof MODELS;

// Parts that make up the spacecraft body (the wing's frame reuses bronze/grey, so those are excluded)
const BUS_PARTS = /^LDCM-(gold-cyl|silver|white-sm|darkbronze)/;

/** Which parts of the model each hotspot points at, by material name. */
const HOTSPOT_PARTS: Record<HotspotKey, RegExp> = {
  array: /solarpanel-face|LRO-solarpanel-\d/i,
  instrument: /gold-cyl/i,
  propulsion: /thruster-out/i,
};

const HOTSPOT_COPY: Record<HotspotKey, { title: string; detail: string; side: 'left' | 'right' }> = {
  array: { title: 'Solar array', detail: 'Single deployable wing', side: 'right' },
  instrument: { title: 'Instrument deck', detail: 'OLI + TIRS imagers', side: 'left' },
  propulsion: { title: 'Propulsion', detail: 'Hydrazine thrusters', side: 'right' },
};

interface SatelliteProps {
  model?: ModelId;
  /** Longest dimension of the model in scene units. */
  size?: number;
  hotspots?: boolean;
  /** Zero-g drift. Turned off when the model is placed in orbit. */
  float?: boolean;
}

export function Satellite({ model: modelId = 'landsat8', size = 4, hotspots = false, float = true }: SatelliteProps) {
  const { scene } = useGLTF(MODELS[modelId]);
  const floatRef = useRef<THREE.Group>(null);

  const { model, offset, scale, anchors } = useMemo(() => {
    const model = scene.clone(true);
    model.traverse((o) => {
      if (o instanceof THREE.Mesh) {
        o.material = Array.isArray(o.material) ? o.material.map(upgradeMaterial) : upgradeMaterial(o.material);
        // Ambient occlusion baked into vertex colours in Blender (scripts/blender/bake_ao.py)
        if (o.geometry.attributes.color) {
          for (const m of Array.isArray(o.material) ? o.material : [o.material]) m.vertexColors = true;
        }
      }
    });
    model.updateMatrixWorld(true);

    const bounds = new THREE.Box3().setFromObject(model);
    const dims = bounds.getSize(new THREE.Vector3());

    // Pivot on the spacecraft bus rather than the bounding box, which the
    // long solar wing drags far off to one side.
    const bus = new THREE.Box3();
    model.traverse((o) => {
      if (o instanceof THREE.Mesh && BUS_PARTS.test((o.material as THREE.Material).name)) bus.expandByObject(o);
    });
    const center = (bus.isEmpty() || modelId !== 'landsat8' ? bounds : bus).getCenter(new THREE.Vector3());

    // Find each hotspot's anchor as the centre of the parts it refers to
    const anchors = {} as Record<HotspotKey, THREE.Vector3>;
    for (const key of Object.keys(HOTSPOT_PARTS) as HotspotKey[]) {
      const box = new THREE.Box3();
      model.traverse((o) => {
        if (o instanceof THREE.Mesh && HOTSPOT_PARTS[key].test((o.material as THREE.Material).name)) {
          box.expandByObject(o);
        }
      });
      anchors[key] = box.isEmpty() ? center.clone() : box.getCenter(new THREE.Vector3());
    }

    return { model, offset: center.clone().negate(), scale: size / Math.max(dims.x, dims.y, dims.z), anchors };
  }, [scene, size, modelId]);

  useFrame((state) => {
    if (!float || !floatRef.current) return;
    const t = state.clock.elapsedTime;
    floatRef.current.position.y = Math.sin(t * 0.55) * 0.06;
    floatRef.current.rotation.x = Math.sin(t * 0.37) * 0.035;
    floatRef.current.rotation.z = Math.cos(t * 0.29) * 0.03;
  });

  return (
    <group ref={floatRef}>
      <group scale={scale}>
        <group position={offset}>
          <primitive object={model} />
          {hotspots &&
            (Object.keys(anchors) as HotspotKey[]).map((key) => (
              <Hotspot key={key} id={key} position={anchors[key]} />
            ))}
        </group>
      </group>
    </group>
  );
}

function Hotspot({ id, position }: { id: HotspotKey; position: THREE.Vector3 }) {
  const el = useRef<HTMLDivElement>(null);
  const copy = HOTSPOT_COPY[id];

  // Visibility comes from the scroll timeline; written straight to the DOM.
  useFrame(() => {
    if (!el.current) return;
    const v = story.labels[id];
    el.current.style.opacity = String(v);
    el.current.style.transform = `translateY(${(1 - v) * 8}px)`;
  });

  return (
    <Html position={position} zIndexRange={[20, 10]} style={{ pointerEvents: 'none' }}>
      <div ref={el} className="hotspot" data-side={copy.side} style={{ opacity: 0 }}>
        <span className="hotspot-ring" />
        <span className="hotspot-leader" />
        <div className="hotspot-copy">
          <strong>{copy.title}</strong>
          <span>{copy.detail}</span>
        </div>
      </div>
    </Html>
  );
}

useGLTF.preload(MODELS.landsat8);
