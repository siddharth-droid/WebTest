'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { asset } from '@/lib/asset';
import { upgradeMaterial } from '@/lib/materials';
import { story, type HotspotKey } from '@/lib/story';

const MODEL = asset('/models/landsat8.glb');

// Parts that make up the spacecraft body (the wing's frame reuses bronze/grey, so those are excluded)
const BUS_PARTS = /^LDCM-(gold-cyl|silver|white-sm|darkbronze)/;

/** Which parts of the model each hotspot points at, by material name. */
const HOTSPOT_PARTS: Record<HotspotKey, RegExp> = {
  array: /solarpanel-face|LRO-solarpanel-\d/i,
  instrument: /gold-cyl/i,
  propulsion: /thruster-out/i,
};

const HOTSPOT_COPY: Record<HotspotKey, { title: string; detail: string; side: 'left' | 'right' }> = {
  array: { title: 'Solar array', detail: '4.3 kW · triple-junction GaAs', side: 'right' },
  instrument: { title: 'Compute payload', detail: 'Rad-hard inference core', side: 'left' },
  propulsion: { title: 'Propulsion', detail: 'Hydrazine · 8 × 22 N', side: 'right' },
};

interface SatelliteProps {
  /** Longest dimension of the model in scene units. */
  size?: number;
  hotspots?: boolean;
  /** Zero-g drift. Turned off when the model is placed in orbit. */
  float?: boolean;
}

export function Satellite({ size = 4, hotspots = false, float = true }: SatelliteProps) {
  const { scene } = useGLTF(MODEL);
  const floatRef = useRef<THREE.Group>(null);

  const { model, offset, scale, anchors } = useMemo(() => {
    const model = scene.clone(true);
    model.traverse((o) => {
      if (o instanceof THREE.Mesh) {
        o.material = Array.isArray(o.material) ? o.material.map(upgradeMaterial) : upgradeMaterial(o.material);
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
    const center = (bus.isEmpty() ? bounds : bus).getCenter(new THREE.Vector3());

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
  }, [scene, size]);

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

useGLTF.preload(MODEL);
