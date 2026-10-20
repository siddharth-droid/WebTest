'use client';

import { useMemo, useState } from 'react';
import { asset } from '@/lib/asset';
import { ago, useData } from '@/lib/data';
import { eventColor } from '@/lib/events';

interface EarthEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  lat: number;
  lon: number;
  magnitude: string | null;
  link: string | null;
}
interface EventsFile {
  source: string;
  fetchedAt: string;
  events: EarthEvent[];
}

const W = 720;
const H = 360;
const xy = (lat: number, lon: number) => [((lon + 180) / 360) * W, ((90 - lat) / 180) * H] as const;
const dateStr = (iso: string) => new Date(iso).toLocaleDateString([], { day: 'numeric', month: 'short' });

export function EarthApp() {
  const state = useData<EventsFile>('events.json');
  const [filter, setFilter] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);

  const categories = useMemo(() => {
    if (state.status !== 'ready') return [];
    const m = new Map<string, number>();
    for (const e of state.data.events) m.set(e.category, (m.get(e.category) ?? 0) + 1);
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, [state]);

  if (state.status === 'loading') return <main className="page"><p className="mono muted">Loading events…</p></main>;
  if (state.status === 'error') return <main className="page"><p className="mono form-error">Could not load events: {state.error}</p></main>;

  const events = state.data.events.filter((e) => !filter || e.category === filter);

  return (
    <main className="page">
      <header className="page-head">
        <span className="mono kicker">Earth, seen from orbit</span>
        <h1>What’s happening on the planet right now.</h1>
        <p className="lede">
          Active wildfires, storms, volcanoes and ice events that NASA is tracking with its Earth-observing satellites, updated every three hours.
        </p>
      </header>

      <div className="category-filters flat" role="group" aria-label="Filter by event type">
        <button className="chip" aria-pressed={filter === null} onClick={() => setFilter(null)}>
          <span>All</span>
          <span className="mono tabular">{state.data.events.length}</span>
        </button>
        {categories.map(([c, n]) => (
          <button key={c} className="chip" aria-pressed={filter === c} onClick={() => setFilter(filter === c ? null : c)}>
            <i style={{ background: eventColor(c) }} />
            <span>{c}</span>
            <span className="mono tabular">{n}</span>
          </button>
        ))}
      </div>

      <svg className="world-map" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Map of active natural events">
        <image href={asset('/textures/earth_map_640.jpg')} width={W} height={H} opacity={0.42} style={{ filter: 'grayscale(1) contrast(1.15)' }} />
        {events.map((e) => {
          const [x, y] = xy(e.lat, e.lon);
          const on = hover === e.id;
          return (
            <g key={e.id} transform={`translate(${x},${y})`} onMouseEnter={() => setHover(e.id)} onMouseLeave={() => setHover(null)}>
              <circle r={9} fill="transparent" />
              <circle r={on ? 6 : 4} fill={eventColor(e.category)} stroke="#02040a" strokeWidth={2} />
              <title>{e.title}</title>
            </g>
          );
        })}
      </svg>

      <ol className="event-list">
        {events.map((e) => (
          <li key={e.id} data-active={hover === e.id} onMouseEnter={() => setHover(e.id)} onMouseLeave={() => setHover(null)}>
            <span className="event-dot" style={{ background: eventColor(e.category) }} />
            <div>
              <strong>{e.title}</strong>
              <span className="mono muted">
                {e.category} · {dateStr(e.date)} · {Math.abs(e.lat).toFixed(1)}°{e.lat >= 0 ? 'N' : 'S'} {Math.abs(e.lon).toFixed(1)}°{e.lon >= 0 ? 'E' : 'W'}
                {e.magnitude ? ` · ${e.magnitude}` : ''}
              </span>
            </div>
            {e.link && (
              <a className="mono link-button" href={e.link} target="_blank" rel="noreferrer">
                Source →
              </a>
            )}
          </li>
        ))}
      </ol>

      <p className="mono muted source">
        Data: {state.data.source} · updated {ago(state.data.fetchedAt)}
      </p>
    </main>
  );
}
