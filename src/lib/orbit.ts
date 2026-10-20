import { Vector3 } from 'three';

export const EARTH_RADIUS_KM = 6371;
const MU = 398600.4418; // Earth's gravitational parameter, km^3/s^2
const SIDEREAL_DAY_S = 86164;

/** Simulation runs faster than real time so orbits are visibly moving. */
export const TIME_WARP = 24;

export interface Orbit {
  altitudeKm: number;
  inclinationDeg: number;
  /** Right ascension of the ascending node: where the orbit crosses the equator going north. */
  raanDeg: number;
  /** Starting position along the orbit. */
  phaseDeg: number;
}

const DEG = Math.PI / 180;

export const semiMajorAxisKm = (o: Orbit) => EARTH_RADIUS_KM + o.altitudeKm;
export const periodS = (o: Orbit) => 2 * Math.PI * Math.sqrt(semiMajorAxisKm(o) ** 3 / MU);
export const velocityKmS = (o: Orbit) => Math.sqrt(MU / semiMajorAxisKm(o));

/**
 * Circular-orbit position in scene units, where the Earth has radius `earthRadius`.
 * Scene axes: +Y is the north pole, the equator lies in XZ.
 */
export function positionAt(o: Orbit, simSeconds: number, earthRadius: number, out = new Vector3()) {
  const r = (semiMajorAxisKm(o) / EARTH_RADIUS_KM) * earthRadius;
  const u = o.phaseDeg * DEG + (2 * Math.PI * simSeconds) / periodS(o);
  // Position in the orbital plane, then tilt by inclination (about X) and swing by RAAN (about Y).
  const x = r * Math.cos(u);
  const z0 = r * Math.sin(u);
  const i = o.inclinationDeg * DEG;
  const y = z0 * Math.sin(i);
  const z = -z0 * Math.cos(i);
  const raan = o.raanDeg * DEG;
  return out.set(x * Math.cos(raan) + z * Math.sin(raan), y, -x * Math.sin(raan) + z * Math.cos(raan));
}

/** Points along the full orbit, for drawing its path. */
export function orbitPath(o: Orbit, earthRadius: number, segments = 160) {
  const period = periodS(o);
  return Array.from({ length: segments + 1 }, (_, k) => positionAt(o, (k / segments) * period, earthRadius));
}

/** Earth's spin angle at a simulation time, in radians. */
export const earthRotationAt = (simSeconds: number) => (2 * Math.PI * simSeconds) / SIDEREAL_DAY_S;

/** Sub-satellite latitude/longitude in degrees, accounting for Earth's rotation. */
export function groundPoint(p: Vector3, simSeconds: number) {
  const r = p.length();
  const lat = Math.asin(p.y / r) / DEG;
  let lon = (Math.atan2(-p.z, p.x) - earthRotationAt(simSeconds)) / DEG;
  lon = ((((lon + 180) % 360) + 360) % 360) - 180;
  return { lat, lon };
}

/** Shared simulation clock so the 3D scene and the DOM telemetry agree. */
const epoch = typeof performance !== 'undefined' ? performance.now() : 0;
export const simNow = () => ((performance.now() - epoch) / 1000) * TIME_WARP;
