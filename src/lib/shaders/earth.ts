// Earth surface + atmosphere shaders.
//
// Textures (NASA Blue Marble / Black Marble, via the three.js examples):
//   uDay   – daytime albedo
//   uNight – city lights
//   uBRC   – packed: R = bump, G = roughness (oceans are smooth), B = clouds

export const surfaceVertex = /* glsl */ `
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

export const surfaceFragment = /* glsl */ `
uniform sampler2D uDay;
uniform sampler2D uNight;
uniform sampler2D uBRC;
uniform vec3 uSun;
uniform float uCloudOffset;

varying vec2 vUv;
varying vec3 vNormalW;
varying vec3 vWorld;

const vec3 ATMO_DAY = vec3(0.3, 0.7, 1.0);
const vec3 ATMO_TWILIGHT = vec3(0.74, 0.29, 0.04);

void main() {
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vWorld);
  float sunFacing = dot(N, uSun);

  vec3 day = texture2D(uDay, vUv).rgb;
  vec3 night = texture2D(uNight, vUv).rgb;
  float roughness = texture2D(uBRC, vUv).g;
  float clouds = smoothstep(0.2, 1.0, texture2D(uBRC, vUv + vec2(uCloudOffset, 0.0)).b);

  // Daylight side: albedo under the sun, clouds on top
  vec3 albedo = mix(day, vec3(1.0), clouds * 1.6);
  float diffuse = max(sunFacing, 0.0);
  vec3 lit = albedo * diffuse * 2.4;

  // Specular glint, only where the surface is smooth water and not cloud
  vec3 H = normalize(uSun + V);
  float gloss = (1.0 - roughness) * (1.0 - clouds);
  lit += vec3(1.0, 0.86, 0.66) * pow(max(dot(N, H), 0.0), 220.0) * gloss * 0.9 * step(0.0, sunFacing);

  // Night side: city lights, dimmed by cloud cover
  vec3 dark = night * (1.0 - clouds * 0.8) * 1.8;

  vec3 color = mix(dark, lit, smoothstep(-0.25, 0.5, sunFacing));

  // Atmospheric scattering at grazing angles: blue by day, orange at the terminator
  float fresnel = 1.0 - abs(dot(V, N));
  vec3 atmoColor = mix(ATMO_TWILIGHT, ATMO_DAY, smoothstep(-0.05, 0.35, sunFacing));
  float atmoMix = clamp(smoothstep(-0.1, 0.8, sunFacing) * pow(fresnel, 3.0), 0.0, 1.0);
  color = mix(color, atmoColor * 1.2, atmoMix);

  gl_FragColor = vec4(color, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

export const atmosphereVertex = /* glsl */ `
varying vec3 vNormalW;
varying vec3 vWorld;

void main() {
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

export const atmosphereFragment = /* glsl */ `
uniform vec3 uSun;

varying vec3 vNormalW;
varying vec3 vWorld;

const vec3 ATMO_DAY = vec3(0.3, 0.7, 1.0);
const vec3 ATMO_TWILIGHT = vec3(0.74, 0.29, 0.04);

void main() {
  // Drawn on the back faces of a slightly larger shell, so the glow peaks
  // at the planet's silhouette and falls off into space.
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vWorld);
  float sunFacing = dot(N, uSun);

  float rim = clamp(1.0 + dot(V, N) * 1.12, 0.0, 1.0);
  float glow = pow(rim, 4.0);
  vec3 color = mix(ATMO_TWILIGHT, ATMO_DAY, smoothstep(-0.1, 0.3, sunFacing));
  float daylight = smoothstep(-0.25, 0.5, sunFacing);

  gl_FragColor = vec4(color * glow * daylight * 1.5, glow * daylight);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
