/// <reference lib="webworker" />
/**
 * Runs SGP4 for the whole catalog off the main thread.
 *
 * Every tick it returns, for each satellite, its position (Earth radii,
 * scene axes) and velocity (Earth radii per second). The GPU extrapolates
 * position + velocity × Δt each frame, so ~10k satellites move smoothly
 * with no per-frame CPU work. It also reports which satellites are above
 * the observer's horizon.
 */
import { ecfToLookAngles, eciToEcf, gstime, json2satrec, propagate, type OMMJsonObject, type SatRec } from 'satellite.js';

const R = 6371;
const DEG = Math.PI / 180;

let recs: (SatRec | null)[] = [];
let observer: { lat: number; lon: number } | null = null;

export type WorkerIn =
  | { type: 'init'; omms: OMMJsonObject[] }
  | { type: 'observer'; observer: { lat: number; lon: number } | null }
  | { type: 'tick'; time: number };

export type WorkerOut = {
  type: 'positions';
  time: number;
  positions: Float32Array;
  velocities: Float32Array;
  /** Indices of satellites above 10° elevation for the observer, highest first. */
  overhead: Int32Array;
  failed: number;
};

self.onmessage = (e: MessageEvent<WorkerIn>) => {
  const msg = e.data;
  if (msg.type === 'init') {
    recs = msg.omms.map((o) => {
      try {
        return json2satrec(o);
      } catch {
        return null;
      }
    });
  } else if (msg.type === 'observer') {
    observer = msg.observer;
  } else if (msg.type === 'tick') {
    tick(msg.time);
  }
};

function tick(time: number) {
  const date = new Date(time);
  const n = recs.length;
  const positions = new Float32Array(n * 3);
  const velocities = new Float32Array(n * 3);
  const gmst = observer ? gstime(date) : 0;
  const obsGd = observer ? { latitude: observer.lat * DEG, longitude: observer.lon * DEG, height: 0 } : null;
  const above: [number, number][] = [];
  let failed = 0;

  for (let i = 0; i < n; i++) {
    const rec = recs[i];
    const pv = rec ? propagate(rec, date) : null;
    if (!pv || !Number.isFinite(pv.position.x)) {
      // Park failed/decayed objects at the centre, where the Earth hides them
      failed++;
      continue;
    }
    const p = pv.position;
    const v = pv.velocity;
    // ECI (x, y, z) → scene (x, z, -y), in Earth radii
    positions[i * 3] = p.x / R;
    positions[i * 3 + 1] = p.z / R;
    positions[i * 3 + 2] = -p.y / R;
    velocities[i * 3] = v.x / R;
    velocities[i * 3 + 1] = v.z / R;
    velocities[i * 3 + 2] = -v.y / R;

    if (obsGd) {
      const look = ecfToLookAngles(obsGd, eciToEcf(p, gmst));
      const el = look.elevation / DEG;
      if (el > 10) above.push([i, el]);
    }
  }

  above.sort((a, b) => b[1] - a[1]);
  const overhead = Int32Array.from(above.map((a) => a[0]));
  const out: WorkerOut = { type: 'positions', time, positions, velocities, overhead, failed };
  (self as unknown as Worker).postMessage(out, [positions.buffer, velocities.buffer, overhead.buffer]);
}
