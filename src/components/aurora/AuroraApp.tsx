'use client';

import { useMemo, useState } from 'react';
import { PolarAurora } from '@/components/maps/PolarAurora';
import { ago, useData } from '@/lib/data';
import { useObserver } from '@/lib/observer';
import { LocationControl } from '@/components/ui/LocationControl';

interface KpPoint {
  time: string;
  kp: number;
  scale?: string | null;
}
interface WeatherFile {
  source: string;
  fetchedAt: string;
  observed: KpPoint[];
  forecast: KpPoint[];
  aurora: { observationTime: string; forecastTime: string; width: number; height: number; grid: string } | null;
}

/** NOAA geomagnetic storm scale. */
function stormLevel(kp: number) {
  if (kp >= 9) return { g: 'G5', label: 'Extreme storm', tone: 'critical' };
  if (kp >= 8) return { g: 'G4', label: 'Severe storm', tone: 'critical' };
  if (kp >= 7) return { g: 'G3', label: 'Strong storm', tone: 'serious' };
  if (kp >= 6) return { g: 'G2', label: 'Moderate storm', tone: 'serious' };
  if (kp >= 5) return { g: 'G1', label: 'Minor storm', tone: 'warning' };
  if (kp >= 4) return { g: null, label: 'Active', tone: 'neutral' };
  return { g: null, label: 'Quiet', tone: 'neutral' };
}

/**
 * Rough equatorward edge of aurora visibility (geomagnetic latitude) by Kp,
 * from NOAA's Kp-to-aurora-latitude guidance.
 */
const VIEW_LINE = [66.5, 64.5, 62.4, 60.4, 58.3, 56.3, 54.2, 52.2, 50.1, 48.1];

function parseGrid(a: NonNullable<WeatherFile['aurora']>) {
  return Uint8Array.from(atob(a.grid), (c) => c.charCodeAt(0));
}

/** Probability (%) at a lat/lon from the OVATION grid (lon 0..359, lat −90..90). */
function probAt(grid: Uint8Array, lat: number, lon: number) {
  const row = Math.round(lat) + 90;
  const col = ((Math.round(lon) % 360) + 360) % 360;
  return grid[row * 360 + col] ?? 0;
}

const fmtTime = (iso: string) => new Date(iso + (iso.endsWith('Z') ? '' : 'Z')).toLocaleString([], { weekday: 'short', hour: '2-digit', minute: '2-digit' });

export function AuroraApp() {
  const state = useData<WeatherFile>('space-weather.json');
  const { observer } = useObserver();

  if (state.status === 'loading') return <main className="page"><p className="mono muted">Loading space weather…</p></main>;
  if (state.status === 'error') return <main className="page"><p className="mono form-error">Could not load space weather: {state.error}</p></main>;
  const w = state.data;
  const latest = w.observed[w.observed.length - 1];
  const peakForecast = w.forecast.reduce((m, p) => Math.max(m, p.kp), 0);
  const level = stormLevel(latest.kp);
  const grid = w.aurora ? parseGrid(w.aurora) : null;

  return (
    <main className="page">
      <header className="page-head">
        <span className="mono kicker">Space weather</span>
        <h1>Will there be an aurora tonight?</h1>
        <p className="lede">
          NOAA’s live geomagnetic index and 30-minute aurora forecast, checked against where you are.
        </p>
      </header>

      <section className="stat-row" aria-label="Current conditions">
        <div className="stat">
          <span className="mono muted">Kp index now</span>
          <strong className="tabular">{latest.kp.toFixed(1)}</strong>
          <span className="mono" data-tone={level.tone}>
            {level.g ? `${level.g} · ` : ''}
            {level.label}
          </span>
        </div>
        <div className="stat">
          <span className="mono muted">Peak in next 3 days</span>
          <strong className="tabular">{peakForecast.toFixed(1)}</strong>
          <span className="mono" data-tone={stormLevel(peakForecast).tone}>
            {stormLevel(peakForecast).g ? `${stormLevel(peakForecast).g} · ` : ''}
            {stormLevel(peakForecast).label}
          </span>
        </div>
        <div className="stat">
          <span className="mono muted">Visible down to about</span>
          <strong className="tabular">{VIEW_LINE[Math.min(9, Math.round(latest.kp))].toFixed(0)}°</strong>
          <span className="mono muted">geomagnetic latitude at Kp {Math.round(latest.kp)}</span>
        </div>
      </section>

      <section className="you-panel" aria-labelledby="you">
        <h2 id="you">From your location</h2>
        <LocationControl />
        {observer && grid && <YourChance grid={grid} lat={observer.lat} lon={observer.lon} />}
      </section>

      <section aria-labelledby="kp-chart">
        <div className="section-head">
          <h2 id="kp-chart">Kp index, last 7 days and forecast</h2>
          <span className="mono muted">3-hour intervals · storm level from 5</span>
        </div>
        <KpChart observed={w.observed} forecast={w.forecast} />
      </section>

      {w.aurora && grid && (
        <section aria-labelledby="oval">
          <div className="section-head">
            <h2 id="oval">Aurora probability right now</h2>
            <span className="mono muted">Forecast for {fmtTime(w.aurora.forecastTime)}</span>
          </div>
          <div className="polar-pair">
            <PolarAurora grid={grid} hemisphere="north" observer={observer} />
            <PolarAurora grid={grid} hemisphere="south" observer={observer} />
          </div>
          <div className="map-scale-row mono">
            <span>Chance of aurora overhead</span>
            <i className="aurora-ramp" />
            <span>10% → 90%</span>
            <span className="muted">Shaded: night side right now</span>
          </div>
        </section>
      )}

      <p className="mono muted source">
        Data: {w.source} · updated {ago(w.fetchedAt)}
      </p>
    </main>
  );
}

function YourChance({ grid, lat, lon }: { grid: Uint8Array; lat: number; lon: number }) {
  const overhead = probAt(grid, lat, lon);
  // Aurora high in the sky toward the pole can be seen from several hundred km away
  const dir = lat >= 0 ? 1 : -1;
  let horizon = 0;
  for (let d = 1; d <= 8; d++) horizon = Math.max(horizon, probAt(grid, lat + dir * d, lon));
  const verdict =
    overhead >= 30 ? 'Good chance overhead. Get somewhere dark.' :
    horizon >= 30 ? `Possible low on your ${dir > 0 ? 'northern' : 'southern'} horizon, away from city lights.` :
    horizon >= 10 ? 'Unlikely, but worth a look with a camera on a long exposure.' :
    'Not tonight at your latitude.';
  return (
    <div className="chance">
      <div className="chance-figs">
        <div><span className="mono muted">Overhead</span><strong className="tabular">{overhead}%</strong></div>
        <div><span className="mono muted">{dir > 0 ? 'Northern' : 'Southern'} horizon</span><strong className="tabular">{horizon}%</strong></div>
      </div>
      <p>{verdict}</p>
    </div>
  );
}

const CW = 720;
const CH = 220;
const PAD = { l: 28, r: 8, t: 10, b: 24 };

function KpChart({ observed, forecast }: { observed: KpPoint[]; forecast: KpPoint[] }) {
  const all = useMemo(() => [...observed.map((p) => ({ ...p, f: false })), ...forecast.map((p) => ({ ...p, f: true }))], [observed, forecast]);
  const [hover, setHover] = useState<number | null>(null);
  const bw = (CW - PAD.l - PAD.r) / all.length;
  const y = (kp: number) => PAD.t + (1 - kp / 9) * (CH - PAD.t - PAD.b);
  const h = all[hover ?? -1];

  return (
    <div className="chart">
      <svg viewBox={`0 0 ${CW} ${CH}`} role="img" aria-label="Kp index bar chart" onMouseLeave={() => setHover(null)}>
        {[0, 3, 5, 7, 9].map((k) => (
          <g key={k}>
            <line x1={PAD.l} x2={CW - PAD.r} y1={y(k)} y2={y(k)} stroke={k === 5 ? 'rgb(250 178 25 / 0.55)' : 'rgb(232 237 245 / 0.08)'} strokeDasharray={k === 5 ? '4 3' : undefined} />
            <text x={PAD.l - 8} y={y(k) + 3} textAnchor="end" className="axis">{k}</text>
          </g>
        ))}
        {all.map((p, i) => {
          const x = PAD.l + i * bw;
          const storm = p.kp >= 5;
          const fill = storm ? '#fab219' : '#3987e5';
          return (
            <g key={p.time + i} onMouseEnter={() => setHover(i)}>
              <rect x={x} y={PAD.t} width={bw} height={CH - PAD.t - PAD.b} fill="transparent" />
              <rect
                x={x + 1}
                y={y(Math.max(p.kp, 0.15))}
                width={Math.max(1, bw - 2)}
                height={CH - PAD.b - y(Math.max(p.kp, 0.15))}
                rx={Math.min(2, bw / 4)}
                fill={p.f ? 'none' : fill}
                stroke={p.f ? fill : 'none'}
                strokeWidth={p.f ? 1 : 0}
                opacity={hover === null || hover === i ? 1 : 0.55}
              />
            </g>
          );
        })}
        <line x1={PAD.l + observed.length * bw} x2={PAD.l + observed.length * bw} y1={PAD.t} y2={CH - PAD.b} stroke="rgb(232 237 245 / 0.35)" />
        <text x={PAD.l + observed.length * bw + 6} y={PAD.t + 10} className="axis">Forecast →</text>
        {dayTicks(all, bw).map((t) => (
          <text key={t.x} x={t.x} y={CH - 6} className="axis">
            {t.label}
          </text>
        ))}
      </svg>
      <div className="chart-legend mono">
        <span><i style={{ background: '#3987e5' }} /> Observed</span>
        <span><i style={{ border: '1px solid #3987e5' }} /> Forecast</span>
        <span><i style={{ background: '#fab219' }} /> Storm (Kp ≥ 5)</span>
        {h && (
          <span className="chart-tip tabular">
            {fmtTime(h.time)} · Kp {h.kp.toFixed(2)} {h.f ? '(forecast)' : ''}
          </span>
        )}
      </div>
    </div>
  );
}

/** One label per day boundary, skipping any that would collide or run off the edge. */
function dayTicks(all: KpPoint[], bw: number) {
  const ticks: { x: number; label: string }[] = [];
  all.forEach((p, i) => {
    const d = new Date(p.time + (p.time.endsWith('Z') ? '' : 'Z'));
    if (d.getUTCHours() !== 0) return;
    const x = PAD.l + i * bw;
    if (x > CW - 44 || (ticks.length && x - ticks[ticks.length - 1].x < 56)) return;
    ticks.push({ x, label: d.toLocaleDateString([], { day: 'numeric', month: 'short', timeZone: 'UTC' }) });
  });
  return ticks;
}
