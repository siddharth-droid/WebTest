'use client';

import { useEffect, useRef } from 'react';
import { asset } from '@/lib/asset';
import { story, type HotspotKey } from '@/lib/story';

interface Track {
  frames: number;
  width: number;
  height: number;
  /** Per label, per frame: position in the frame (0–1), or null when behind the camera. */
  labels: Record<HotspotKey, ([number, number] | null)[]>;
  /** Per frame: where the subject is, so narrow screens can crop around it. */
  focus: [number, number][];
}

const LABELS: { key: HotspotKey; title: string; detail: string; side: 'left' | 'right'; v: 'up' | 'down' }[] = [
  { key: 'a', title: 'Solar arrays', detail: 'Turn to track the Sun', side: 'left', v: 'up' },
  { key: 'b', title: 'Cupola', detail: 'Seven-window observatory', side: 'right', v: 'down' },
  { key: 'c', title: 'Kibō', detail: 'Japan’s laboratory module', side: 'right', v: 'up' },
];

const pad = (n: number) => String(n).padStart(3, '0');

/**
 * Coarse to fine: every 16th frame first, then every 8th, 4th, 2nd, then the
 * rest, so scrubbing works (a little steppy) long before everything arrives.
 */
function loadOrder(count: number) {
  const seen = new Set<number>();
  const order: number[] = [];
  for (const step of [16, 8, 4, 2, 1]) {
    for (let i = 0; i < count; i += step) {
      if (seen.has(i)) continue;
      seen.add(i);
      order.push(i);
    }
  }
  if (!seen.has(count - 1)) order.push(count - 1);
  return order;
}

/**
 * The landing's "3D": a camera move pre-rendered in Blender (scripts/landing),
 * drawn to one canvas as the reader scrolls. The browser decodes images and
 * nothing else, so it stays smooth on any machine.
 */
export function FrameSequence({ onProgress }: { onProgress?: (loaded: number) => void }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const labels = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = canvas.current!;
    const ctx = el.getContext('2d', { alpha: false })!;
    let cancelled = false;
    let raf = 0;
    let drawn = -1;
    let dirty = true;
    let track: Track | null = null;
    const images: (HTMLImageElement | null)[] = [];

    // Smaller frames for small or data-saving screens
    const saveData = (navigator as { connection?: { saveData?: boolean } }).connection?.saveData;
    const need = window.innerWidth * Math.min(window.devicePixelRatio || 1, 2);
    const width = saveData ? 960 : need > 1700 ? 2560 : need > 1000 ? 1600 : 960;
    const dir = asset(`/landing/${width}/`);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      el.width = Math.round(el.clientWidth * dpr);
      el.height = Math.round(el.clientHeight * dpr);
      // Resizing resets the context, so set smoothing each time
      ctx.imageSmoothingQuality = 'high';
      dirty = true;
    };
    resize();
    window.addEventListener('resize', resize);

    /** The loaded frame nearest to i. */
    const nearest = (i: number) => {
      for (let d = 0; d < images.length; d++) {
        if (images[i - d]) return i - d;
        if (images[i + d]) return i + d;
      }
      return -1;
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!track) return;
      const want = Math.max(0, Math.min(track.frames - 1, Math.round(story.frame)));
      const i = nearest(want);
      // Labels follow every frame; the picture only redraws when it changes
      place(i < 0 ? want : i);
      if (i < 0 || (i === drawn && !dirty)) return;
      draw(images[i]!, i);
      drawn = i;
      dirty = false;
    };

    // Cover the canvas; on screens narrower than the render, crop toward the subject
    let view = { scale: 1, x: 0, y: 0 };
    const fit = (i: number) => {
      const t = track!;
      const cw = el.width, ch = el.height;
      const scale = Math.max(cw / t.width, ch / t.height);
      const w = t.width * scale, h = t.height * scale;
      const centred = (cw - w) / 2;
      const [fx] = t.focus[i] ?? [0.5, 0.5];
      const narrow = Math.min(1, Math.max(0, (t.width / t.height - cw / ch) / (t.width / t.height - 0.6)));
      const towardSubject = Math.min(0, Math.max(cw - w, cw / 2 - fx * w));
      view = { scale, x: centred + (towardSubject - centred) * narrow, y: (ch - h) / 2 };
    };

    const draw = (img: HTMLImageElement, i: number) => {
      fit(i);
      const t = track!;
      ctx.drawImage(img, view.x, view.y, t.width * view.scale, t.height * view.scale);
    };

    const place = (i: number) => {
      const t = track!;
      const dpr = el.width / el.clientWidth || 1;
      fit(i);
      LABELS.forEach((l, k) => {
        const node = labels.current[k];
        const p = t.labels[l.key]?.[i];
        if (!node) return;
        const v = story.labels[l.key];
        if (!p || v < 0.01) {
          node.style.opacity = '0';
          return;
        }
        const x = (view.x + p[0] * t.width * view.scale) / dpr;
        const y = (view.y + p[1] * t.height * view.scale) / dpr;
        node.style.opacity = String(v);
        node.style.transform = `translate3d(${x}px, ${y + (1 - v) * 8}px, 0)`;
      });
    };

    (async () => {
      const res = await fetch(asset('/landing/track.json'));
      track = (await res.json()) as Track;
      if (cancelled) return;
      // Positions are in the render's own grid (track.width × height), whichever image size loads
      const order = loadOrder(track.frames);
      images.length = track.frames;
      images.fill(null);
      let loaded = 0;
      let next = 0;
      const worker = async () => {
        while (!cancelled && next < order.length) {
          const i = order[next++];
          const img = new Image();
          img.decoding = 'async';
          img.src = `${dir}f_${pad(i)}.webp`;
          try {
            await img.decode();
          } catch {
            continue;
          }
          if (cancelled) return;
          images[i] = img;
          loaded++;
          onProgress?.(loaded / order.length);
        }
      };
      raf = requestAnimationFrame(tick);
      // A few parallel requests: enough to fill the pipe, few enough to keep order
      await Promise.all([worker(), worker(), worker(), worker()]);
    })().catch(() => undefined);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [onProgress]);

  return (
    <div className="stage">
      <canvas ref={canvas} className="sequence" aria-label="The International Space Station over Earth" />
      {LABELS.map((l, k) => (
        <div
          key={l.key}
          ref={(n) => {
            labels.current[k] = n;
          }}
          className="sequence-label"
          style={{ opacity: 0 }}
        >
          <div className="hotspot" data-side={l.side} data-v={l.v}>
            <span className="hotspot-ring" />
            <span className="hotspot-leader" />
            <div className="hotspot-copy">
              <strong>{l.title}</strong>
              <span>{l.detail}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
