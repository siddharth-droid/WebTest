import { gstime, jday, sunPos } from 'satellite.js';

/**
 * Sun and shadow geometry with no rendering dependencies, so pages without a
 * 3D scene (the landing) can use it without loading three.js.
 */

export const EARTH_RADIUS_KM = 6371;
export const AU_KM = 149_597_870.7;

/** Greenwich mean sidereal time in radians: how far Earth has turned. */
export const earthRotation = (date: Date) => gstime(date);

/** Sun position in ECI km, for shadow tests. */
export function sunEci(date: Date): [number, number, number] {
  const { rsun } = sunPos(jdayOf(date));
  return [rsun[0] * AU_KM, rsun[1] * AU_KM, rsun[2] * AU_KM];
}

export const jdayOf = (d: Date) =>
  jday(d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds() + d.getUTCMilliseconds() / 1000);

/**
 * Cylindrical Earth-shadow test: is a point (ECI km) in sunlight?
 * Good to a few seconds at eclipse entry/exit, which is all a tracker needs.
 */
export function isSunlit(p: { x: number; y: number; z: number }, sun: [number, number, number]) {
  const sl = Math.hypot(sun[0], sun[1], sun[2]);
  const sx = sun[0] / sl, sy = sun[1] / sl, sz = sun[2] / sl;
  const along = p.x * sx + p.y * sy + p.z * sz;
  if (along > 0) return true;
  const px = p.x - along * sx, py = p.y - along * sy, pz = p.z - along * sz;
  return Math.hypot(px, py, pz) > EARTH_RADIUS_KM;
}

const COMPASS = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
export const compass = (azDeg: number) => COMPASS[Math.round((((azDeg % 360) + 360) % 360) / 22.5) % 16];
