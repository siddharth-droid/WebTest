'use client';

import { useEffect, useRef, useState } from 'react';
import { useProgress } from '@react-three/drei';
import gsap from 'gsap';

const COUNT = [
  { text: '3', bg: 'var(--red)', fg: 'var(--cream)' },
  { text: '2', bg: 'var(--mustard)', fg: 'var(--ink)' },
  { text: '1', bg: 'var(--teal)', fg: 'var(--ink)' },
  { text: 'Lift off', bg: 'var(--cream)', fg: 'var(--red)' },
];

/**
 * The opening titles, cut like a 1970s anime opener: hard colour panels and
 * slammed type counting down, then the show card. It plays while the scene
 * loads and holds on the card ("tuning in") until everything is ready.
 * Click or press any key to skip.
 */
export function TitleSequence({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const { progress, active } = useProgress();
  const [played, setPlayed] = useState(false);
  const [done, setDone] = useState(false);
  const loaded = !active && progress >= 100;

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPlayed(true);
      return;
    }
    const tl = gsap.timeline({ onComplete: () => setPlayed(true) });
    el.querySelectorAll<HTMLElement>('.ts-panel').forEach((panel, i) => {
      const word = panel.querySelector('span');
      tl.set(panel, { autoAlpha: 1, clipPath: i % 2 ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)' }, i * 0.42)
        .to(panel, { clipPath: 'inset(0 0% 0 0%)', duration: 0.16, ease: 'power4.out' }, i * 0.42)
        .from(word, { scale: 2.4, duration: 0.26, ease: 'expo.out' }, i * 0.42 + 0.04)
        .set(panel, { autoAlpha: 0 }, i * 0.42 + 0.42);
    });
    tl.from(el.querySelectorAll('.ts-card > *'), { y: 24, opacity: 0, stagger: 0.08, duration: 0.6, ease: 'expo.out' });
    const skip = () => tl.progress(1);
    window.addEventListener('keydown', skip, { once: true });
    el.addEventListener('pointerdown', skip, { once: true });
    return () => {
      tl.kill();
      window.removeEventListener('keydown', skip);
    };
  }, []);

  // Reveal once the titles have played and the scene is loaded (or after a generous wait)
  useEffect(() => {
    if (!played || done) return;
    const id = setTimeout(
      () => {
        setDone(true);
        onDone();
      },
      loaded ? 350 : 15000,
    );
    return () => clearTimeout(id);
  }, [played, loaded, done, onDone]);

  return (
    <div ref={root} className="title-seq" data-done={done} aria-hidden={done}>
      {COUNT.map((c) => (
        <div key={c.text} className="ts-panel" style={{ background: c.bg, color: c.fg }}>
          <span>{c.text}</span>
        </div>
      ))}
      <div className="ts-card">
        <p className="ts-kicker mono">A live broadcast from low Earth orbit</p>
        <h1 className="ts-title">Orbita</h1>
        <p className="ts-session">Session #01</p>
        <p className="ts-tuning mono tabular">{loaded ? 'Signal locked' : `Tuning in… ${String(Math.round(progress)).padStart(2, '0')}%`}</p>
      </div>
    </div>
  );
}
