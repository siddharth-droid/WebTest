import * as THREE from 'three';
import { gstime, jday, sunPos } from 'satellite.js';

export const EARTH_RADIUS_KM = 6371;
const AU_KM = 149_597_870.7;

/**
 * Scene convention: +Y is the North Pole, the equator lies in XZ.
 * ECI (TEME) x/y/z in km maps to scene (x, z, -y) / EARTH_RADIUS_KM, so one
 * scene unit is one Earth radius. With that mapping, rotating the Earth mesh
 * by Greenwich sidereal time about +Y lines its texture up with longitude.
 */
export function eciToScene(x: number, y: number, z: number, out = new THREE.Vector3()) {
  return out.set(x / EARTH_RADIUS_KM, z / EARTH_RADIUS_KM, -y / EARTH_RADIUS_KM);
}

/** Greenwich mean sidereal time in radians: how far Earth has turned. */
export const earthRotation = (date: Date) => gstime(date);

/** Unit vector from Earth toward the Sun, in scene coordinates. */
export function sunDirection(date: Date, out = new THREE.Vector3()) {
  const { rsun } = sunPos(jdayOf(date));
  return eciToScene(rsun[0] * AU_KM, rsun[1] * AU_KM, rsun[2] * AU_KM, out).normalize();
}

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

/** Equirectangular lat/lon (deg) to a point on the unit sphere in scene coordinates (Earth-fixed). */
export function latLonToScene(latDeg: number, lonDeg: number, radius = 1, out = new THREE.Vector3()) {
  const lat = THREE.MathUtils.degToRad(latDeg);
  const lon = THREE.MathUtils.degToRad(lonDeg);
  // Inverse of lon = atan2(-z, x): see Earth.tsx's texture mapping
  return out.set(Math.cos(lat) * Math.cos(lon), Math.sin(lat), -Math.cos(lat) * Math.sin(lon)).multiplyScalar(radius);
}

const COMPASS = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
export const compass = (azDeg: number) => COMPASS[Math.round((((azDeg % 360) + 360) % 360) / 22.5) % 16];
