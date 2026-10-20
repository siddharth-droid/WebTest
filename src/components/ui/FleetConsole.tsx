'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { asset } from '@/lib/asset';
import { FLEET, PLANE_IDS, type FleetSatellite, type SatelliteClass } from '@/lib/fleet';
import { simNow, TIME_WARP } from '@/lib/orbit';
import { groundTrack, telemetryAt, type Telemetry } from '@/lib/telemetry';
import { Loader } from './Loader';

const FleetScene = dynamic(() => import('@/components/canvas/FleetScene'), { ssr: false });

const FILTERS: ('ALL' | SatelliteClass)[] = ['ALL', 'COMPUTE', 'IMAGING', 'RELAY'];

/** Re-renders the caller at a fixed rate, for live readouts. */
function useTicker(hz: number) {
  const [, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000 / hz);
    return () => clearInterval(id);
  }, [hz]);
}

const fmt = (n: number, digits = 0) => n.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits });
const fmtLat = (v: number) => `${fmt(Math.abs(v), 2)}° ${v >= 0 ? 'N' : 'S'}`;
const fmtLon = (v: number) => `${fmt(Math.abs(v), 2)}° ${v >= 0 ? 'E' : 'W'}`;

export function FleetConsole() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('ALL');
  const [query, setQuery] = useState('');

  const visible = useMemo(
    () =>
      FLEET.filter(
        (s) =>
          (filter === 'ALL' || s.cls === filter) &&
          (query === '' || s.name.toLowerCase().includes(query.trim().toLowerCase())),
      ),
    [filter, query],
  );

  const select = useCallback((id: string | null) => {
    setSelectedId(id);
    const url = new URL(window.location.href);
    if (id) url.searchParams.set('sat', id);
    else url.searchParams.delete('sat');
    window.history.replaceState(null, '', url);
  }, []);

  // Deep link: /fleet?sat=B-3
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('sat');
    if (id && FLEET.some((s) => s.id === id)) setSelectedId(id);
  }, []);

  // Keyboard: arrows step through the visible list, Escape returns to overview
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      if (e.key === 'Escape') return select(null);
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      e.preventDefault();
      const i = visible.findIndex((s) => s.id === selectedId);
      const step = e.key === 'ArrowDown' ? 1 : -1;
      const next = visible[(i + step + visible.length) % visible.length];
      if (next) select(next.id);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [visible, selectedId, select]);

  const selected = FLEET.find((s) => s.id === selectedId) ?? null;
  const counts = useMemo(
    () => ({
      nominal: FLEET.filter((s) => s.status === 'NOMINAL').length,
      attention: FLEET.filter((s) => s.status !== 'NOMINAL').length,
    }),
    [],
  );

  return (
    <>
      <Loader />
      <FleetScene
        selectedId={selectedId}
        hoveredId={hoveredId}
        onSelect={select}
        onHover={setHoveredId}
        onDeselect={() => select(null)}
      />

      <main className="fleet">
        <aside className="rail" aria-label="Spacecraft">
          <div className="rail-head">
            <h1>Fleet</h1>
            <span className="mono tabular">
              {counts.nominal} nominal · {counts.attention} attention
            </span>
          </div>
          <input
            className="search"
            placeholder="Search designation"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search spacecraft"
          />
          <div className="filters mono" role="group" aria-label="Filter by class">
            {FILTERS.map((f) => (
              <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>
          <ul className="sat-list" role="listbox" aria-label="Spacecraft list">
            {PLANE_IDS.map((plane) => {
              const sats = visible.filter((s) => s.plane === plane);
              if (sats.length === 0) return null;
              return (
                <li key={plane}>
                  <div className="plane-label mono">
                    Plane {plane} · {sats[0].orbit.inclinationDeg}° · {fmt(sats[0].orbit.altitudeKm)} km
                  </div>
                  {sats.map((s) => (
                    <SatelliteRow
                      key={s.id}
                      sat={s}
                      selected={s.id === selectedId}
                      hovered={s.id === hoveredId}
                      onSelect={() => select(s.id === selectedId ? null : s.id)}
                      onHover={setHoveredId}
                    />
                  ))}
                </li>
              );
            })}
            {visible.length === 0 && <li className="plane-label mono">No spacecraft match</li>}
          </ul>
        </aside>

        <section className="inspector" aria-live="polite">
          {selected ? <Inspector sat={selected} /> : <EmptyInspector />}
        </section>

        <footer className="timebar mono">
          <span className="tabular">
            Sim rate {TIME_WARP}× · <SimClock />
          </span>
          <span>
            <kbd>↑</kbd> <kbd>↓</kbd> cycle · <kbd>Esc</kbd> overview · drag to orbit
          </span>
        </footer>
      </main>
    </>
  );
}

function SatelliteRow({
  sat,
  selected,
  hovered,
  onSelect,
  onHover,
}: {
  sat: FleetSatellite;
  selected: boolean;
  hovered: boolean;
  onSelect: () => void;
  onHover: (id: string | null) => void;
}) {
  return (
    <button
      className="sat-row"
      role="option"
      aria-selected={selected}
      data-hovered={hovered}
      onClick={onSelect}
      onMouseEnter={() => onHover(sat.id)}
      onMouseLeave={() => onHover(null)}
    >
      <span className="status-dot" data-status={sat.status} />
      <span className="name">{sat.name}</span>
      <span className="mono">{sat.status === 'NOMINAL' ? sat.cls : sat.status}</span>
    </button>
  );
}

function SimClock() {
  useTicker(4);
  const t = simNow();
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = Math.floor(t % 60);
  return <>T+{[h, m, s].map((n) => String(n).padStart(2, '0')).join(':')}</>;
}

function EmptyInspector() {
  return (
    <div className="inspector-empty mono">
      Select a spacecraft from the list or click a marker on the globe to inspect live telemetry.
    </div>
  );
}

function Inspector({ sat }: { sat: FleetSatellite }) {
  useTicker(8);
  const t = simNow();
  const tm: Telemetry = telemetryAt(sat, t);

  return (
    <>
      <div className="inspector-head">
        <div className="row mono">
          <span>
            Plane {sat.plane} · {sat.cls}
          </span>
          <span className="badge" data-status={sat.status}>
            <span className="status-dot" data-status={sat.status} />
            {sat.status}
          </span>
        </div>
        <h2>{sat.name}</h2>
      </div>
      <dl className="readouts">
        <Readout label="Altitude" value={fmt(tm.altitudeKm, 1)} unit="km" />
        <Readout label="Velocity" value={fmt(tm.velocityKmS, 3)} unit="km/s" />
        <Readout label="Latitude" value={fmtLat(tm.lat)} />
        <Readout label="Longitude" value={fmtLon(tm.lon)} />
        <Readout label="Inclination" value={fmt(tm.inclinationDeg, 1)} unit="deg" />
        <Readout label="Period" value={fmt(tm.periodMin, 1)} unit="min" />
        <Readout label="Illumination" value={tm.sunlit ? 'Sunlit' : 'Eclipse'} />
        <div>
          <dt className="mono">Battery</dt>
          <dd>
            {fmt(tm.batteryPct, 0)}
            <small>%</small>
          </dd>
          <div className="meter">
            <i style={{ width: `${tm.batteryPct}%` }} />
          </div>
        </div>
      </dl>
      <GroundTrack sat={sat} t={t} />
    </>
  );
}

function Readout({ label, value, unit }: { label: string; value: string; unit?: string }) {
  return (
    <div>
      <dt className="mono">{label}</dt>
      <dd>
        {value}
        {unit && <small>{unit}</small>}
      </dd>
    </div>
  );
}

const MAP_W = 320;
const MAP_H = 160;
const project = ({ lat, lon }: { lat: number; lon: number }) =>
  [((lon + 180) / 360) * MAP_W, ((90 - lat) / 180) * MAP_H] as const;

function GroundTrack({ sat, t }: { sat: FleetSatellite; t: number }) {
  const segments = groundTrack(sat, t, 1);
  const here = project(segments[0][0]);
  return (
    <div className="track">
      <div className="track-head mono">
        <span>Ground track</span>
        <span>Next orbit</span>
      </div>
      <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} role="img" aria-label={`Ground track of ${sat.name}`}>
        <image href={asset('/textures/earth_map_640.jpg')} width={MAP_W} height={MAP_H} opacity={0.5} style={{ filter: 'grayscale(1) contrast(1.2)' }} />
        {[1, 2, 3].map((i) => (
          <line key={`h${i}`} x1={0} x2={MAP_W} y1={(i * MAP_H) / 4} y2={(i * MAP_H) / 4} stroke="rgb(232 237 245 / 0.1)" />
        ))}
        {[1, 2, 3, 4, 5].map((i) => (
          <line key={`v${i}`} y1={0} y2={MAP_H} x1={(i * MAP_W) / 6} x2={(i * MAP_W) / 6} stroke="rgb(232 237 245 / 0.1)" />
        ))}
        {segments.map((seg, i) => (
          <polyline
            key={i}
            points={seg.map((g) => project(g).join(',')).join(' ')}
            fill="none"
            stroke="#9fdcff"
            strokeWidth={1}
            strokeOpacity={0.9}
          />
        ))}
        <circle cx={here[0]} cy={here[1]} r={6} fill="none" stroke="#e8edf5" strokeOpacity={0.6} />
        <circle cx={here[0]} cy={here[1]} r={2.5} fill="#e8edf5" />
      </svg>
    </div>
  );
}
