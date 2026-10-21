'use client';

import { forwardRef, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { suspend } from 'suspend-react';
import * as THREE from 'three';
import { asset } from '@/lib/asset';
import { color } from './palette';

/**
 * The planet as a hand-painted animation cel: real NASA imagery reduced to a
 * few flat tones, hard-edged clouds, and a halftone screen where day turns to
 * night, like a printed comic. Cheap to draw: a handful of texture reads and
 * no post-process atmosphere.
 */

const vertex = /* glsl */ `
varying vec2 vUv;
varying vec3 vNormalW;
varying vec3 vWorld;
void main() {
  vUv = uv;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

const fragment = /* glsl */ `
uniform sampler2D uDay;
uniform sampler2D uNight;
uniform sampler2D uClouds;
uniform sampler2D uWater;
uniform float uCloudsChannel;
uniform vec3 uSun;
uniform float uDot;
uniform vec3 uOcean, uShelf, uNightLand, uNightSea, uCream, uShade, uDusk, uLights, uRim;
uniform vec3 uSand, uClay, uOlive, uForest;
varying vec2 vUv;
varying vec3 vNormalW;
varying vec3 vWorld;

float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

// Screen-space halftone: 1 inside a dot whose area is proportional to t
float halftone(float t, float cell, float angle) {
  vec2 p = gl_FragCoord.xy / cell;
  float s = sin(angle), c = cos(angle);
  p = mat2(c, -s, s, c) * p;
  float d = length(fract(p) - 0.5);
  float r = sqrt(clamp(t, 0.0, 1.0)) * 0.72;
  float aa = fwidth(d) * 0.8;
  return smoothstep(r + aa, r - aa, d);
}

void main() {
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vWorld);
  float NdL = dot(N, uSun);

  // --- Daylit surface, flattened into a few printable tones
  vec3 day = pow(texture2D(uDay, vUv).rgb, vec3(1.0 / 2.2));
  float water = 1.0 - smoothstep(0.25, 0.6, texture2D(uWater, vUv).g);
  // Land repainted from a fixed set of inks: sand and clay for deserts, olive and forest
  // for vegetation, cream for ice, each in two flat tones chosen by brightness
  float L = luma(day);
  float sat = max(day.r, max(day.g, day.b)) - min(day.r, min(day.g, day.b));
  float veg = smoothstep(-0.01, 0.04, day.g - day.r);
  float ice = smoothstep(0.76, 0.84, L) * (1.0 - smoothstep(0.06, 0.12, sat));
  vec3 desert = mix(uClay, uSand, step(0.5, L));
  vec3 green = mix(uForest, uOlive, step(0.3, L));
  vec3 land = mix(mix(desert, green, veg), uCream, ice);
  vec3 sea = mix(uOcean, uShelf, step(0.14, luma(day)) * 0.7);
  vec3 ground = mix(land, sea, water);

  vec4 cs = texture2D(uClouds, vUv);
  float cv = mix(cs.r, cs.b, uCloudsChannel);
  float cloud = smoothstep(0.7, 0.74, cv);
  float thick = smoothstep(0.86, 0.9, cv);
  // Two-tone cel clouds: cream tops, a cooler shade on the side away from the Sun
  vec3 cloudCol = mix(uShade, uCream, max(step(0.35, NdL), thick * 0.6));
  vec3 surface = mix(ground, cloudCol, cloud);

  // Anime lighting: full light, one hard shadow band, then night
  surface *= mix(0.68, 1.0, step(0.28, NdL));
  // A warm band right at the terminator, the way cels paint a sunset
  float dusk = 1.0 - smoothstep(0.0, 0.1, abs(NdL - 0.06));
  surface = mix(surface, surface * uDusk * 1.6, dusk * 0.55);

  // --- Night side: deep indigo, cities as a fine halftone of warm dots
  vec3 night = mix(uNightLand, uNightSea, water);
  float city = luma(texture2D(uNight, vUv).rgb);
  night = mix(night, uLights, halftone(smoothstep(0.12, 0.8, city) * (1.0 - cloud * 0.7), uDot * 0.5, 0.3));

  // Day → night through a halftone screen
  float t = smoothstep(-0.07, 0.12, NdL);
  vec3 col = mix(night, surface, halftone(t, uDot, 0.785));

  // Thin bright rim on the lit limb
  float rim = pow(1.0 - max(dot(N, V), 0.0), 6.0);
  col += uRim * rim * smoothstep(-0.1, 0.3, NdL) * 0.5;

  gl_FragColor = vec4(col, 1.0);
}
`;

const limbVertex = /* glsl */ `
varying vec3 vNormalW;
varying vec3 vWorld;
void main() {
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

// Atmosphere as two painted bands: a crisp sky-blue line hugging the planet, and a soft glow
const limbFragment = /* glsl */ `
uniform vec3 uSun;
uniform vec3 uDay;
uniform vec3 uDusk;
uniform float uThickness;
varying vec3 vNormalW;
varying vec3 vWorld;
void main() {
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vWorld);
  float rim = clamp(1.0 + dot(V, N) / uThickness, 0.0, 1.0);
  float line = smoothstep(0.82, 0.9, rim) * (1.0 - smoothstep(0.97, 1.0, rim));
  float glow = pow(rim, 6.0) * 0.55;
  float facing = dot(N, uSun);
  vec3 c = mix(uDusk, uDay, smoothstep(-0.15, 0.1, facing));
  float lit = smoothstep(-0.35, 0.15, facing);
  gl_FragColor = vec4(c * (line * 0.9 + glow) * lit, 1.0);
}
`;

const BASE = {
  day: asset('/textures/earth_day_4096.jpg'),
  night: asset('/textures/earth_night_4096.jpg'),
  brc: asset('/textures/earth_bump_roughness_clouds_4096.jpg'),
};
const DIR = asset('/textures/earth/');

const loader = new THREE.TextureLoader();
const load = (url: string, srgb: boolean) =>
  loader.loadAsync(url).then((t) => {
    t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    t.wrapS = THREE.RepeatWrapping;
    t.anisotropy = 4;
    return t;
  });

/** The CI-built 2K set (plenty for a posterised look); the bundled 4K set if it is missing. */
async function loadMaps() {
  const brc = load(BASE.brc, false);
  const m = await fetch(asset('/textures/earth/manifest.json'))
    .then((r) => (r.ok ? (r.json() as Promise<{ day?: string; night?: string; clouds?: string }>) : null))
    .catch(() => null);
  if (m?.day && m.night && m.clouds) {
    const [day, night, clouds, water] = await Promise.all([
      load(`${DIR}${m.day}-2k.jpg`, true),
      load(`${DIR}night-2k.jpg`, true),
      load(`${DIR}clouds-2k.jpg`, false),
      brc,
    ]);
    return { day, night, clouds, water, packed: false };
  }
  const [day, night, water] = await Promise.all([load(BASE.day, true), load(BASE.night, true), brc]);
  return { day, night, clouds: water, water, packed: true };
}

interface RetroEarthProps {
  radius: number;
  sun: THREE.Vector3;
  spin: (elapsed: number) => number;
}

export const RetroEarth = forwardRef<THREE.Group, RetroEarthProps>(function RetroEarth({ radius, sun, spin }, ref) {
  const maps = suspend(loadMaps, ['retro-earth']);
  const dpr = useThree((s) => s.viewport.dpr);
  const spinRef = useRef<THREE.Group>(null);

  const uniforms = useMemo(
    () => ({
      uDay: { value: maps.day },
      uNight: { value: maps.night },
      uClouds: { value: maps.clouds },
      uWater: { value: maps.water },
      uCloudsChannel: { value: maps.packed ? 1 : 0 },
      uSun: { value: sun },
      uDot: { value: 5 },
      uOcean: { value: color('ocean') },
      uShelf: { value: color('shelf') },
      uNightLand: { value: color('night') },
      uNightSea: { value: color('ink').lerp(color('night'), 0.5) },
      uCream: { value: color('cream') },
      uShade: { value: color('sky').lerp(color('navy'), 0.35) },
      uDusk: { value: color('orange') },
      uLights: { value: color('mustard') },
      uRim: { value: color('sky') },
      uSand: { value: new THREE.Color('#e3ad62') },
      uClay: { value: new THREE.Color('#b8653a') },
      uOlive: { value: new THREE.Color('#8f9c55') },
      uForest: { value: new THREE.Color('#3f6a4c') },
    }),
    [maps, sun],
  );
  const limb = useMemo(
    () => ({ uSun: { value: sun }, uDay: { value: color('sky') }, uDusk: { value: color('orange') }, uThickness: { value: 0.3 } }),
    [sun],
  );

  useFrame((state) => {
    uniforms.uDot.value = 4.5 * dpr;
    if (spinRef.current) spinRef.current.rotation.y = spin(state.clock.elapsedTime);
  });

  return (
    <>
      <mesh scale={1.03}>
        <sphereGeometry args={[radius, 96, 64]} />
        <shaderMaterial
          uniforms={limb}
          vertexShader={limbVertex}
          fragmentShader={limbFragment}
          side={THREE.BackSide}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <group
        ref={(g) => {
          spinRef.current = g;
          if (typeof ref === 'function') ref(g);
          else if (ref) ref.current = g;
        }}
      >
        <mesh>
          <sphereGeometry args={[radius, 160, 112]} />
          <shaderMaterial uniforms={uniforms} vertexShader={vertex} fragmentShader={fragment} />
        </mesh>
      </group>
    </>
  );
});
