#!/usr/bin/env node
/**
 * Builds the Earth texture set into public/textures/earth/.
 *
 *   node scripts/fetch-earth-textures.mjs
 *
 *   day-<MM>-{8k,2k}.jpg   NASA Blue Marble Next Generation for the current month,
 *                          so snow cover and vegetation match the season
 *   night-{8k,2k}.jpg      NASA Black Marble 2016 city lights
 *   relief-4k.jpg          Tangent-space normal map computed from GEBCO elevation
 *   clouds-{8k,2k}.jpg     Live global cloud cover, refreshed every 3 hours
 *                          (Live Cloud Maps by Matt Eason; contains modified EUMETSAT data)
 *
 * Source images are huge (21600 × 10800), so static layers are built once and
 * afterwards copied from the live site (FALLBACK_BASE). Only clouds and the
 * monthly day image are fetched fresh when they change.
 */
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

sharp.cache(false);
const OUT = join(process.cwd(), 'public', 'textures', 'earth');
const FALLBACK_BASE = process.env.FALLBACK_BASE ?? '';
const UA = { 'User-Agent': 'orbita-textures (+https://github.com/siddharth-droid/WebTest)' };

const NASA = 'https://eoimages.gsfc.nasa.gov/images/imagerecords';
// Blue Marble NG "topo + bathy" monthly composites (2004), Visible Earth record ids
const BLUE_MARBLE_RECORD = ['73580', '73605', '73630', '73655', '73701', '73726', '73751', '73776', '73801', '73826', '73884', '73909'];
const blueMarbleUrl = (m) =>
  `${NASA}/73000/${BLUE_MARBLE_RECORD[m - 1]}/world.topo.bathy.2004${String(m).padStart(2, '0')}.3x21600x10800.jpg`;
const BLACK_MARBLE = `${NASA}/144000/144898/BlackMarble_2016_3km.jpg`;
const GEBCO = `${NASA}/73000/73934/gebco_08_rev_elev_21600x10800.png`;
const CLOUDS = 'https://clouds.matteason.co.uk/images/8192x4096/clouds.jpg';

async function download(url) {
  const res = await fetch(url, { headers: UA, signal: AbortSignal.timeout(300_000) });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

/** Copy an already-built texture from the live site instead of rebuilding it. */
async function reuse(name) {
  if (!FALLBACK_BASE) return false;
  try {
    const buf = await download(`${FALLBACK_BASE}/textures/earth/${name}`);
    await writeFile(join(OUT, name), buf);
    console.log(`  reused ${name} (${(buf.length / 1e6).toFixed(1)} MB)`);
    return true;
  } catch {
    return false;
  }
}

async function writeJpeg(name, img, quality = 86) {
  const buf = await img.jpeg({ quality, mozjpeg: true, chromaSubsampling: '4:4:4' }).toBuffer();
  await writeFile(join(OUT, name), buf);
  console.log(`  wrote ${name} (${(buf.length / 1e6).toFixed(1)} MB)`);
}

/** Large + small versions: the small one paints instantly, the large one streams in. */
async function pair(base, src, { quality = 86, color = true } = {}) {
  const pipe = () => (color ? sharp(src, { limitInputPixels: false }) : sharp(src, { limitInputPixels: false }).greyscale());
  await writeJpeg(`${base}-8k.jpg`, pipe().resize(8192, 4096, { kernel: 'lanczos3' }), quality);
  await writeJpeg(`${base}-2k.jpg`, pipe().resize(2048, 1024, { kernel: 'lanczos3' }), quality);
}

async function day(month) {
  const base = `day-${String(month).padStart(2, '0')}`;
  if ((await reuse(`${base}-8k.jpg`)) && (await reuse(`${base}-2k.jpg`))) return;
  // Slight lift in shadows and a touch less saturation: the raw composite reads too "printed"
  const src = await download(blueMarbleUrl(month));
  const graded = await sharp(src, { limitInputPixels: false }).modulate({ saturation: 0.92 }).gamma(1.08).toBuffer();
  await pair(base, graded, { quality: 88 });
}

async function night() {
  if ((await reuse('night-8k.jpg')) && (await reuse('night-2k.jpg'))) return;
  await pair('night', await download(BLACK_MARBLE), { quality: 88 });
}

/**
 * Normal map from elevation: Sobel slopes in metres per pixel, exaggerated so
 * mountain ranges catch the low sun near the terminator.
 */
async function relief() {
  if (await reuse('relief-4k.jpg')) return;
  const W = 4096;
  const H = 2048;
  const src = await download(GEBCO);
  const { data } = await sharp(src, { limitInputPixels: false })
    .greyscale()
    .resize(W, H, { kernel: 'lanczos3' })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const out = Buffer.alloc(W * H * 3);
  const h = (x, y) => data[Math.min(H - 1, Math.max(0, y)) * W + ((x + W) % W)];
  const strength = 2.2;
  for (let y = 0; y < H; y++) {
    // Pixels shrink toward the poles; scale east-west slopes by 1/cos(latitude)
    const lat = ((0.5 - (y + 0.5) / H) * Math.PI);
    const ew = 1 / Math.max(0.08, Math.cos(lat));
    for (let x = 0; x < W; x++) {
      const dx = (h(x + 1, y - 1) + 2 * h(x + 1, y) + h(x + 1, y + 1) - h(x - 1, y - 1) - 2 * h(x - 1, y) - h(x - 1, y + 1)) / 8;
      const dy = (h(x - 1, y + 1) + 2 * h(x, y + 1) + h(x + 1, y + 1) - h(x - 1, y - 1) - 2 * h(x, y - 1) - h(x + 1, y - 1)) / 8;
      let nx = (-dx * ew * strength) / 255;
      let ny = (dy * strength) / 255;
      let nz = 1;
      const len = Math.hypot(nx, ny, nz);
      nx /= len;
      ny /= len;
      nz /= len;
      const o = (y * W + x) * 3;
      out[o] = Math.round((nx * 0.5 + 0.5) * 255);
      out[o + 1] = Math.round((ny * 0.5 + 0.5) * 255);
      out[o + 2] = Math.round((nz * 0.5 + 0.5) * 255);
    }
  }
  await writeJpeg('relief-4k.jpg', sharp(out, { raw: { width: W, height: H, channels: 3 } }), 92);
}

async function clouds() {
  try {
    await pair('clouds', await download(CLOUDS), { quality: 84, color: false });
    return new Date().toISOString();
  } catch (err) {
    console.warn(`! clouds: ${err.message}`);
    return (await reuse('clouds-8k.jpg')) && (await reuse('clouds-2k.jpg')) ? 'previous' : null;
  }
}

await mkdir(OUT, { recursive: true });
const month = new Date().getUTCMonth() + 1;
console.log('Building Earth textures →', OUT);
const status = { month, day: false, night: false, relief: false, clouds: null };
for (const [key, fn] of [
  ['day', () => day(month)],
  ['night', night],
  ['relief', relief],
]) {
  try {
    await fn();
    status[key] = true;
  } catch (err) {
    console.warn(`! ${key}: ${err.message}`);
  }
}
status.clouds = await clouds();

// The app reads this to decide which textures exist (and falls back to the bundled 4k set)
const manifestPath = join(OUT, 'manifest.json');
const previous = existsSync(manifestPath) ? JSON.parse(await readFile(manifestPath, 'utf8')) : {};
await writeFile(
  manifestPath,
  JSON.stringify({
    ...previous,
    builtAt: new Date().toISOString(),
    day: status.day ? `day-${String(month).padStart(2, '0')}` : previous.day ?? null,
    night: status.night || previous.night ? 'night' : null,
    relief: status.relief || previous.relief ? 'relief-4k.jpg' : null,
    clouds: status.clouds ? 'clouds' : null,
    cloudsUpdated: status.clouds && status.clouds !== 'previous' ? status.clouds : previous.cloudsUpdated ?? null,
  }),
);
console.log('  status', status);
