'use client';

import { feature, mesh } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import type { FeatureCollection, MultiLineString } from 'geojson';
import { gstime, sunPos } from 'satellite.js';
import { asset } from './asset';
import { jdayOf } from './sat/astro';

export interface World {
  land: FeatureCollection;
  borders: MultiLineString;
}

let world: Promise<World> | null = null;

/** Natural Earth land (1:50m) and country borders (1:110m), via world-atlas. */
export function loadWorld(): Promise<World> {
  world ??= Promise.all([
    fetch(asset('/geo/land-50m.json')).then((r) => r.json() as Promise<Topology>),
    fetch(asset('/geo/countries-110m.json')).then((r) => r.json() as Promise<Topology>),
  ]).then(([land, countries]) => ({
    land: feature(land, land.objects.land as GeometryCollection) as unknown as FeatureCollection,
    borders: mesh(countries, countries.objects.countries as GeometryCollection, (a, b) => a !== b),
  }));
  return world;
}

/** Latitude/longitude (degrees) where the Sun is directly overhead right now. */
export function subsolarPoint(date = new Date()): [number, number] {
  const { rtasc, decl } = sunPos(jdayOf(date));
  const lon = ((((rtasc - gstime(date)) * 180) / Math.PI + 540) % 360) - 180;
  return [lon, (decl * 180) / Math.PI];
}

/** Bilinear sample of NOAA's OVATION grid (lon 0..359, lat −90..90), 0..100. */
export function sampleAurora(grid: Uint8Array, lat: number, lon: number) {
  const x = ((lon % 360) + 360) % 360;
  const y = Math.min(180, Math.max(0, lat + 90));
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const fx = x - x0;
  const fy = y - y0;
  const at = (xx: number, yy: number) => grid[Math.min(180, yy) * 360 + (xx % 360)];
  const top = at(x0, y0) * (1 - fx) + at(x0 + 1, y0) * fx;
  const bottom = at(x0, y0 + 1) * (1 - fx) + at(x0 + 1, y0 + 1) * fx;
  return top * (1 - fy) + bottom * fy;
}
