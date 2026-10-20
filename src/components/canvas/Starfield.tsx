'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertex = /* glsl */ `
attribute float aSize;
attribute float aPhase;
attribute vec3 aColor;
uniform float uTime;
uniform float uPixelRatio;
varying vec3 vColor;
varying float vTwinkle;

void main() {
  vColor = aColor;
  vTwinkle = 0.75 + 0.25 * sin(uTime * (0.6 + aPhase) + aPhase * 40.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uPixelRatio;
}
`;

const fragment = /* glsl */ `
varying vec3 vColor;
varying float vTwinkle;

void main() {
  // Soft round point with a bright core
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d);
  a *= a;
  gl_FragColor = vec4(vColor * vTwinkle, a);
}
`;

/** Stars with a realistic brightness distribution: many faint, few bright. */
export function Starfield({ count = 7000, radius = 900 }) {
  const material = useRef<THREE.ShaderMaterial>(null);

  const geometry = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const size = new Float32Array(count);
    const phase = new Float32Array(count);
    const c = new THREE.Color();
    const v = new THREE.Vector3();
    let s = 42;
    const rand = () => ((s = (s * 16807) % 2147483647) / 2147483647);

    for (let i = 0; i < count; i++) {
      // Uniform on a sphere
      const u = rand() * 2 - 1;
      const t = rand() * Math.PI * 2;
      const r = Math.sqrt(1 - u * u);
      v.set(r * Math.cos(t), u, r * Math.sin(t)).multiplyScalar(radius).toArray(pos, i * 3);

      const mag = Math.pow(rand(), 6); // power law: bright stars are rare
      size[i] = 1.2 + mag * 5.5;
      // Colour temperature: mostly white, some blue-white, a few warm
      const temp = rand();
      c.setHSL(temp < 0.15 ? 0.08 : 0.6, temp < 0.15 ? 0.6 : 0.25, 0.55 + mag * 0.4);
      c.multiplyScalar(0.55 + mag * 1.8).toArray(col, i * 3);
      phase[i] = rand();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    g.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
    return g;
  }, [count, radius]);

  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uPixelRatio: { value: 1 } }), []);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
    uniforms.uPixelRatio.value = state.gl.getPixelRatio();
  });

  return (
    <points geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
