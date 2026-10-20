'use client';

import { useEffect, useState } from 'react';
import { asset } from './asset';

const cache = new Map<string, Promise<unknown>>();

/** Fetch a JSON file from public/data once per page load. */
export function loadData<T>(name: string): Promise<T> {
  let p = cache.get(name);
  if (!p) {
    p = fetch(asset(`/data/${name}`)).then((r) => {
      if (!r.ok) throw new Error(`${name}: HTTP ${r.status}`);
      return r.json();
    });
    p.catch(() => cache.delete(name));
    cache.set(name, p);
  }
  return p as Promise<T>;
}

export type DataState<T> = { status: 'loading' } | { status: 'error'; error: string } | { status: 'ready'; data: T };

export function useData<T>(name: string): DataState<T> {
  const [state, setState] = useState<DataState<T>>({ status: 'loading' });
  useEffect(() => {
    let live = true;
    loadData<T>(name).then(
      (data) => live && setState({ status: 'ready', data }),
      (err: Error) => live && setState({ status: 'error', error: err.message }),
    );
    return () => {
      live = false;
    };
  }, [name]);
  return state;
}

/** "3 h ago", "12 min ago" */
export function ago(iso: string, now = Date.now()) {
  const s = Math.max(0, (now - new Date(iso).getTime()) / 1000);
  if (s < 90) return 'just now';
  if (s < 5400) return `${Math.round(s / 60)} min ago`;
  if (s < 172800) return `${Math.round(s / 3600)} h ago`;
  return `${Math.round(s / 86400)} days ago`;
}
