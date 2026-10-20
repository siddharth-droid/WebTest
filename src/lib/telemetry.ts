import { Vector3 } from 'three';
import type { FleetSatellite } from './fleet';
import { groundPoint, periodS, positionAt, velocityKmS } from './orbit';

/** Must match the sun direction used by the fleet scene. */
const SUN = new Vector3(1, 0.25, 0.6).normalize();
const p = new Vector3();
const perp = new Vector3();

export interface Telemetry {
  altitudeKm: number;
  velocityKmS: number;
  inclinationDeg: number;
  periodMin: number;
  lat: number;
  lon: number;
  sunlit: boolean;
  batteryPct: number;
  orbitFraction: number;
}

/** Cylindrical-shadow test: behind the Earth and inside its shadow column. */
function isSunlit(pos: Vector3, earthRadius: number) {
  const along = pos.dot(SUN);
  if (along >= 0) return true;
  perp.copy(SUN).multiplyScalar(along);
  return pos.distanceTo(perp) > earthRadius;
}

export function telemetryAt(sat: FleetSatellite, simSeconds: number, earthRadius = 1): Telemetry {
  positionAt(sat.orbit, simSeconds, earthRadius, p);
  const period = periodS(sat.orbit);
  const orbitFraction = (((simSeconds / period + sat.orbit.phaseDeg / 360) % 1) + 1) % 1;
  const { lat, lon } = groundPoint(p, simSeconds);
  const sunlit = isSunlit(p, earthRadius);

  // Battery charges in sunlight and drains in eclipse; satellites in safe
  // mode shed load and sit lower.
  const base = sat.status === 'SAFE MODE' ? 41 : sat.status === 'DEGRADED' ? 63 : 82;
  const batteryPct = base + Math.sin(orbitFraction * Math.PI * 2 + sat.seed) * 9;

  return {
    altitudeKm: sat.orbit.altitudeKm + Math.sin(orbitFraction * Math.PI * 2) * 1.8, // small eccentricity wobble
    velocityKmS: velocityKmS(sat.orbit),
    inclinationDeg: sat.orbit.inclinationDeg,
    periodMin: period / 60,
    lat,
    lon,
    sunlit,
    batteryPct,
    orbitFraction,
  };
}

/** Ground track for the next `orbits` revolutions, split where it wraps the antimeridian. */
export function groundTrack(sat: FleetSatellite, simSeconds: number, orbits = 1, samples = 180) {
  const period = periodS(sat.orbit);
  const segments: { lat: number; lon: number }[][] = [[]];
  let prevLon: number | null = null;
  for (let k = 0; k <= samples; k++) {
    const t = simSeconds + (k / samples) * period * orbits;
    const gp = groundPoint(positionAt(sat.orbit, t, 1, p), t);
    if (prevLon !== null && Math.abs(gp.lon - prevLon) > 180) segments.push([]);
    segments[segments.length - 1].push(gp);
    prevLon = gp.lon;
  }
  return segments;
}
