'use client';

import { useEffect, useRef, useState } from 'react';
import { loadData } from '@/lib/data';
import { parseCatalog, type Catalog, type SatelliteFile } from '@/lib/sat/catalog';
import type { Observer } from '@/lib/sat/passes';
import type { WorkerIn, WorkerOut } from '@/lib/sat/propagation.worker';

export interface LiveSnapshot {
  time: number;
  positions: Float32Array;
  velocities: Float32Array;
}

const TICK_MS = 1000;

/**
 * Loads the satellite catalog and keeps a live SGP4 snapshot of every
 * satellite, refreshed once a second by a Web Worker.
 */
export function useLiveCatalog(observer: Observer | null) {
  const [catalog, setCatalog] = useState<Catalog | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [overhead, setOverhead] = useState<number[]>([]);
  const live = useRef<LiveSnapshot | null>(null);
  const worker = useRef<Worker | null>(null);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setInterval> | undefined;

    loadData<SatelliteFile>('satellites.json')
      .then((file) => {
        if (cancelled) return;
        const cat = parseCatalog(file);
        const w = new Worker(new URL('../../lib/sat/propagation.worker.ts', import.meta.url), { type: 'module' });
        worker.current = w;
        w.onmessage = (e: MessageEvent<WorkerOut>) => {
          const { time, positions, velocities, overhead: idx } = e.data;
          live.current = { time, positions, velocities };
          setOverhead(Array.from(idx));
        };
        w.postMessage({ type: 'init', omms: cat.sats.map((s) => s.omm) } satisfies WorkerIn);
        const tick = () => w.postMessage({ type: 'tick', time: Date.now() } satisfies WorkerIn);
        tick();
        timer = setInterval(tick, TICK_MS);
        setCatalog(cat);
      })
      .catch((err: Error) => !cancelled && setError(err.message));

    return () => {
      cancelled = true;
      clearInterval(timer);
      worker.current?.terminate();
      worker.current = null;
    };
  }, []);

  useEffect(() => {
    worker.current?.postMessage({
      type: 'observer',
      observer: observer ? { lat: observer.lat, lon: observer.lon } : null,
    } satisfies WorkerIn);
    if (!observer) setOverhead([]);
  }, [observer, catalog]);

  return { catalog, error, live, overhead };
}
