#!/usr/bin/env node
/**
 * Fetches open space data into public/data/ as compact static JSON.
 * Runs in CI on a schedule (see .github/workflows/deploy-pages.yml).
 *
 *   node scripts/fetch-data.mjs
 *
 * Sources (all free, no API key):
 *   CelesTrak          orbital elements for every active satellite
 *   Launch Library 2   upcoming rocket launches (The Space Devs)
 *   NOAA SWPC          planetary K-index and the OVATION aurora forecast
 *   NASA EONET         open natural events (wildfires, storms, volcanoes…)
 *
 * If a source fails, the previously published file is kept (fetched from
 * FALLBACK_BASE, the live site), so one flaky API never blanks the site.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const OUT = join(process.cwd(), 'public', 'data');
const FALLBACK_BASE = process.env.FALLBACK_BASE ?? '';
const UA = { 'User-Agent': 'orbita-tracker (+https://github.com/siddharth-droid/WebTest)' };

async function get(url, type = 'json') {
  const res = await fetch(url, { headers: UA, signal: AbortSignal.timeout(60_000) });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return type === 'json' ? res.json() : res.text();
}

async function write(name, data) {
  const body = JSON.stringify(data);
  await writeFile(join(OUT, name), body);
  console.log(`  wrote ${name} (${(body.length / 1024).toFixed(0)} KB)`);
}

/** Run a producer; on failure, copy the last published version instead. */
async function produce(name, fn) {
  try {
    await write(name, await fn());
    return true;
  } catch (err) {
    console.warn(`! ${name}: ${err.message}`);
    if (!FALLBACK_BASE) return false;
    try {
      await write(name, await get(`${FALLBACK_BASE}/data/${name}`));
      console.warn(`  kept previous ${name}`);
      return true;
    } catch (e) {
      console.warn(`  no previous ${name} either: ${e.message}`);
      return false;
    }
  }
}

// ---------------------------------------------------------------- satellites
const CELESTRAK = 'https://celestrak.org/NORAD/elements/gp.php';

// Small curated groups, used to label satellites by purpose.
// Mega-constellations are labelled by name instead (cheaper than downloading them twice).
const GROUPS = [
  ['stations', 'Stations'],
  ['gnss', 'Navigation'],
  ['weather', 'Weather'],
  ['resource', 'Earth imaging'],
  ['science', 'Science'],
  ['geo', 'Communications'],
];
const NAME_RULES = [
  [/^STARLINK/, 'Starlink'],
  [/^ONEWEB/, 'OneWeb'],
  [/^(KUIPER|PROJECT KUIPER)/, 'Kuiper'],
];

// Fields json2satrec needs, in a fixed order, so each satellite is one small array
const OMM_FIELDS = [
  'OBJECT_NAME',
  'OBJECT_ID',
  'NORAD_CAT_ID',
  'EPOCH',
  'MEAN_MOTION',
  'ECCENTRICITY',
  'INCLINATION',
  'RA_OF_ASC_NODE',
  'ARG_OF_PERICENTER',
  'MEAN_ANOMALY',
  'BSTAR',
  'MEAN_MOTION_DOT',
  'MEAN_MOTION_DDOT',
  'ELEMENT_SET_NO',
  'REV_AT_EPOCH',
];

async function satellites() {
  const active = await get(`${CELESTRAK}?GROUP=active&FORMAT=json`);
  if (!Array.isArray(active) || active.length < 1000) throw new Error(`unexpected active list (${active?.length})`);

  const category = new Map();
  const visual = new Set();
  for (const [group, label] of GROUPS) {
    try {
      for (const o of await get(`${CELESTRAK}?GROUP=${group}&FORMAT=json`)) {
        if (!category.has(o.NORAD_CAT_ID)) category.set(o.NORAD_CAT_ID, label);
      }
    } catch (err) {
      console.warn(`! group ${group}: ${err.message}`);
    }
  }
  try {
    for (const o of await get(`${CELESTRAK}?GROUP=visual&FORMAT=json`)) visual.add(o.NORAD_CAT_ID);
  } catch (err) {
    console.warn(`! group visual: ${err.message}`);
  }

  const categories = ['Other', ...new Set([...GROUPS.map(([, l]) => l), ...NAME_RULES.map(([, l]) => l)])];
  const rows = active.map((o) => {
    let cat = category.get(o.NORAD_CAT_ID);
    if (!cat) cat = NAME_RULES.find(([re]) => re.test(o.OBJECT_NAME))?.[1] ?? 'Other';
    // Station modules and visiting craft share the stations group
    return [...OMM_FIELDS.map((f) => o[f] ?? null), categories.indexOf(cat), visual.has(o.NORAD_CAT_ID) ? 1 : 0];
  });

  return {
    source: 'CelesTrak (celestrak.org), GP data for active satellites',
    fetchedAt: new Date().toISOString(),
    fields: [...OMM_FIELDS, 'CATEGORY', 'VISUAL'],
    categories,
    rows,
  };
}

// ---------------------------------------------------------------- launches
const pick = (...vals) => vals.find((v) => v !== undefined && v !== null && v !== '') ?? null;

function normaliseLaunch(l) {
  const pad = l.pad ?? {};
  const vids = l.vid_urls ?? l.vidURLs ?? [];
  const video = vids
    .map((v) => (typeof v === 'string' ? { url: v } : v))
    .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99))[0];
  return {
    id: l.id,
    name: l.name,
    net: l.net,
    // How exact `net` is: Second/Minute/Hour/Day/Month/Quarter/Half/Year. Coarse dates are placeholders.
    netPrecision: pick(l.net_precision?.name, l.net_precision?.abbrev),
    windowStart: l.window_start ?? null,
    windowEnd: l.window_end ?? null,
    status: pick(l.status?.abbrev, l.status?.name),
    statusName: pick(l.status?.name),
    provider: pick(l.launch_service_provider?.name),
    rocket: pick(l.rocket?.configuration?.full_name, l.rocket?.configuration?.name),
    mission: pick(l.mission?.name),
    missionType: pick(l.mission?.type),
    orbit: pick(l.mission?.orbit?.abbrev, l.mission?.orbit?.name),
    description: pick(l.mission?.description),
    pad: pick(pad.name),
    location: pick(pad.location?.name),
    country: pick(pad.country?.alpha_2_code, pad.country_code, pad.location?.country_code),
    lat: pad.latitude != null ? Number(pad.latitude) : null,
    lon: pad.longitude != null ? Number(pad.longitude) : null,
    image: pick(l.image?.thumbnail_url, l.image?.image_url, typeof l.image === 'string' ? l.image : null),
    video: video?.url ?? null,
    webcastLive: Boolean(l.webcast_live),
  };
}

async function launches() {
  const LL2 = 'https://ll.thespacedevs.com/2.3.0/launches';
  const upcoming = await get(`${LL2}/upcoming/?limit=30&mode=detailed`);
  let previous = { results: [] };
  try {
    previous = await get(`${LL2}/previous/?limit=8&mode=detailed`);
  } catch (err) {
    console.warn(`! previous launches: ${err.message}`);
  }
  if (!Array.isArray(upcoming.results)) throw new Error('unexpected launch payload');
  return {
    source: 'Launch Library 2 by The Space Devs (thespacedevs.com)',
    fetchedAt: new Date().toISOString(),
    upcoming: upcoming.results.map(normaliseLaunch),
    previous: (previous.results ?? []).map(normaliseLaunch),
  };
}

// ---------------------------------------------------------------- space weather
/** NOAA products come either as [header, ...rows] arrays or as arrays of objects. */
function table(payload) {
  if (!Array.isArray(payload) || payload.length === 0) return [];
  if (Array.isArray(payload[0])) {
    const [head, ...rows] = payload;
    return rows.map((r) => Object.fromEntries(head.map((h, i) => [h, r[i]])));
  }
  return payload;
}

async function spaceWeather() {
  const SWPC = 'https://services.swpc.noaa.gov';
  const observed = table(await get(`${SWPC}/products/noaa-planetary-k-index.json`))
    .slice(-56) // last 7 days of 3-hour readings
    .map((r) => ({ time: r.time_tag, kp: Number(r.Kp ?? r.kp ?? r.kp_index) }));
  let forecast = [];
  try {
    forecast = table(await get(`${SWPC}/products/noaa-planetary-k-index-forecast.json`))
      .filter((r) => ['predicted', 'estimated'].includes((r.observed ?? '').toLowerCase()))
      .filter((r) => !observed.some((o) => o.time === r.time_tag))
      .map((r) => ({ time: r.time_tag, kp: Number(r.kp ?? r.Kp), scale: r.noaa_scale || null }));
  } catch (err) {
    console.warn(`! kp forecast: ${err.message}`);
  }

  // OVATION aurora probability: 360 × 181 grid (lon 0..359, lat -90..90), packed as a byte string
  let aurora = null;
  try {
    const ov = await get(`${SWPC}/json/ovation_aurora_latest.json`);
    const grid = new Uint8Array(360 * 181);
    for (const [lon, lat, p] of ov.coordinates) grid[(lat + 90) * 360 + (lon % 360)] = Math.min(100, Math.max(0, p));
    aurora = {
      observationTime: ov['Observation Time'],
      forecastTime: ov['Forecast Time'],
      width: 360,
      height: 181,
      grid: Buffer.from(grid).toString('base64'),
    };
  } catch (err) {
    console.warn(`! aurora: ${err.message}`);
  }

  if (observed.length === 0) throw new Error('no Kp data');
  return { source: 'NOAA Space Weather Prediction Center (swpc.noaa.gov)', fetchedAt: new Date().toISOString(), observed, forecast, aurora };
}

// ---------------------------------------------------------------- earth events
async function earthEvents() {
  const data = await get('https://eonet.gsfc.nasa.gov/api/v3/events?status=open&days=30');
  const events = (data.events ?? [])
    .map((e) => {
      const g = e.geometry?.[e.geometry.length - 1];
      if (!g) return null;
      let [lon, lat] = g.type === 'Point' ? g.coordinates : g.coordinates?.[0]?.[0] ?? [];
      if (typeof lon !== 'number' || typeof lat !== 'number') return null;
      return {
        id: e.id,
        title: e.title,
        category: e.categories?.[0]?.title ?? 'Event',
        date: g.date,
        lat,
        lon,
        magnitude: g.magnitudeValue != null ? `${g.magnitudeValue} ${g.magnitudeUnit ?? ''}`.trim() : null,
        link: e.sources?.[0]?.url ?? e.link ?? null,
      };
    })
    .filter(Boolean)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return { source: 'NASA Earth Observatory Natural Event Tracker (EONET)', fetchedAt: new Date().toISOString(), events };
}

// ---------------------------------------------------------------- main
await mkdir(OUT, { recursive: true });
console.log('Fetching open data →', OUT);
const results = {
  'satellites.json': await produce('satellites.json', satellites),
  'launches.json': await produce('launches.json', launches),
  'space-weather.json': await produce('space-weather.json', spaceWeather),
  'events.json': await produce('events.json', earthEvents),
};
const count = async (name, fn) => {
  try {
    return fn(JSON.parse(await readFile(join(OUT, name), 'utf8')));
  } catch {
    return null;
  }
};
await write('manifest.json', {
  builtAt: new Date().toISOString(),
  files: results,
  counts: {
    satellites: await count('satellites.json', (d) => d.rows.length),
    // Starlink, OneWeb and Kuiper: the share of everything in orbit that is broadband internet
    broadband: await count('satellites.json', (d) => {
      const ids = ['Starlink', 'OneWeb', 'Kuiper'].map((c) => d.categories.indexOf(c));
      const at = d.fields.indexOf('CATEGORY');
      return d.rows.filter((r) => ids.includes(r[at])).length;
    }),
    launches: await count('launches.json', (d) => d.upcoming.length),
    events: await count('events.json', (d) => d.events.length),
  },
});
if (!results['satellites.json']) {
  console.error('Satellite data is required; aborting.');
  process.exit(1);
}
