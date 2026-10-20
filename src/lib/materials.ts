import * as THREE from 'three';

/**
 * Crumpled-foil height map, generated once on a canvas. Used as a bump map so
 * the multi-layer insulation catches light in small facets, like real MLI.
 */
let foil: THREE.CanvasTexture | null = null;
export function foilBumpTexture() {
  if (foil) return foil;
  const size = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, size, size);

  // Deterministic PRNG so the foil looks identical on every load
  let s = 1337;
  const rand = () => ((s = (s * 16807) % 2147483647) / 2147483647);

  for (let i = 0; i < 9000; i++) {
    const v = Math.round(60 + rand() * 135);
    ctx.fillStyle = `rgb(${v},${v},${v})`;
    const x = rand() * size;
    const y = rand() * size;
    const r = 6 + rand() * 38;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let k = 0; k < 3; k++) ctx.lineTo(x + (rand() - 0.5) * r * 2, y + (rand() - 0.5) * r * 2);
    ctx.closePath();
    ctx.fill();
  }
  foil = new THREE.CanvasTexture(canvas);
  foil.wrapS = foil.wrapT = THREE.RepeatWrapping;
  foil.repeat.set(3, 3);
  return foil;
}

type Upgrade = (src: THREE.MeshStandardMaterial) => THREE.Material;

const keepColor = (src: THREE.MeshStandardMaterial) => src.color.clone();

/**
 * The NASA model ships with every material at metalness 0 / roughness 0.81,
 * i.e. flat plastic. We keep each artist-chosen colour but give it physically
 * plausible surface properties, matched by material name.
 */
const UPGRADES: [RegExp, Upgrade][] = [
  [
    /solarpanel-(face|\d)|SolarPanels/i,
    (src) =>
      new THREE.MeshPhysicalMaterial({
        color: keepColor(src).multiplyScalar(0.75),
        metalness: 0.35,
        roughness: 0.42,
        clearcoat: 0.5,
        clearcoatRoughness: 0.25,
        iridescence: 0.25,
        iridescenceIOR: 1.6,
      }),
  ],
  [
    /gold|mainpanels|bronze|mainsections|^Brown$/i,
    (src) =>
      new THREE.MeshStandardMaterial({
        color: keepColor(src).offsetHSL(0, 0.08, 0.04),
        metalness: 1,
        roughness: 0.34,
        bumpMap: foilBumpTexture(),
        bumpScale: 2.5,
      }),
  ],
  [
    /silver|Metal1$/i,
    (src) => new THREE.MeshStandardMaterial({ color: keepColor(src).multiplyScalar(1.3), metalness: 1, roughness: 0.2 }),
  ],
  [
    /white/i,
    () =>
      new THREE.MeshStandardMaterial({
        color: '#e4e4e0',
        metalness: 0.1,
        roughness: 0.55,
        bumpMap: foilBumpTexture(),
        bumpScale: 0.6,
      }),
  ],
  [/grey|gray|DarkMetal/i, (src) => new THREE.MeshStandardMaterial({ color: keepColor(src), metalness: 0.7, roughness: 0.4 })],
  [
    /thruster-in/i,
    () => new THREE.MeshStandardMaterial({ color: '#000', emissive: '#ff6a2a', emissiveIntensity: 2.2, side: THREE.DoubleSide }),
  ],
  [
    /solarpanel-red/i,
    (src) => new THREE.MeshStandardMaterial({ color: keepColor(src), metalness: 0.4, roughness: 0.5 }),
  ],
];

export function upgradeMaterial(src: THREE.Material): THREE.Material {
  if (!(src instanceof THREE.MeshStandardMaterial)) return src;
  const match = UPGRADES.find(([re]) => re.test(src.name));
  if (!match) {
    // Unknown part: keep everything the artist set (including textures), just less plastic
    const kept = src.clone();
    kept.metalness = Math.max(kept.metalness, 0.3);
    kept.roughness = Math.min(kept.roughness, 0.6);
    return kept;
  }
  const out = match[1](src);
  out.name = src.name;
  out.side = src.side;
  return out;
}
