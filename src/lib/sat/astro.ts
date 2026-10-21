import * as THREE from 'three';
import { sunPos } from 'satellite.js';
import { AU_KM, EARTH_RADIUS_KM, jdayOf } from './sun';

export { AU_KM, EARTH_RADIUS_KM, compass, earthRotation, isSunlit, jdayOf, sunEci } from './sun';

/**
 * Scene convention: +Y is the North Pole, the equator lies in XZ.
 * ECI (TEME) x/y/z in km maps to scene (x, z, -y) / EARTH_RADIUS_KM, so one
 * scene unit is one Earth radius. With that mapping, rotating the Earth mesh
 * by Greenwich sidereal time about +Y lines its texture up with longitude.
 */
export function eciToScene(x: number, y: number, z: number, out = new THREE.Vector3()) {
  return out.set(x / EARTH_RADIUS_KM, z / EARTH_RADIUS_KM, -y / EARTH_RADIUS_KM);
}

/** Unit vector from Earth toward the Sun, in scene coordinates. */
export function sunDirection(date: Date, out = new THREE.Vector3()) {
  const { rsun } = sunPos(jdayOf(date));
  return eciToScene(rsun[0] * AU_KM, rsun[1] * AU_KM, rsun[2] * AU_KM, out).normalize();
}

/** Equirectangular lat/lon (deg) to a point on the unit sphere in scene coordinates (Earth-fixed). */
export function latLonToScene(latDeg: number, lonDeg: number, radius = 1, out = new THREE.Vector3()) {
  const lat = THREE.MathUtils.degToRad(latDeg);
  const lon = THREE.MathUtils.degToRad(lonDeg);
  // Inverse of lon = atan2(-z, x): see Earth.tsx's texture mapping
  return out.set(Math.cos(lat) * Math.cos(lon), Math.sin(lat), -Math.cos(lat) * Math.sin(lon)).multiplyScalar(radius);
}
