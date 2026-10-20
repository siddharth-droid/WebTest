'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { eciToGeodetic, gstime, propagate, degreesLat, degreesLong } from 'satellite.js';
import { asset } from '@/lib/asset';
import { ago, useData } from '@/lib/data';
import { useObserver } from '@/lib/observer';
import { compass, isSunlit, sunEci } from '@/lib/sat/astro';
import { apsides, launchYear, ORBIT_CLASS, periodMinutes, satrecFor, type Catalog, type SatelliteRecord } from '@/lib/sat/catalog';
import { CATEGORY_ORDER, COLOR_GROUPS, groupOf, NOTABLE } from '@/lib/sat/groups';
import { lookAngles, predictPasses, type Observer, type Pass } from '@/lib/sat/passes';
import { LocationControl } from '@/components/ui/LocationControl';
import { Loader } from '@/components/ui/Loader';
import type { AuroraGrid, EarthEvent } from './TrackScene';
import { useLiveCatalog } from './useLiveCatalog';

const TrackScene = dynamic(() => import('./TrackScene'), { ssr: false });

const MAX_RESULTS = 80;

function useTicker(hz: number) {
  const [, set] = useState(0);
  useEffect(() => {
    const id = setInterval(() => set((t) => t + 1), 1000 / hz);
    return () => clearInterval(id);
  }, [hz]);
}

const num = (n: number, d = 0) => n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const latStr = (v: number) => `${num(Math.abs(v), 2)}° ${v >= 0 ? 'N' : 'S'}`;
const lonStr = (v: number) => `${num(Math.abs(v), 2)}° ${v >= 0 ? 'E' : 'W'}`;
const time = (d: Date) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const day = (d: Date) => d.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' });

export function TrackApp() {
  const { observer } = useObserver();
  const { catalog, error, live, overhead } = useLiveCatalog(observer);
  const weather = useData<{ aurora: AuroraGrid | null }>('space-weather.json');
  const eventsData = useData<{ events: EarthEvent[] }>('events.json');

  const [selectedNorad, setSelectedNorad] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState<'browse' | 'overhead'>('browse');
  const [hidden, setHidden] = useState<Set<string>>(new Set());
  const [layers, setLayers] = useState({ orbit: true, aurora: false, events: false });

  const select = useCallback((norad: number | null) => {
    setSelectedNorad(norad);
    const url = new URL(window.location.href);
    if (norad) url.searchParams.set('sat', String(norad));
    else url.searchParams.delete('sat');
    window.history.replaceState(null, '', url);
  }, []);

  // Deep link: /track/?sat=25544
  useEffect(() => {
    const n = Number(new URLSearchParams(window.location.search).get('sat'));
    if (n) setSelectedNorad(n);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !(e.target instanceof HTMLInputElement)) select(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [select]);

  const selected = (selectedNorad && catalog?.byNorad.get(selectedNorad)) || null;
  const visibleCategories = useMemo(
    () => new Set((catalog?.categories ?? []).filter((c) => !hidden.has(c))),
    [catalog, hidden],
  );

  return (
    <>
      <Loader />
      {catalog && (
        <TrackScene
          catalog={catalog}
          live={live}
          visibleCategories={visibleCategories}
          selected={selected}
          hovered={hovered}
          onSelect={(i) => select(catalog.sats[i].norad)}
          onHover={setHovered}
          onDeselect={() => select(null)}
          observer={observer}
          aurora={layers.aurora && weather.status === 'ready' ? weather.data.aurora : null}
          events={layers.events && eventsData.status === 'ready' ? eventsData.data.events : null}
          showOrbit={layers.orbit}
        />
      )}

      <main className="console">
        <aside className="rail" aria-label="Satellites">
          <div className="rail-head">
            <h1>Live tracker</h1>
            <span className="mono tabular">{catalog ? `${num(catalog.sats.length)} objects` : '…'}</span>
          </div>
          <div className="filters mono" role="tablist">
            <button role="tab" aria-selected={tab === 'browse'} onClick={() => setTab('browse')}>
              Browse
            </button>
            <button role="tab" aria-selected={tab === 'overhead'} onClick={() => setTab('overhead')}>
              Above you{observer ? ` · ${overhead.length}` : ''}
            </button>
          </div>
          {error && <p className="inspector-empty mono">Could not load satellite data: {error}</p>}
          {catalog && tab === 'browse' && (
            <Browse
              catalog={catalog}
              query={query}
              setQuery={setQuery}
              hidden={hidden}
              setHidden={setHidden}
              selectedNorad={selectedNorad}
              onSelect={select}
              onHover={(s) => setHovered(s ? s.index : null)}
            />
          )}
          {catalog && tab === 'overhead' && (
            <Overhead catalog={catalog} observer={observer} overhead={overhead} selectedNorad={selectedNorad} onSelect={select} />
          )}
        </aside>

        <section className="inspector" aria-live="polite">
          {selected ? (
            <Inspector sat={selected} observer={observer} onClose={() => select(null)} />
          ) : (
            <div className="inspector-empty">
              <p className="mono">Click any dot on the globe, search by name or NORAD number, or pick one from the list.</p>
              <div className="legend">
                {COLOR_GROUPS.map((g) => (
                  <div key={g.id} className="legend-row">
                    <i style={{ background: g.color }} />
                    <span>{g.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <footer className="timebar mono">
          <span className="tabular">
            {catalog ? `Orbits: CelesTrak, updated ${ago(catalog.fetchedAt)}` : 'Loading orbital data…'} · <UtcNow />
          </span>
          <span className="layer-toggles">
            {(
              [
                ['orbit', 'Orbit path'],
                ['aurora', 'Aurora forecast'],
                ['events', 'Earth events'],
              ] as const
            ).map(([key, label]) => (
              <label key={key}>
                <input type="checkbox" checked={layers[key]} onChange={(e) => setLayers((l) => ({ ...l, [key]: e.target.checked }))} />
                {label}
              </label>
            ))}
          </span>
        </footer>
      </main>
    </>
  );
}

function UtcNow() {
  useTicker(1);
  // Rendered only after mount so the static HTML and the first client render match
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return <>{mounted ? `${new Date().toISOString().slice(11, 19)} UTC` : '\u00a0'}</>;
}

function Browse(props: {
  catalog: Catalog;
  query: string;
  setQuery: (q: string) => void;
  hidden: Set<string>;
  setHidden: (s: Set<string>) => void;
  selectedNorad: number | null;
  onSelect: (n: number) => void;
  onHover: (s: SatelliteRecord | null) => void;
}) {
  const { catalog, query, setQuery, hidden, setHidden, selectedNorad, onSelect, onHover } = props;

  const counts = useMemo(() => {
    const m = new Map<string, number>();
    for (const s of catalog.sats) m.set(s.category, (m.get(s.category) ?? 0) + 1);
    return m;
  }, [catalog]);

  const results = useMemo(() => {
    const q = query.trim().toUpperCase();
    if (!q) return null;
    const asNum = Number(q);
    return catalog.sats
      .filter((s) => (asNum && s.norad === asNum) || s.name.includes(q) || s.intlId === q)
      .slice(0, MAX_RESULTS);
  }, [catalog, query]);

  const notable = useMemo(
    () => NOTABLE.map((n) => ({ sat: catalog.byNorad.get(n.norad), note: n.note })).filter((n) => n.sat) as { sat: SatelliteRecord; note: string }[],
    [catalog],
  );
  const bright = useMemo(() => catalog.sats.filter((s) => s.visual && !NOTABLE.some((n) => n.norad === s.norad)), [catalog]);

  const toggle = (c: string) => {
    const next = new Set(hidden);
    if (next.has(c)) next.delete(c);
    else next.add(c);
    setHidden(next);
  };

  return (
    <>
      <input className="search" placeholder="Search name, NORAD or 1998-067A" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search satellites" />
      <div className="category-filters">
        {CATEGORY_ORDER.filter((c) => counts.has(c)).map((c) => (
          <button key={c} className="chip" aria-pressed={!hidden.has(c)} onClick={() => toggle(c)}>
            <i style={{ background: groupOf(c).color }} />
            <span>{c}</span>
            <span className="mono tabular">{num(counts.get(c) ?? 0)}</span>
          </button>
        ))}
      </div>
      <ul className="sat-list" role="listbox" aria-label="Satellites">
        {results ? (
          <>
            <li className="plane-label mono">
              {results.length === MAX_RESULTS ? `First ${MAX_RESULTS} matches` : `${results.length} match${results.length === 1 ? '' : 'es'}`}
            </li>
            {results.map((s) => (
              <Row key={s.norad} sat={s} selected={s.norad === selectedNorad} onSelect={onSelect} onHover={onHover} />
            ))}
          </>
        ) : (
          <>
            <li className="plane-label mono">Notable</li>
            {notable.map(({ sat, note }) => (
              <Row key={sat.norad} sat={sat} note={note} selected={sat.norad === selectedNorad} onSelect={onSelect} onHover={onHover} />
            ))}
            <li className="plane-label mono">Brightest in the night sky</li>
            {bright.map((s) => (
              <Row key={s.norad} sat={s} selected={s.norad === selectedNorad} onSelect={onSelect} onHover={onHover} />
            ))}
          </>
        )}
      </ul>
    </>
  );
}

function Row({ sat, note, selected, onSelect, onHover }: { sat: SatelliteRecord; note?: string; selected: boolean; onSelect: (n: number) => void; onHover: (s: SatelliteRecord | null) => void }) {
  return (
    <li>
      <button className="sat-row" role="option" aria-selected={selected} onClick={() => onSelect(sat.norad)} onMouseEnter={() => onHover(sat)} onMouseLeave={() => onHover(null)}>
        <span className="status-dot" style={{ background: groupOf(sat.category).color }} />
        <span className="name">
          {sat.name}
          {note && <small>{note}</small>}
        </span>
        <span className="mono tabular">{sat.norad}</span>
      </button>
    </li>
  );
}

function Overhead({ catalog, observer, overhead, selectedNorad, onSelect }: { catalog: Catalog; observer: Observer | null; overhead: number[]; selectedNorad: number | null; onSelect: (n: number) => void }) {
  useTicker(0.5);
  if (!observer) {
    return (
      <div className="rail-section">
        <p className="mono muted">Set your location to see which satellites are above your horizon right now.</p>
        <LocationControl />
      </div>
    );
  }
  const now = new Date();
  const rows = overhead.slice(0, 60).map((i) => {
    const sat = catalog.sats[i];
    const look = lookAngles(satrecFor(sat), observer, now);
    return { sat, look };
  });
  return (
    <>
      <div className="rail-section">
        <LocationControl compact />
      </div>
      <ul className="sat-list" role="listbox" aria-label="Satellites above you">
        <li className="plane-label mono">
          {num(overhead.length)} above 10° right now{overhead.length > 60 ? ' · highest 60' : ''}
        </li>
        {rows.map(({ sat, look }) => (
          <li key={sat.norad}>
            <button className="sat-row" role="option" aria-selected={sat.norad === selectedNorad} onClick={() => onSelect(sat.norad)}>
              <span className="status-dot" style={{ background: groupOf(sat.category).color }} />
              <span className="name">
                {sat.name}
                <small>{sat.category}</small>
              </span>
              <span className="mono tabular">{look ? `${num(look.el)}° ${compass(look.az)}` : '–'}</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

function Inspector({ sat, observer, onClose }: { sat: SatelliteRecord; observer: Observer | null; onClose: () => void }) {
  useTicker(4);
  const now = new Date();
  const rec = satrecFor(sat);
  const pv = propagate(rec, now);
  const geo = pv ? eciToGeodetic(pv.position, gstime(now)) : null;
  const speed = pv ? Math.hypot(pv.velocity.x, pv.velocity.y, pv.velocity.z) : null;
  const sunlit = pv ? isSunlit(pv.position, sunEci(now)) : null;
  const { apogee, perigee } = apsides(sat);
  const year = launchYear(sat);
  const epochAgeH = (now.getTime() - new Date(sat.epoch + (sat.epoch.endsWith('Z') ? '' : 'Z')).getTime()) / 3_600_000;

  return (
    <>
      <div className="inspector-head">
        <div className="row mono">
          <span>
            {sat.category} · {ORBIT_CLASS(sat)}
          </span>
          <button className="mono link-button" onClick={onClose} aria-label="Close">
            Close ✕
          </button>
        </div>
        <h2 className="sat-title">{sat.name}</h2>
        <div className="mono muted tabular">
          NORAD {sat.norad} · {sat.intlId}
          {year ? ` · launched ${year}` : ''}
        </div>
      </div>
      {!pv && <p className="inspector-empty mono">The orbit model can’t place this object right now (it may have re-entered).</p>}
      {pv && geo && (
        <dl className="readouts">
          <Readout label="Altitude" value={num(geo.height, 0)} unit="km" />
          <Readout label="Speed" value={num(speed!, 2)} unit="km/s" />
          <Readout label="Latitude" value={latStr(degreesLat(geo.latitude))} />
          <Readout label="Longitude" value={lonStr(degreesLong(geo.longitude))} />
          <Readout label="Period" value={num(periodMinutes(sat), 1)} unit="min" />
          <Readout label="Inclination" value={num(sat.inclination, 1)} unit="°" />
          <Readout label="Perigee / apogee" value={`${num(perigee)} / ${num(apogee)}`} unit="km" />
          <Readout label="Sunlight" value={sunlit ? 'Sunlit' : 'In Earth’s shadow'} />
        </dl>
      )}
      {pv && <Passes sat={sat} observer={observer} />}
      {pv && <GroundTrack sat={sat} observer={observer} />}
      <p className="inspector-foot mono muted">Orbit data epoch {num(epochAgeH, 0)} h old · position computed live with SGP4</p>
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

function Passes({ sat, observer }: { sat: SatelliteRecord; observer: Observer | null }) {
  const [minuteKey, setMinuteKey] = useState(() => Math.floor(Date.now() / 60_000));
  useEffect(() => {
    const id = setInterval(() => setMinuteKey(Math.floor(Date.now() / 60_000)), 15_000);
    return () => clearInterval(id);
  }, []);

  const result = useMemo(() => {
    if (!observer) return null;
    const rec = satrecFor(sat);
    const from = new Date(minuteKey * 60_000);
    // Geostationary satellites don't rise or set: they hang at one spot in your sky
    if (sat.meanMotion < 1.1) return { fixed: lookAngles(rec, observer, from) };
    return { passes: predictPasses(rec, observer, from, 72, 10, 8) };
  }, [sat, observer, minuteKey]);

  return (
    <div className="passes">
      <div className="track-head mono">
        <span>Passes over you</span>
        <span>Next 3 days</span>
      </div>
      <LocationControl compact />
      {result?.fixed && (
        <p className="mono muted passes-note">
          {result.fixed.el > 0
            ? `Fixed in your sky at ${num(result.fixed.el)}° elevation, ${num(result.fixed.az)}° (${compass(result.fixed.az)}). Point a dish here.`
            : 'Below your horizon; this geostationary satellite never rises for you.'}
        </p>
      )}
      {result?.passes && result.passes.length === 0 && <p className="mono muted passes-note">No passes above 10° in the next 3 days.</p>}
      {result?.passes && result.passes.length > 0 && (
        <table className="pass-table">
          <thead className="mono">
            <tr>
              <th>When</th>
              <th>Max</th>
              <th>Path</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {result.passes.map((p) => (
              <PassRow key={p.rise.getTime()} p={p} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function PassRow({ p }: { p: Pass }) {
  const mins = Math.round((p.set.getTime() - p.rise.getTime()) / 60_000);
  return (
    <tr>
      <td>
        <span className="tabular">{time(p.rise)}</span>
        <small className="mono">{day(p.rise)} · {mins} min</small>
      </td>
      <td className="tabular">{num(p.maxElevation)}°</td>
      <td className="mono">
        {compass(p.riseAz)} → {compass(p.setAz)}
      </td>
      <td>{p.visible ? <span className="badge-visible mono">Visible</span> : <span className="mono muted">–</span>}</td>
    </tr>
  );
}

const MAP_W = 320;
const MAP_H = 160;
const project = (lat: number, lon: number) => [((lon + 180) / 360) * MAP_W, ((90 - lat) / 180) * MAP_H] as const;

function GroundTrack({ sat, observer }: { sat: SatelliteRecord; observer: Observer | null }) {
  useTicker(0.2);
  const segments = useMemo(() => {
    const rec = satrecFor(sat);
    const now = Date.now();
    const periodMs = periodMinutes(sat) * 60_000;
    const segs: [number, number][][] = [[]];
    let prev: number | null = null;
    for (let i = 0; i <= 200; i++) {
      const d = new Date(now + (i / 200) * periodMs);
      const pv = propagate(rec, d);
      if (!pv) continue;
      const g = eciToGeodetic(pv.position, gstime(d));
      const lon = degreesLong(g.longitude);
      if (prev !== null && Math.abs(lon - prev) > 180) segs.push([]);
      segs[segs.length - 1].push([degreesLat(g.latitude), lon]);
      prev = lon;
    }
    return segs;
    // Recompute each tick so the track starts at the satellite's current position
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sat, Math.floor(Date.now() / 5000)]);

  const here = segments[0]?.[0];
  return (
    <div className="track">
      <div className="track-head mono">
        <span>Ground track</span>
        <span>Next orbit</span>
      </div>
      <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} role="img" aria-label={`Ground track of ${sat.name}`}>
        <image href={asset('/textures/earth_map_640.jpg')} width={MAP_W} height={MAP_H} opacity={0.5} style={{ filter: 'grayscale(1) contrast(1.2)' }} />
        {segments.map((seg, i) => (
          <polyline key={i} points={seg.map(([la, lo]) => project(la, lo).join(',')).join(' ')} fill="none" stroke="#9fdcff" strokeWidth={1} />
        ))}
        {observer && (
          <g transform={`translate(${project(observer.lat, observer.lon).join(',')})`}>
            <path d="M-4 0H4M0 -4V4" stroke="#e8edf5" strokeWidth={1.2} />
          </g>
        )}
        {here && (
          <>
            <circle cx={project(...here)[0]} cy={project(...here)[1]} r={6} fill="none" stroke="#e8edf5" strokeOpacity={0.6} />
            <circle cx={project(...here)[0]} cy={project(...here)[1]} r={2.5} fill="#e8edf5" />
          </>
        )}
      </svg>
    </div>
  );
}
