'use client';

import { useEffect, useMemo, useState } from 'react';
import { WorldMap, type MapMarker } from '@/components/maps/WorldMap';
import { ago, useData } from '@/lib/data';

export interface Launch {
  id: string;
  name: string;
  net: string;
  netPrecision?: string | null;
  windowStart: string | null;
  status: string | null;
  statusName: string | null;
  provider: string | null;
  rocket: string | null;
  mission: string | null;
  missionType: string | null;
  orbit: string | null;
  description: string | null;
  pad: string | null;
  location: string | null;
  country: string | null;
  lat: number | null;
  lon: number | null;
  image: string | null;
  video: string | null;
  webcastLive: boolean;
}

interface LaunchFile {
  source: string;
  fetchedAt: string;
  upcoming: Launch[];
  previous: Launch[];
}

function useNow(ms = 1000) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), ms);
    return () => clearInterval(id);
  }, [ms]);
  return now;
}

/** "T− 2d 04:12:09" before launch, "T+ 00:03:11" after. */
function countdown(target: number, now: number) {
  const diff = target - now;
  const s = Math.floor(Math.abs(diff) / 1000);
  const d = Math.floor(s / 86400);
  const hms = [Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60].map((n) => String(n).padStart(2, '0')).join(':');
  return `T${diff >= 0 ? '−' : '+'} ${d > 0 ? `${d}d ` : ''}${hms}`;
}

const STATUS_TONE: Record<string, 'go' | 'hold' | 'tbd' | 'good' | 'bad'> = {
  Go: 'go',
  'In Flight': 'go',
  TBC: 'tbd',
  TBD: 'tbd',
  Hold: 'hold',
  Success: 'good',
  Failure: 'bad',
  'Partial Failure': 'bad',
};

/** Is the launch time known to the hour or better? Coarse dates are placeholders like "December". */
const exact = (l: Launch) => !l.netPrecision || ['Second', 'Minute', 'Hour'].includes(l.netPrecision);

function when(l: Launch) {
  const d = new Date(l.net);
  const p = l.netPrecision ?? 'Second';
  if (p === 'Year') return `Sometime in ${d.getUTCFullYear()}`;
  if (p === 'Half') return `${d.getUTCMonth() < 6 ? 'H1' : 'H2'} ${d.getUTCFullYear()}`;
  if (p === 'Quarter') return `Q${Math.floor(d.getUTCMonth() / 3) + 1} ${d.getUTCFullYear()}`;
  if (p === 'Month') return d.toLocaleDateString([], { month: 'long', year: 'numeric', timeZone: 'UTC' });
  if (p === 'Day') return d.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' });
  return d.toLocaleString([], { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}

export function LaunchesApp() {
  const state = useData<LaunchFile>('launches.json');
  const now = useNow();
  const [hover, setHover] = useState<string | null>(null);

  const { upcoming, recent } = useMemo(() => {
    if (state.status !== 'ready') return { upcoming: [], recent: [] };
    const cutoff = Date.now() - 2 * 3_600_000;
    const { upcoming: up, previous } = state.data;
    // The feed keeps a launch in "upcoming" for a while after liftoff; treat those as recent
    const done = up.filter((l) => new Date(l.net).getTime() < cutoff);
    return {
      upcoming: up.filter((l) => new Date(l.net).getTime() >= cutoff),
      recent: [...done, ...previous]
        .filter((l, i, arr) => arr.findIndex((x) => x.id === l.id) === i)
        .sort((a, b) => (a.net < b.net ? 1 : -1))
        .slice(0, 8),
    };
  }, [state]);

  if (state.status === 'loading') return <main className="page"><p className="mono muted">Loading launch schedule…</p></main>;
  if (state.status === 'error') return <main className="page"><p className="mono form-error">Could not load launches: {state.error}</p></main>;

  const next = upcoming.find(exact) ?? upcoming[0];

  return (
    <main className="page">
      <header className="page-head">
        <span className="mono kicker">Launch schedule</span>
        <h1>Every rocket launch, worldwide.</h1>
        <p className="lede">
          Upcoming orbital launches from every provider and spaceport, in your local time. Updated every three hours from Launch Library 2.
        </p>
      </header>

      {next && (
        <section className="next-launch" aria-labelledby="next-launch">
          {next.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="next-image" src={next.image} alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
          )}
          <div className="next-body">
            <div className="mono row-meta">
              <span>Next launch</span>
              <StatusBadge launch={next} />
            </div>
            <h2 id="next-launch">{next.mission ?? next.name}</h2>
            {exact(next) && <div className="countdown tabular" aria-live="off">{countdown(new Date(next.net).getTime(), now)}</div>}
            <dl className="spec">
              <div><dt className="mono">Rocket</dt><dd>{next.rocket ?? '–'}</dd></div>
              <div><dt className="mono">Provider</dt><dd>{next.provider ?? '–'}</dd></div>
              <div><dt className="mono">Launch site</dt><dd>{next.location ?? next.pad ?? '–'}</dd></div>
              <div><dt className="mono">Liftoff (local)</dt><dd>{when(next)}</dd></div>
            </dl>
            {next.description && <p className="next-desc">{next.description}</p>}
            {next.video && (
              <a className="button mono" href={next.video} target="_blank" rel="noreferrer">
                {next.webcastLive ? 'Watch live' : 'Webcast'} <span aria-hidden>→</span>
              </a>
            )}
          </div>
        </section>
      )}

      <section className="launch-map-wrap" aria-label="Launch sites">
        <WorldMap
          label="Map of upcoming launch sites"
          markers={siteMarkers(upcoming)}
          active={hover ? siteKeyFor(upcoming, hover) : null}
          onActive={(key) => setHover(key ? upcoming.find((l) => siteKey(l) === key)?.id ?? null : null)}
        />
      </section>

      <section aria-labelledby="upcoming">
        <div className="section-head">
          <h2 id="upcoming">Upcoming</h2>
          <span className="mono muted">{upcoming.length} scheduled</span>
        </div>
        <ol className="launch-list">
          {upcoming.map((l) => (
            <LaunchRow key={l.id} l={l} now={now} active={hover === l.id} onHover={setHover} />
          ))}
        </ol>
      </section>

      <section aria-labelledby="recent">
        <div className="section-head">
          <h2 id="recent">Recent</h2>
        </div>
        <ol className="launch-list">
          {recent.map((l) => (
            <LaunchRow key={l.id} l={l} now={now} active={hover === l.id} onHover={setHover} past />
          ))}
        </ol>
      </section>

      <p className="mono muted source">
        Data: {state.data.source} · updated {ago(state.data.fetchedAt, now)}
      </p>
    </main>
  );
}

function StatusBadge({ launch }: { launch: Launch }) {
  const tone = STATUS_TONE[launch.status ?? ''] ?? 'tbd';
  return (
    <span className="status-badge mono" data-tone={tone} title={launch.statusName ?? undefined}>
      {launch.webcastLive ? 'Live now' : launch.status ?? 'TBD'}
    </span>
  );
}

function LaunchRow({ l, now, active, onHover, past = false }: { l: Launch; now: number; active: boolean; onHover: (id: string | null) => void; past?: boolean }) {
  return (
    <li className="launch-row" data-active={active} onMouseEnter={() => onHover(l.id)} onMouseLeave={() => onHover(null)}>
      <div className="launch-when">
        <span className="tabular">{when(l)}</span>
        {!past && exact(l) && <small className="mono tabular">{countdown(new Date(l.net).getTime(), now)}</small>}
        {!past && !exact(l) && <small className="mono">Date not yet set</small>}
      </div>
      <div className="launch-what">
        <strong>{l.mission ?? l.name}</strong>
        <span className="mono muted">
          {[l.rocket, l.provider].filter(Boolean).join(' · ')}
          {l.orbit ? ` · ${l.orbit}` : ''}
        </span>
      </div>
      <div className="launch-where mono muted">{l.location ?? l.pad}</div>
      <div className="launch-status">
        <StatusBadge launch={l} />
        {l.video && !past && (
          <a className="mono link-button" href={l.video} target="_blank" rel="noreferrer">
            Watch →
          </a>
        )}
      </div>
    </li>
  );
}

const siteKey = (l: Launch) => (l.lat == null || l.lon == null ? null : `${l.lat.toFixed(1)},${l.lon.toFixed(1)}`);
const siteKeyFor = (launches: Launch[], id: string) => {
  const l = launches.find((x) => x.id === id);
  return l ? siteKey(l) : null;
};

/** One marker per launch site, sized by how many launches are queued there. */
function siteMarkers(launches: Launch[]): MapMarker[] {
  const sites = new Map<string, { l: Launch; n: number }>();
  for (const l of launches) {
    const key = siteKey(l);
    if (!key) continue;
    const s = sites.get(key);
    if (s) s.n++;
    else sites.set(key, { l, n: 1 });
  }
  return [...sites.entries()].map(([key, { l, n }]) => ({
    id: key,
    lat: l.lat!,
    lon: l.lon!,
    color: '#9fdcff',
    r: 3 + Math.min(5, n),
    title: l.location ?? l.pad ?? 'Launch site',
    detail: `${n} upcoming · next: ${l.mission ?? l.name}`,
  }));
}
