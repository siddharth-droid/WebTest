'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { PALETTE } from './palette';

/**
 * A 1970s poster sun: a flat disc graded mustard to red, cut by horizontal
 * bands, inside a ring of halftone dots. Drawn once to a canvas.
 */
function sunTexture() {
  const n = 512;
  const c = document.createElement('canvas');
  c.width = c.height = n;
  const ctx = c.getContext('2d')!;
  const mid = n / 2;

  // Halftone halo: dots shrink with distance from the disc
  const step = 11;
  for (let y = step / 2; y < n; y += step) {
    for (let x = step / 2; x < n; x += step) {
      const d = Math.hypot(x - mid, y - mid) / mid;
      if (d < 0.36 || d > 1) continue;
      const r = (step / 2) * Math.pow(1 - (d - 0.36) / 0.64, 1.6) * 0.9;
      if (r < 0.4) continue;
      ctx.fillStyle = PALETTE.orange;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // The disc, with sunset bands cut from its lower half
  ctx.save();
  ctx.beginPath();
  ctx.arc(mid, mid, n * 0.2, 0, Math.PI * 2);
  ctx.clip();
  const g = ctx.createLinearGradient(0, mid - n * 0.2, 0, mid + n * 0.2);
  g.addColorStop(0, PALETTE.cream);
  g.addColorStop(0.35, PALETTE.mustard);
  g.addColorStop(0.75, PALETTE.orange);
  g.addColorStop(1, PALETTE.red);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, n, n);
  ctx.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 5; i++) {
    const y = mid + n * 0.03 + i * n * 0.035;
    ctx.fillRect(0, y, n, 2 + i * 2.2);
  }
  ctx.restore();

  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const SUN_DISTANCE = 900;

/** The Sun, kept at a fixed apparent size; the planet hides it as it sets. */
export function RetroSun({ sun, size = 0.16 }: { sun: THREE.Vector3; size?: number }) {
  const sprite = useRef<THREE.Sprite>(null);
  const material = useMemo(
    () => new THREE.SpriteMaterial({ map: sunTexture(), transparent: true, depthWrite: false, toneMapped: false }),
    [],
  );
  useEffect(
    () => () => {
      material.map?.dispose();
      material.dispose();
    },
    [material],
  );
  useFrame(({ camera }) => sprite.current?.position.copy(camera.position).addScaledVector(sun, SUN_DISTANCE));
  return <sprite ref={sprite} material={material} scale={SUN_DISTANCE * size} />;
}

const starVertex = /* glsl */ `
attribute float aSize;
attribute float aPhase;
uniform float uTime;
uniform float uDpr;
varying float vBig;
varying float vTwinkle;
void main() {
  vBig = step(5.0, aSize);
  // Big stars twinkle on twos, like hand-timed animation
  float t = floor(uTime * 12.0) / 12.0;
  vTwinkle = 0.65 + 0.35 * step(0.0, sin(t * (1.3 + aPhase) + aPhase * 50.0));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uDpr;
}
`;
const starFragment = /* glsl */ `
uniform vec3 uColor;
uniform vec3 uWarm;
varying float vBig;
varying float vTwinkle;
void main() {
  vec2 p = gl_PointCoord - 0.5;
  float disc = 1.0 - smoothstep(0.18, 0.3, length(p));
  // Four-point sparkle for the bright ones
  float arms = max(1.0 - smoothstep(0.0, 0.06, abs(p.x)) , 1.0 - smoothstep(0.0, 0.06, abs(p.y)));
  arms *= 1.0 - smoothstep(0.1, 0.5, length(p));
  float a = mix(disc, max(arms, 1.0 - smoothstep(0.06, 0.14, length(p))), vBig);
  if (a < 0.02) discard;
  gl_FragColor = vec4(mix(uColor, uWarm, vBig * 0.4) * vTwinkle, a);
}
`;

/** Stars as an animator would paint them: sharp dots, and a few four-point sparkles. */
export function RetroStars({ count = 2600, radius = 1500 }) {
  const dpr = useThree((s) => s.viewport.dpr);
  const points = useRef<THREE.Points>(null);
  const { geometry, material } = useMemo(() => {
    let s = 7;
    const rand = () => ((s = (s * 16807) % 2147483647) / 2147483647);
    const pos = new Float32Array(count * 3);
    const size = new Float32Array(count);
    const phase = new Float32Array(count);
    const v = new THREE.Vector3();
    for (let i = 0; i < count; i++) {
      v.set(rand() * 2 - 1, rand() * 2 - 1, rand() * 2 - 1).normalize().multiplyScalar(radius);
      pos.set([v.x, v.y, v.z], i * 3);
      const r = rand();
      size[i] = r > 0.985 ? 9 + rand() * 7 : 1.4 + Math.pow(rand(), 3) * 2.4;
      phase[i] = rand();
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    geometry.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uDpr: { value: 1 },
        uColor: { value: new THREE.Color(PALETTE.cream) },
        uWarm: { value: new THREE.Color(PALETTE.mustard) },
      },
      vertexShader: starVertex,
      fragmentShader: starFragment,
      transparent: true,
      depthWrite: false,
    });
    return { geometry, material };
  }, [count, radius]);
  useEffect(
    () => () => {
      geometry.dispose();
      material.dispose();
    },
    [geometry, material],
  );
  useFrame(({ clock, camera }) => {
    material.uniforms.uTime.value = clock.elapsedTime;
    material.uniforms.uDpr.value = dpr;
    points.current?.position.copy(camera.position);
  });
  return <points ref={points} geometry={geometry} material={material} frustumCulled={false} />;
}
