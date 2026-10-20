// Earth surface shader.
//
// Outputs physical-ish radiance for a scene lit by the real Sun; the
// atmosphere (limb glow, haze, twilight) is added on top by
// @takram/three-atmosphere's Sky and AerialPerspective passes.
//
//   uDay     NASA Blue Marble NG (monthly) albedo
//   uNight   NASA Black Marble city lights
//   uClouds  live global cloud cover (greyscale)
//   uRelief  tangent-space normal map from GEBCO elevation
//   uWater   roughness map (G): oceans are smooth, land is rough

export const surfaceVertex = /* glsl */ `
varying vec2 vUv;
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec3 vEastW;
varying vec3 vNorthW;

void main() {
  vUv = uv;
  // Tangent frame on the sphere (east, north), built in local space then rotated to world
  vec3 n = normalize(position);
  vec3 east = normalize(vec3(n.z, 0.0, -n.x) + vec3(1e-5, 0.0, 0.0));
  vec3 north = cross(n, east);
  mat3 m = mat3(modelMatrix);
  vNormalW = normalize(m * n);
  vEastW = normalize(m * east);
  vNorthW = normalize(m * north);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

export const surfaceFragment = /* glsl */ `
uniform sampler2D uDay;
uniform sampler2D uNight;
uniform sampler2D uClouds;
uniform sampler2D uRelief;
uniform sampler2D uWater;
uniform float uHasRelief;
uniform float uCloudsChannel; // 0: greyscale map (R), 1: packed legacy map (B)
uniform vec3 uSun;            // world space, normalised
uniform float uIntensity;     // radiance scale to match the atmosphere's units
uniform float uCloudOffset;
uniform float uDetail;        // 0 on slower GPUs: skip the procedural close-up detail

varying vec2 vUv;
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec3 vEastW;
varying vec3 vNorthW;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    s += a * vnoise(p);
    p = p * 2.07 + vec2(17.1, 9.3);
    a *= 0.5;
  }
  return s;
}

float cloudAt(vec2 uv) {
  vec4 c = texture2D(uClouds, uv + vec2(uCloudOffset, 0.0));
  float v = mix(c.r, c.b, uCloudsChannel);
  // Thin haze in the source map would read as overcast everywhere; keep real cloud decks
  return pow(smoothstep(0.38, 0.95, v), 1.35);
}

void main() {
  vec3 N = normalize(vNormalW);
  vec3 east = normalize(vEastW);
  vec3 north = normalize(vNorthW);
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 L = uSun;

  // Relief: perturb the land normal so mountains catch low sunlight
  vec3 NR = N;
  if (uHasRelief > 0.5) {
    vec3 t = texture2D(uRelief, vUv).xyz * 2.0 - 1.0;
    NR = normalize(east * t.x + north * t.y + N * t.z);
  }

  vec3 albedo = texture2D(uDay, vUv).rgb;
  float water = 1.0 - smoothstep(0.25, 0.6, texture2D(uWater, vUv).g);
  // Seen from orbit, open ocean is a near-uniform deep navy, not a shaded seafloor map
  float shelf = smoothstep(0.02, 0.09, dot(albedo, vec3(0.2126, 0.7152, 0.0722)));
  albedo = mix(albedo, mix(vec3(0.006, 0.018, 0.045), albedo * 0.55, shelf * 0.35), water * 0.85);
  float clouds = cloudAt(vUv);
  // Up close the 8K cloud map is softer than a pixel; add procedural detail at cloud edges,
  // fading in as the texture gets magnified on screen
  float magnified = smoothstep(2.5e-4, 0.6e-4, fwidth(vUv.x)) * uDetail;
  if (magnified > 0.0) {
    vec2 q = vUv * vec2(4096.0, 2048.0);
    float detail = fbm(q) * 0.65 + fbm(q * 4.3) * 0.35;
    float edge = clamp(clouds * (1.0 - clouds) * 4.0, 0.0, 1.0);
    clouds = clamp(clouds + (detail - 0.5) * 0.9 * edge * magnified, 0.0, 1.0);
    // Billows through the whole deck: brightness varies like the tops of real cumulus
    float billow = fbm(q * 2.1 + 31.0);
    clouds *= mix(1.0, 0.72 + 0.56 * billow, magnified * smoothstep(0.2, 0.7, clouds));
  }

  // Cloud shadows: look up the cloud cover between this point and the Sun
  vec2 sunTangent = vec2(dot(L, east), dot(L, north));
  float shadow = cloudAt(vUv - sunTangent * vec2(0.0018, 0.0036));

  float NdL = dot(N, L);
  float lambertGround = max(dot(NR, L), 0.0);
  float lambertCloud = max(NdL, 0.0);
  // Soft terminator: light wraps slightly as the atmosphere scatters it round
  float daylight = smoothstep(-0.035, 0.06, NdL);

  vec3 sunColor = mix(vec3(1.0, 0.62, 0.42), vec3(1.0, 0.97, 0.93), smoothstep(0.0, 0.07, NdL));
  vec3 ground = albedo * lambertGround * (1.0 - 0.55 * shadow * (1.0 - clouds));

  // Ocean: broad sun glitter plus Fresnel sky reflection
  vec3 H = normalize(L + V);
  float NdH = max(dot(N, H), 0.0);
  float glint = pow(NdH, 140.0) * 2.4 + pow(NdH, 18.0) * 0.12;
  float fresnel = pow(1.0 - max(dot(N, V), 0.0), 5.0);
  ground += water * (1.0 - clouds) * (glint * sunColor + fresnel * vec3(0.10, 0.20, 0.38)) * lambertCloud;

  vec3 cloudColor = vec3(0.84, 0.86, 0.9) * (lambertCloud * 0.95 + 0.03);
  vec3 lit = mix(ground, cloudColor, clouds) * sunColor * daylight;

  // City lights only where it is dark, dimmed by overcast skies
  // Keep Black Marble's moonlit land as a faint base; only real city lights glow
  vec3 nightTex = texture2D(uNight, vUv).rgb;
  float lum = dot(nightTex, vec3(0.2126, 0.7152, 0.0722));
  // A soft ramp, not a plateau, so cities fade out at their edges instead of reading as flat blobs
  vec3 lights = vec3(1.0, 0.72, 0.42) * pow(smoothstep(0.06, 0.9, lum), 1.8) * 2.0 + nightTex * 0.04;
  vec3 night = lights * (1.0 - smoothstep(-0.18, 0.05, NdL)) * (1.0 - clouds * 0.75) * 0.9;

  // Sunlit surface in the atmosphere's units: albedo × solar irradiance / π (≈ 0.58 × albedo)
  vec3 color = lit * 0.28;

  // Rayleigh haze along the view ray: thin looking straight down, thick toward the limb,
  // and only where the air itself is sunlit
  float NdV = max(dot(N, V), 0.02);
  float path = 1.0 / NdV - 1.0;
  float haze = 1.0 - exp(-0.09 * path);
  vec3 skyBlue = vec3(0.16, 0.36, 0.95) * 0.30;
  vec3 twilight = vec3(0.95, 0.42, 0.22) * 0.05;
  vec3 air = mix(twilight, skyBlue, smoothstep(-0.03, 0.05, NdL)) * smoothstep(-0.12, 0.06, NdL);
  color = mix(color, air, haze * 0.72);

  color += night * uIntensity;
  gl_FragColor = vec4(color, 1.0);
}
`;

// Limb glow: back faces of a thin shell just above the surface. The glow
// peaks exactly at the planet's silhouette and fades quickly into space.
export const limbVertex = /* glsl */ `
varying vec3 vNormalW;
varying vec3 vWorld;
void main() {
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

export const limbFragment = /* glsl */ `
uniform vec3 uSun;
uniform float uIntensity;
uniform float uThickness;
varying vec3 vNormalW;
varying vec3 vWorld;
void main() {
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vWorld);
  float sunFacing = dot(N, uSun);
  // 0 at the centre of the disc, 1 at the silhouette of the shell
  float rim = clamp(1.0 + dot(V, N) / uThickness, 0.0, 1.0);
  float glow = pow(rim, 5.0) * 1.4 + pow(rim, 18.0) * 2.0;
  vec3 day = vec3(0.32, 0.6, 1.0);
  vec3 dusk = vec3(1.0, 0.48, 0.22);
  vec3 color = mix(dusk, day, smoothstep(-0.16, 0.04, sunFacing));
  float lit = smoothstep(-0.3, 0.25, sunFacing);
  gl_FragColor = vec4(color * glow * lit * uIntensity, 1.0);
}
`;
