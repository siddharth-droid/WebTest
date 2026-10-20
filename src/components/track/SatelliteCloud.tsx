'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree, type ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import type { Catalog } from '@/lib/sat/catalog';
import { groupOf } from '@/lib/sat/groups';
import type { LiveSnapshot } from './useLiveCatalog';

const vertex = /* glsl */ `
attribute vec3 aVel;
attribute vec3 aColor;
attribute float aIndex;
attribute float aVisible;
attribute float aStation;
uniform float uDt;
uniform float uSelected;
uniform float uHovered;
uniform float uPixelRatio;
uniform float uSize;
varying vec3 vColor;
varying float vAlpha;
varying float vRing;

void main() {
  // Position = last SGP4 sample + velocity × seconds since that sample
  vec3 p = position + aVel * uDt;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;

  bool sel = abs(aIndex - uSelected) < 0.5;
  bool hov = abs(aIndex - uHovered) < 0.5;
  // Points shrink a little with distance so the dense shells read as texture, not noise
  float size = uSize * (1.0 + aStation * 1.6) * clamp(3.0 / -mv.z, 0.55, 1.6);
  if (sel) size = 14.0;
  else if (hov) size = 10.0;
  gl_PointSize = size * uPixelRatio * aVisible;

  vColor = sel || hov ? vec3(1.0) : aColor;
  vAlpha = aVisible;
  vRing = sel ? 1.0 : 0.0;
}
`;

const fragment = /* glsl */ `
varying vec3 vColor;
varying float vAlpha;
varying float vRing;

void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  // Selected: hollow ring. Others: soft dot.
  float a = vRing > 0.5 ? smoothstep(0.5, 0.42, d) * smoothstep(0.28, 0.36, d) : smoothstep(0.5, 0.25, d);
  gl_FragColor = vec4(vColor, a * vAlpha);
}
`;

interface SatelliteCloudProps {
  catalog: Catalog;
  live: React.MutableRefObject<LiveSnapshot | null>;
  visibleCategories: Set<string>;
  selected: number | null;
  hovered: number | null;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
}

export function SatelliteCloud({ catalog, live, visibleCategories, selected, hovered, onSelect, onHover }: SatelliteCloudProps) {
  const points = useRef<THREE.Points>(null);
  const gl = useThree((s) => s.gl);
  const lastTime = useRef(0);
  const n = catalog.sats.length;

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const color = new Float32Array(n * 3);
    const index = new Float32Array(n);
    const station = new Float32Array(n);
    const c = new THREE.Color();
    catalog.sats.forEach((s, i) => {
      c.set(groupOf(s.category).color).toArray(color, i * 3);
      index[i] = i;
      station[i] = s.category === 'Stations' ? 1 : 0;
    });
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    g.setAttribute('aVel', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    g.setAttribute('aColor', new THREE.BufferAttribute(color, 3));
    g.setAttribute('aIndex', new THREE.BufferAttribute(index, 1));
    g.setAttribute('aStation', new THREE.BufferAttribute(station, 1));
    g.setAttribute('aVisible', new THREE.BufferAttribute(new Float32Array(n).fill(1), 1));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 10); // GEO is ~6.6 Earth radii
    return g;
  }, [catalog, n]);

  const uniforms = useMemo(
    () => ({
      uDt: { value: 0 },
      uSelected: { value: -1 },
      uHovered: { value: -1 },
      uPixelRatio: { value: 1 },
      uSize: { value: 2.2 },
    }),
    [],
  );

  useEffect(() => {
    const vis = geometry.attributes.aVisible as THREE.BufferAttribute;
    catalog.sats.forEach((s, i) => (vis.array[i] = visibleCategories.has(s.category) ? 1 : 0));
    vis.needsUpdate = true;
  }, [catalog, geometry, visibleCategories]);

  useEffect(() => {
    uniforms.uSelected.value = selected ?? -1;
    uniforms.uHovered.value = hovered ?? -1;
  }, [selected, hovered, uniforms]);

  useFrame(() => {
    const snap = live.current;
    if (!snap) return;
    if (snap.time !== lastTime.current) {
      // Fresh SGP4 sample from the worker: upload it
      (geometry.attributes.position.array as Float32Array).set(snap.positions);
      (geometry.attributes.aVel.array as Float32Array).set(snap.velocities);
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.aVel.needsUpdate = true;
      lastTime.current = snap.time;
    }
    uniforms.uDt.value = (Date.now() - snap.time) / 1000;
    uniforms.uPixelRatio.value = gl.getPixelRatio();
  });

  /** First hit that is visible and not hidden behind the Earth. */
  const pick = (e: ThreeEvent<PointerEvent | MouseEvent>) => {
    for (const hit of e.intersections) {
      if (hit.object !== points.current || hit.index === undefined) continue;
      const sat = catalog.sats[hit.index];
      if (!sat || !visibleCategories.has(sat.category)) continue;
      if (occludedByEarth(e.ray.origin, hit.point)) continue;
      return hit.index;
    }
    return null;
  };

  return (
    <points
      ref={points}
      geometry={geometry}
      frustumCulled={false}
      onClick={(e) => {
        const i = pick(e);
        if (i !== null) {
          e.stopPropagation();
          onSelect(i);
        }
      }}
      onPointerMove={(e) => onHover(pick(e))}
      onPointerOut={() => onHover(null)}
    >
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
        transparent
        depthWrite={false}
      />
    </points>
  );
}

const _d = new THREE.Vector3();
const _oc = new THREE.Vector3();
/** Does the segment from the camera to `p` pass through the unit-radius Earth? */
function occludedByEarth(origin: THREE.Vector3, p: THREE.Vector3) {
  _d.subVectors(p, origin);
  const len = _d.length();
  _d.divideScalar(len);
  _oc.copy(origin);
  const b = _oc.dot(_d);
  const c = _oc.lengthSq() - 1;
  const disc = b * b - c;
  if (disc < 0) return false;
  const t = -b - Math.sqrt(disc);
  return t > 0 && t < len - 1e-3;
}
