import { ecfToLookAngles, eciToEcf, gstime, propagate, type SatRec } from 'satellite.js';
import { isSunlit, sunEci } from './sun';

export interface Observer {
  lat: number;
  lon: number;
  /** Height above sea level in km. */
  height?: number;
  label?: string;
}

export interface Pass {
  rise: Date;
  set: Date;
  peak: Date;
  maxElevation: number;
  riseAz: number;
  peakAz: number;
  setAz: number;
  /** Satellite sunlit while the observer's sky is dark: you can see it with your eyes. */
  visible: boolean;
}

const DEG = Math.PI / 180;

function lookAt(rec: SatRec, obs: Observer, date: Date) {
  const pv = propagate(rec, date);
  if (!pv) return null;
  const gmst = gstime(date);
  const ecf = eciToEcf(pv.position, gmst);
  const look = ecfToLookAngles({ latitude: obs.lat * DEG, longitude: obs.lon * DEG, height: obs.height ?? 0 }, ecf);
  return { el: look.elevation / DEG, az: look.azimuth / DEG, eci: pv.position };
}

/** Sun elevation for the observer, in degrees (approximate, good to ~0.5°). */
function sunElevation(obs: Observer, date: Date) {
  const sun = sunEci(date);
  const gmst = gstime(date);
  const ecf = eciToEcf({ x: sun[0], y: sun[1], z: sun[2] }, gmst);
  return ecfToLookAngles({ latitude: obs.lat * DEG, longitude: obs.lon * DEG, height: 0 }, ecf).elevation / DEG;
}

/** Narrow down the moment elevation crosses `minEl`, between a (below) and b (above) or vice versa. */
function crossing(rec: SatRec, obs: Observer, a: number, b: number, minEl: number) {
  const aboveAtA = (lookAt(rec, obs, new Date(a))?.el ?? -90) > minEl;
  for (let i = 0; i < 14; i++) {
    const m = (a + b) / 2;
    const above = (lookAt(rec, obs, new Date(m))?.el ?? -90) > minEl;
    if (above === aboveAtA) a = m;
    else b = m;
  }
  return (a + b) / 2;
}

/**
 * Upcoming passes above `minEl` degrees. Coarse 20-second scan, then each
 * rise/set is refined by bisection to well under a second.
 */
export function predictPasses(rec: SatRec, obs: Observer, from: Date, hours = 72, minEl = 10, max = 12): Pass[] {
  const passes: Pass[] = [];
  const step = 20_000;
  const end = from.getTime() + hours * 3_600_000;
  let prevT = from.getTime();
  let prevEl = lookAt(rec, obs, from)?.el ?? -90;
  let riseT: number | null = prevEl > minEl ? prevT : null;

  for (let t = prevT + step; t <= end && passes.length < max; t += step) {
    const el = lookAt(rec, obs, new Date(t))?.el ?? -90;
    if (riseT === null && el > minEl && prevEl <= minEl) riseT = crossing(rec, obs, prevT, t, minEl);
    if (riseT !== null && el <= minEl && prevEl > minEl) {
      const setT = crossing(rec, obs, prevT, t, minEl);
      passes.push(describe(rec, obs, riseT, setT));
      riseT = null;
    }
    prevT = t;
    prevEl = el;
  }
  return passes;
}

function describe(rec: SatRec, obs: Observer, riseT: number, setT: number): Pass {
  let peakT = riseT;
  let maxEl = -90;
  let visible = false;
  for (let t = riseT; t <= setT; t += 5_000) {
    const d = new Date(t);
    const l = lookAt(rec, obs, d);
    if (!l) continue;
    if (l.el > maxEl) {
      maxEl = l.el;
      peakT = t;
    }
    // Visible to the eye: satellite in sunlight while the observer is in at least civil twilight
    if (!visible && sunElevation(obs, d) < -6 && isSunlit(l.eci, sunEci(d))) visible = true;
  }
  const az = (t: number) => lookAt(rec, obs, new Date(t))?.az ?? 0;
  return {
    rise: new Date(riseT),
    set: new Date(setT),
    peak: new Date(peakT),
    maxElevation: maxEl,
    riseAz: az(riseT),
    peakAz: az(peakT),
    setAz: az(setT),
    visible,
  };
}

/** Current look angles from the observer, or null if the propagator fails. */
export const lookAngles = lookAt;
