'use client';

import { useCallback, useEffect, useState } from 'react';
import type { Observer } from './sat/passes';

const KEY = 'orbita.observer';
const listeners = new Set<(o: Observer | null) => void>();

function read(): Observer | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Observer) : null;
  } catch {
    return null;
  }
}

function save(o: Observer | null) {
  try {
    if (o) localStorage.setItem(KEY, JSON.stringify(o));
    else localStorage.removeItem(KEY);
  } catch {
    /* private mode: location just won't persist */
  }
  listeners.forEach((l) => l(o));
}

/** The viewer's location, shared across pages and remembered between visits. */
export function useObserver() {
  const [observer, setObserver] = useState<Observer | null>(null);
  const [locating, setLocating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setObserver(read());
    listeners.add(setObserver);
    return () => {
      listeners.delete(setObserver);
    };
  }, []);

  const locate = useCallback(() => {
    if (!('geolocation' in navigator)) {
      setError('Location is not available in this browser');
      return;
    }
    setLocating(true);
    setError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        save({
          lat: Number(pos.coords.latitude.toFixed(4)),
          lon: Number(pos.coords.longitude.toFixed(4)),
          height: (pos.coords.altitude ?? 0) / 1000,
          label: 'Your location',
        });
      },
      (err) => {
        setLocating(false);
        setError(err.code === err.PERMISSION_DENIED ? 'Location permission denied. Search for a city instead.' : 'Could not get your location');
      },
      { enableHighAccuracy: false, timeout: 10_000, maximumAge: 600_000 },
    );
  }, []);

  return { observer, setObserver: save, locate, locating, error };
}

export interface Place {
  name: string;
  detail: string;
  lat: number;
  lon: number;
}

/** City search via Open-Meteo's free geocoding API (no key, CORS-enabled). */
export async function searchPlaces(query: string, signal?: AbortSignal): Promise<Place[]> {
  const url = `https://geocoding-api.open-meteo.com/v1/search?count=6&language=en&format=json&name=${encodeURIComponent(query)}`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`Search failed (${res.status})`);
  const json = (await res.json()) as {
    results?: { name: string; admin1?: string; country?: string; latitude: number; longitude: number }[];
  };
  return (json.results ?? []).map((r) => ({
    name: r.name,
    detail: [r.admin1, r.country].filter(Boolean).join(', '),
    lat: r.latitude,
    lon: r.longitude,
  }));
}
