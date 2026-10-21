'use client';

import { useEffect, useMemo, useState } from 'react';
import { degreesLat, degreesLong, eciToGeodetic, gstime, json2satrec, propagate, type OMMJsonObject, type SatRec } from 'satellite.js';
import { geoContains } from 'd3-geo';
import { feature } from 'topojson-client';
import type { FeatureCollection, Geometry } from 'geojson';
import type { Topology } from 'topojson-specification';
import { asset } from '@/lib/asset';
import { loadData } from '@/lib/data';
import { isSunlit, sunEci } from '@/lib/sat/sun';
import { predictPasses, type Observer, type Pass } from '@/lib/sat/passes';

/** Ticks once a second, so countdowns and positions stay live. */
export function useNow(ms = 1000) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), ms);
    return () => clearInterval(id);
  }, [ms]);
  return now;
}

export function useIssRecord() {
  const [rec, setRec] = useState<SatRec | null>(null);
  useEffect(() => {
    loadData<{ satellites: OMMJsonObject[] }>('featured.json')
      .then((d) => {
        const iss = d.satellites.find((s) => Number(s.NORAD_CAT_ID) === 25544);
        if (iss) setRec(json2satrec(iss));
      })
      .catch(() => undefined);
  }, []);
  return rec;
}

type Countries = FeatureCollection<Geometry, { name: string }>;
let countries: Promise<Countries> | null = null;
const loadCountries = () =>
  (countries ??= fetch(asset('/geo/countries-110m.json'))
    .then((r) => r.json() as Promise<Topology>)
    .then((t) => feature(t, t.objects.countries) as unknown as Countries));

/** Rough ocean names, good enough to say which water the station is over. */
function oceanAt(lat: number, lon: number) {
  if (lat < -60) return 'the Southern Ocean';
  if (lat > 66) return 'the Arctic Ocean';
  if (lon > 20 && lon < 120 && lat < 30) return 'the Indian Ocean';
  const half = lat >= 0 ? 'North' : 'South';
  if ((lat >= 0 && lon > -100 && lon < 0) || (lat < 0 && lon > -70 && lon < 20)) return `the ${half} Atlantic`;
  return `the ${half} Pacific`;
}

/** "the United States of America", "the Philippines", but "Brazil". */
const withArticle = (name: string) =>
  /^(United|Dem\.|Central African|Dominican)|Republic|Islands|Philippines|Netherlands|Bahamas|Gambia|Emirates/.test(name) ? `the ${name}` : name;

export interface IssNow {
  lat: number;
  lon: number;
  alt: number;
  sunlit: boolean;
  /** Country or ocean below (null until the map loads). */
  over: string | null;
}

/** Where the station is this second, and what it is flying over. */
export function useIssNow(rec: SatRec | null, now: number | null): IssNow | null {
  const [map, setMap] = useState<Countries | null>(null);
  useEffect(() => {
    loadCountries().then(setMap, () => undefined);
  }, []);
  return useMemo(() => {
    if (!rec || now === null) return null;
    const date = new Date(now);
    const pv = propagate(rec, date);
    if (!pv) return null;
    const g = eciToGeodetic(pv.position, gstime(date));
    const lat = degreesLat(g.latitude);
    const lon = degreesLong(g.longitude);
    const over = map ? (withArticle(map.features.find((f) => geoContains(f, [lon, lat]))?.properties.name ?? '') || oceanAt(lat, lon)) : null;
    return { lat, lon, alt: g.height, sunlit: isSunlit(pv.position, sunEci(date)), over };
  }, [rec, now, map]);
}

/** The next time the station enters (sunset) or leaves (sunrise) Earth's shadow. */
export function nextShadowChange(rec: SatRec, from: number) {
  const lit = (t: number) => {
    const pv = propagate(rec, new Date(t));
    return pv ? isSunlit(pv.position, sunEci(new Date(t))) : true;
  };
  const start = lit(from);
  let a = from;
  for (let b = from + 20_000; b < from + 100 * 60_000; b += 20_000) {
    if (lit(b) !== start) {
      for (let i = 0; i < 10; i++) {
        const m = (a + b) / 2;
        if (lit(m) === start) a = m;
        else b = m;
      }
      return { at: b, kind: start ? ('sunset' as const) : ('sunrise' as const) };
    }
    a = b;
  }
  return null;
}

/** Recomputed only when the previous change has passed. */
export function useShadowChange(rec: SatRec | null, now: number | null) {
  const [change, setChange] = useState<ReturnType<typeof nextShadowChange>>(null);
  useEffect(() => {
    if (!rec || now === null) return;
    if (change && change.at > now) return;
    setChange(nextShadowChange(rec, now));
  }, [rec, now, change]);
  return change;
}

/** The next pass over the observer, preferring one bright enough to see by eye. */
export function useNextPass(rec: SatRec | null, observer: Observer | null) {
  return useMemo<Pass | null>(() => {
    if (!rec || !observer) return null;
    const passes = predictPasses(rec, observer, new Date(), 96, 10, 20);
    return passes.find((p) => p.visible) ?? passes[0] ?? null;
  }, [rec, observer]);
}

export function countdown(ms: number) {
  const s = Math.max(0, Math.round(ms / 1000));
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${String(m).padStart(2, '0')}m`;
  return `${m}m ${String(s % 60).padStart(2, '0')}s`;
}
