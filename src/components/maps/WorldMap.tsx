'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { geoEqualEarth, geoGraticule10, geoPath, geoCircle } from 'd3-geo';
import { loadWorld, subsolarPoint, type World } from '@/lib/geo';

export interface MapMarker {
  id: string;
  lat: number;
  lon: number;
  color: string;
  /** Marker radius in px. */
  r?: number;
  title: string;
  detail?: string;
}

const W = 960;
const H = 470;

/**
 * Equal Earth projection (areas stay true, shapes stay pleasant) with
 * Natural Earth coastlines, borders, graticule and the live night side.
 */
export function WorldMap({
  markers,
  active,
  onActive,
  label,
  night = true,
}: {
  markers: MapMarker[];
  active?: string | null;
  onActive?: (id: string | null) => void;
  label: string;
  night?: boolean;
}) {
  const [world, setWorld] = useState<World | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadWorld().then(setWorld, () => undefined);
  }, []);

  const { path, projection, sphere, graticule, nightShapes } = useMemo(() => {
    const projection = geoEqualEarth().fitExtent(
      [
        [8, 8],
        [W - 8, H - 8],
      ],
      { type: 'Sphere' },
    );
    const path = geoPath(projection);
    const [lon, lat] = subsolarPoint();
    const anti: [number, number] = [lon + 180, -lat];
    // Night as nested circles around the anti-solar point: civil, nautical, astronomical twilight
    const nightShapes = [90, 96, 102, 108].map((r) => path(geoCircle().center(anti).radius(r)())!);
    return { path, projection, sphere: path({ type: 'Sphere' })!, graticule: path(geoGraticule10())!, nightShapes };
  }, []);

  const current = active ?? hover;
  const shown = markers.find((m) => m.id === current);
  const pos = shown ? projection([shown.lon, shown.lat]) : null;

  return (
    <div className="world-map-wrap" ref={wrap}>
      <svg className="world-map-svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label}>
        <defs>
          <radialGradient id="ocean" cx="50%" cy="45%" r="70%">
            <stop offset="0%" stopColor="#0b1424" />
            <stop offset="100%" stopColor="#060a13" />
          </radialGradient>
          <clipPath id="sphere-clip">
            <path d={sphere} />
          </clipPath>
        </defs>
        <path d={sphere} fill="url(#ocean)" />
        <path d={graticule} fill="none" stroke="rgb(232 237 245 / 0.06)" strokeWidth={0.6} />
        {world && (
          <>
            <path d={path(world.land)!} fill="#172133" />
            <path d={path(world.borders)!} fill="none" stroke="rgb(232 237 245 / 0.12)" strokeWidth={0.5} />
            <path d={path(world.land)!} fill="none" stroke="rgb(232 237 245 / 0.28)" strokeWidth={0.6} />
          </>
        )}
        {night && (
          <g clipPath="url(#sphere-clip)" pointerEvents="none">
            {nightShapes.map((d, i) => (
              <path key={i} d={d} fill="#000" opacity={0.14} />
            ))}
          </g>
        )}
        <path d={sphere} fill="none" stroke="rgb(232 237 245 / 0.22)" />
        {markers.map((m) => {
          const p = projection([m.lon, m.lat]);
          if (!p) return null;
          const on = m.id === current;
          const r = m.r ?? 4;
          return (
            <g
              key={m.id}
              transform={`translate(${p[0]},${p[1]})`}
              onMouseEnter={() => (setHover(m.id), onActive?.(m.id))}
              onMouseLeave={() => (setHover(null), onActive?.(null))}
            >
              <circle r={Math.max(10, r + 6)} fill="transparent" />
              <circle r={r + (on ? 7 : 4)} fill={m.color} opacity={on ? 0.28 : 0.14} />
              <circle r={r} fill={m.color} stroke="#05080f" strokeWidth={1.5} />
              {on && <circle r={r + 10} fill="none" stroke="#e8edf5" strokeOpacity={0.6} />}
            </g>
          );
        })}
      </svg>
      {shown && pos && (
        <div
          className="map-tip"
          style={{ left: `${(pos[0] / W) * 100}%`, top: `${(pos[1] / H) * 100}%` }}
          role="status"
        >
          <strong>{shown.title}</strong>
          {shown.detail && <span className="mono">{shown.detail}</span>}
        </div>
      )}
    </div>
  );
}
