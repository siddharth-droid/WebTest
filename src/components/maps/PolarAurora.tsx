'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { geoCircle, geoGraticule, geoOrthographic, geoPath } from 'd3-geo';
import { loadWorld, sampleAurora, subsolarPoint, type World } from '@/lib/geo';

const SIZE = 560;

/**
 * NOAA's OVATION aurora forecast seen from above the pole, the way the oval
 * actually sits around the Earth, with the live night side shaded so you can
 * see where it is dark enough to see it.
 */
export function PolarAurora({
  grid,
  hemisphere,
  observer,
}: {
  grid: Uint8Array;
  hemisphere: 'north' | 'south';
  observer: { lat: number; lon: number } | null;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [world, setWorld] = useState<World | null>(null);
  useEffect(() => {
    loadWorld().then(setWorld, () => undefined);
  }, []);

  const projection = useMemo(
    () =>
      geoOrthographic()
        .rotate([0, hemisphere === 'north' ? -90 : 90, 0])
        // Show down to ~35° latitude
        .clipAngle(55)
        .fitExtent(
          [
            [10, 10],
            [SIZE - 10, SIZE - 10],
          ],
          geoCircle()
            .center([0, hemisphere === 'north' ? 90 : -90])
            .radius(55)(),
        ),
    [hemisphere],
  );

  useEffect(() => {
    const c = canvas.current;
    if (!c) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    c.width = SIZE * dpr;
    c.height = SIZE * dpr;
    const ctx = c.getContext('2d')!;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const path = geoPath(projection, ctx);

    ctx.clearRect(0, 0, SIZE, SIZE);
    // Ocean disc
    ctx.beginPath();
    path({ type: 'Sphere' });
    ctx.fillStyle = '#070b15';
    ctx.fill();

    if (world) {
      ctx.beginPath();
      path(world.land);
      ctx.fillStyle = '#16202f';
      ctx.fill();
      ctx.beginPath();
      path(world.borders);
      ctx.strokeStyle = 'rgba(232,237,245,0.10)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.beginPath();
      path(world.land);
      ctx.strokeStyle = 'rgba(232,237,245,0.26)';
      ctx.lineWidth = 0.6;
      ctx.stroke();
    }

    // Live night side: nested twilight bands around the anti-solar point
    const [slon, slat] = subsolarPoint();
    for (const r of [90, 96, 102, 108]) {
      ctx.beginPath();
      path(geoCircle().center([slon + 180, -slat]).radius(r)());
      ctx.fillStyle = 'rgba(0,0,0,0.16)';
      ctx.fill();
    }

    ctx.beginPath();
    path(geoGraticule().step([30, 10])());
    ctx.strokeStyle = 'rgba(232,237,245,0.06)';
    ctx.lineWidth = 0.6;
    ctx.stroke();

    // Aurora probability: sample per pixel (at half resolution), then blur and screen on top
    const step = 2;
    const n = SIZE / step;
    const off = document.createElement('canvas');
    off.width = n;
    off.height = n;
    const octx = off.getContext('2d')!;
    const img = octx.createImageData(n, n);
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        const ll = projection.invert!([x * step + step / 2, y * step + step / 2]);
        if (!ll) continue;
        const p = sampleAurora(grid, ll[1], ll[0]) / 100;
        if (p <= 0) continue;
        const o = (y * n + x) * 4;
        // One hue (aurora green), brighter and more opaque as probability rises; a smooth
        // ramp from zero avoids a hard, stair-stepped outline
        const t = Math.min(1, p / 0.7);
        const fade = Math.min(1, p / 0.12);
        img.data[o] = Math.round(40 + 120 * t * t);
        img.data[o + 1] = Math.round(170 + 85 * t);
        img.data[o + 2] = Math.round(110 + 40 * t);
        img.data[o + 3] = Math.round(255 * fade * fade * Math.min(1, 0.25 + t * 0.85));
      }
    }
    octx.putImageData(img, 0, 0);
    ctx.save();
    ctx.beginPath();
    path({ type: 'Sphere' });
    ctx.clip();
    ctx.globalCompositeOperation = 'screen';
    ctx.filter = 'blur(5px)';
    ctx.drawImage(off, 0, 0, SIZE, SIZE);
    ctx.filter = 'none';
    ctx.globalAlpha = 0.9;
    ctx.drawImage(off, 0, 0, SIZE, SIZE);
    ctx.restore();

    ctx.beginPath();
    path({ type: 'Sphere' });
    ctx.strokeStyle = 'rgba(232,237,245,0.22)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }, [grid, projection, world]);

  const obs = observer ? projection([observer.lon, observer.lat]) : null;
  const visible = obs && (hemisphere === 'north' ? observer!.lat > 30 : observer!.lat < -30);

  return (
    <figure className="polar">
      <div className="polar-canvas">
        <canvas ref={canvas} style={{ width: '100%', height: 'auto', aspectRatio: '1' }} aria-label={`Aurora probability over the ${hemisphere} pole`} />
        {visible && obs && <span className="map-pin" style={{ left: `${(obs[0] / SIZE) * 100}%`, top: `${(obs[1] / SIZE) * 100}%` }} title="You" />}
      </div>
      <figcaption className="mono">{hemisphere === 'north' ? 'Northern lights' : 'Southern lights'}</figcaption>
    </figure>
  );
}
