// Every tracked satellite's position at one moment, grouped by colour, for the
// pre-rendered landing sequence (scripts/landing/render.py).
//
//   node scripts/landing/constellation.mjs public/data/satellites.json out.json
import { readFileSync, writeFileSync } from 'node:fs';
import { json2satrec, propagate } from 'satellite.js';

const GROUPS = [
  { color: '#3987e5', categories: ['Starlink', 'OneWeb', 'Kuiper'] },
  { color: '#d95926', categories: ['Stations'] },
  { color: '#199e70', categories: ['Navigation', 'Weather', 'Earth imaging', 'Science'] },
  { color: '#8a8f98', categories: [] },
];

const [src, out] = process.argv.slice(2);
const file = JSON.parse(readFileSync(src, 'utf8'));
const omm = file.fields.filter((f) => f !== 'CATEGORY' && f !== 'VISUAL');
const iCat = file.fields.indexOf('CATEGORY');
const now = new Date();
const points = GROUPS.map(() => []);

for (const row of file.rows) {
  const rec = json2satrec(Object.fromEntries(omm.map((f) => [f, row[file.fields.indexOf(f)]])));
  const pv = propagate(rec, now);
  if (!pv || typeof pv.position !== 'object') continue;
  const category = file.categories[Number(row[iCat])] ?? 'Other';
  const g = GROUPS.findIndex((x) => x.categories.includes(category));
  const { x, y, z } = pv.position;
  points[g === -1 ? GROUPS.length - 1 : g].push([+x.toFixed(1), +y.toFixed(1), +z.toFixed(1)]);
}

writeFileSync(out, JSON.stringify({ at: now.toISOString(), groups: GROUPS.map((g, i) => ({ color: g.color, points: points[i] })) }));
console.log(points.map((p) => p.length).join(' / '), 'points');
