'use client';

import { useEffect, useMemo } from 'react';
import { EffectComposer } from '@react-three/postprocessing';
import { BlendFunction, Effect, EffectAttribute } from 'postprocessing';
import * as THREE from 'three';
import { color } from './palette';

/**
 * One full-screen pass that turns the render into a frame of 1970s anime
 * film: ink outlines from depth, a faded print grade, colour fringing toward
 * the edges, a little gate weave, animated grain and the odd fleck of dust.
 */
const fragment = /* glsl */ `
uniform vec3 uInk;
uniform vec3 uShadow;
uniform vec3 uPaper;
uniform float uLine;

// Stable at any resolution (Dave Hoskins' hash without sine)
float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float viewDepth(vec2 uv) { return -getViewZ(readDepth(uv)); }

void mainImage(const in vec4 inputColor, const in vec2 uv, const in float depth, out vec4 outputColor) {
  // Gate weave: the whole frame shifts a fraction of a pixel, twelve times a second
  float frame = floor(time * 12.0);
  vec2 weave = (vec2(hash(vec2(frame, 1.0)), hash(vec2(frame, 7.0))) - 0.5) * texelSize * 1.2;
  vec2 st = uv + weave;

  // Lens fringing, stronger toward the corners
  vec2 off = (st - 0.5) * texelSize * 2.0 * length(st - 0.5);
  vec3 c = vec3(
    texture2D(inputBuffer, st + off).r,
    texture2D(inputBuffer, st).g,
    texture2D(inputBuffer, st - off).b
  );

  // Ink line wherever depth jumps (silhouettes and the edges of parts)
  vec2 px = texelSize * uLine;
  float z = viewDepth(st);
  float zl = viewDepth(st - vec2(px.x, 0.0));
  float zr = viewDepth(st + vec2(px.x, 0.0));
  float zu = viewDepth(st + vec2(0.0, px.y));
  float zd = viewDepth(st - vec2(0.0, px.y));
  float near = min(z, min(min(zl, zr), min(zu, zd)));
  float jump = max(max(abs(zl - z), abs(zr - z)), max(abs(zu - z), abs(zd - z))) / max(near, 1e-4);
  float edge = smoothstep(0.03, 0.09, jump);
  c = mix(c, uInk, edge * 0.85);

  // Print grade, done in display space: lifted indigo blacks, warm creamy highlights
  vec3 g = pow(max(c, 0.0), vec3(1.0 / 2.2));
  float l = dot(g, vec3(0.299, 0.587, 0.114));
  g = mix(g, g * uPaper, smoothstep(0.45, 1.0, l) * 0.5);
  g = uShadow + g * (1.0 - uShadow);
  g = mix(vec3(l), g, 1.08);
  g = clamp((g - 0.5) * 1.06 + 0.5, 0.0, 1.0);

  // Grain at 24 frames a second, heavier in the shadows
  float grain = hash(floor(uv * resolution) + floor(time * 24.0) * vec2(37.0, 17.0)) - 0.5;
  g += grain * mix(0.06, 0.035, l);

  // Dust: a few flecks per frame
  vec2 cell = floor(uv * vec2(90.0, 50.0));
  float h = hash(cell + frame * 3.1);
  if (h > 0.9992) {
    vec2 f = fract(uv * vec2(90.0, 50.0)) - 0.5;
    g = mix(g, vec3(h > 0.9996 ? 0.95 : 0.05), (1.0 - smoothstep(0.08, 0.16, length(f))) * 0.6);
  }

  // Vignette
  vec2 v = uv - 0.5;
  g *= 1.0 - 0.42 * pow(length(v * vec2(1.0, 1.15)) * 1.3, 2.4);

  outputColor = vec4(pow(max(g, 0.0), vec3(2.2)), inputColor.a);
}
`;

class RetroFilmEffect extends Effect {
  constructor() {
    super('RetroFilmEffect', fragment, {
      blendFunction: BlendFunction.NORMAL,
      attributes: EffectAttribute.DEPTH,
      uniforms: new Map<string, THREE.Uniform>([
        ['uInk', new THREE.Uniform(color('ink'))],
        ['uShadow', new THREE.Uniform(new THREE.Vector3(0.05, 0.055, 0.1))],
        ['uPaper', new THREE.Uniform(new THREE.Vector3(1.04, 0.98, 0.86))],
        ['uLine', new THREE.Uniform(1.25)],
      ]),
    });
  }
}

export function RetroEffects() {
  const effect = useMemo(() => new RetroFilmEffect(), []);
  useEffect(() => () => effect.dispose(), [effect]);
  return (
    <EffectComposer multisampling={0} enableNormalPass={false}>
      <primitive object={effect} />
    </EffectComposer>
  );
}
