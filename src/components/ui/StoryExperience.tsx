'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { ReactLenis, useLenis, type LenisRef } from 'lenis/react';
import { CHAPTERS, FRAMES_PER_CHAPTER, story } from '@/lib/story';
import { FrameSequence } from '@/components/landing/FrameSequence';
import { useData } from '@/lib/data';
import { useObserver } from '@/lib/observer';
import type { Observer, Pass } from '@/lib/sat/passes';
import { compass } from '@/lib/sat/sun';
import { countdown, useIssNow, useIssRecord, useNextPass, useNow, useShadowChange } from '@/components/landing/live';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/** Share of frames (the coarse pass) that must be in before the page opens. */
const READY_AT = 0.07;

/** Lenis smooth scroll, driven by GSAP's ticker so both share one clock. */
function SmoothScroll() {
  const lenisRef = useRef<LenisRef>(null);
  useLenis(ScrollTrigger.update);
  useEffect(() => {
    const update = (time: number) => lenisRef.current?.lenis?.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(update);
  }, []);
  return <ReactLenis root ref={lenisRef} options={{ autoRaf: false, lerp: 0.085 }} />;
}

export function StoryExperience() {
  const root = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const manifest = useData<{ counts?: { satellites: number; broadband?: number | null; launches: number; events: number } }>('manifest.json');
  const counts = manifest.status === 'ready' ? manifest.data.counts : undefined;

  // Live: where the station is, its next sunset, when you can see it, the next launch
  const now = useNow();
  const rec = useIssRecord();
  const iss = useIssNow(rec, now);
  const shadow = useShadowChange(rec, now);
  const { observer, locate, locating, error: locError } = useObserver();
  const pass = useNextPass(rec, observer);
  const launches = useData<{ upcoming: { net: string; rocket: string; mission: string }[] }>('launches.json');
  const nextLaunch =
    launches.status === 'ready' && now !== null ? launches.data.upcoming.find((l) => Date.parse(l.net) > now) : undefined;

  // Scroll → 3D. One master timeline, scrubbed by scroll position.
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: 'power2.inOut' },
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.1,
          onUpdate: (self) => progress.current && gsap.set(progress.current, { scaleX: self.progress }),
        },
      });

      CHAPTERS.forEach((chapter, i) => {
        if (i === 0) return;
        const at = i - 1;
        // Steady pace through the rendered move: scroll is the playhead
        tl.to(story, { frame: i * FRAMES_PER_CHAPTER, ease: 'none' }, at);
        // Labels fade in as the camera settles on the station and out as it moves on
        if (chapter.labels) {
          const off = Object.fromEntries(Object.keys(chapter.labels).map((k) => [k, 0]));
          tl.to(story.labels, { ...chapter.labels, duration: 0.22, ease: 'power1.out' }, at + 0.72);
          tl.to(story.labels, { ...off, duration: 0.18, ease: 'power1.in' }, at + 1.02);
        }
      });

      // Headlines: words rise out of a mask as each chapter arrives
      gsap.utils.toArray<HTMLElement>('.chapter h2').forEach((h) => {
        const split = SplitText.create(h, { type: 'words', mask: 'words' });
        gsap.from(split.words, {
          yPercent: 110,
          duration: 1,
          stagger: 0.06,
          ease: 'expo.out',
          scrollTrigger: { trigger: h, start: 'top 82%', toggleActions: 'play none none reverse' },
        });
      });

      // Chapter copy: rise in on enter
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(Array.from(el.children).filter((c) => c.tagName !== 'H2'), {
          y: 48,
          opacity: 0,
          duration: 1.1,
          stagger: 0.08,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 78%', toggleActions: 'play none none reverse' },
        });
      });

      // Hero recedes as you leave it
      gsap.to('.hero-title, .hero-foot', {
        yPercent: -30,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom 40%', scrub: true },
      });

      gsap.utils.toArray<HTMLElement>('.chapter').forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 55%',
          end: 'bottom 55%',
          onToggle: (self) => self.isActive && setActive(i),
        });
      });
    },
    { scope: root },
  );

  // Loading: the first, coarse pass of frames opens the page; the rest stream in behind
  const [loaded, setLoaded] = useState(0);
  const [open, setOpen] = useState(false);
  const onProgress = useCallback((p: number) => setLoaded(p), []);
  useEffect(() => {
    if (open) return;
    const id = setTimeout(() => setOpen(true), loaded >= READY_AT ? 200 : 9000);
    return () => clearTimeout(id);
  }, [loaded, open]);

  // Intro: the picture settles in, the headline types itself up letter by letter
  useGSAP(() => {
    if (!open) return;
    const split = SplitText.create('.hero-title .line > span', { type: 'chars', mask: 'chars' });
    gsap
      .timeline()
      .from('.sequence', { scale: 1.08, opacity: 0, duration: 2.4, ease: 'expo.out' }, 0)
      .from(split.chars, { yPercent: 110, duration: 1.1, stagger: 0.025, ease: 'expo.out' }, 0.3)
      .from('.hero-foot > *', { opacity: 0, y: 12, duration: 1, stagger: 0.08, ease: 'power3.out' }, 0.9)
      .from('.site-header, .story-hud', { opacity: 0, duration: 1.2 }, 1.0);
  }, [open]);

  useEffect(() => {
    story.frame = 0;
  }, []);

  return (
    <>
      <SmoothScroll />
      <div className="loader" data-done={open} aria-hidden={open}>
        <div className="loader-inner mono">
          <div className="loader-row">
            <span>Acquiring signal</span>
            <span className="tabular">{String(Math.round(Math.min(1, loaded / READY_AT) * 100)).padStart(3, '0')}</span>
          </div>
          <div className="loader-track">
            <div className="loader-fill" style={{ transform: `scaleX(${Math.min(1, loaded / READY_AT)})` }} />
          </div>
        </div>
      </div>
      <FrameSequence onProgress={onProgress} />

      <div ref={root} className="story" style={{ visibility: open ? 'visible' : 'hidden' }}>
        <section className="chapter hero">
          <h1 className="hero-title">
            <span className="line"><span>Every satellite<span className="punct">.</span></span></span>
            <span className="line"><span>Right now<span className="punct">.</span></span></span>
          </h1>
          <div className="hero-foot">
            <p>
              A live view of everything humanity has in orbit, built entirely on open data from CelesTrak, NASA and NOAA.
            </p>
            <span className="mono tabular">{counts ? `${counts.satellites.toLocaleString('en-US')} objects tracked today` : 'Tracking live'}</span>
            <span className="mono">Scroll to explore</span>
          </div>
        </section>

        <section className="chapter" data-align="left">
          <div className="chapter-copy" data-reveal>
            <div className="chapter-meta mono"><b>02</b><span><i className="live-dot" aria-hidden /> ISS · live</span></div>
            <h2>{iss?.over ? `Right now it’s over ${iss.over}.` : 'Seven people live up there.'}</h2>
            <p>Crewed without a break since November 2000, circling the planet at 7.66 km every second.</p>
            <dl className="readout">
              <div><dt className="mono">Position</dt><dd className="tabular">{iss ? `${fmtLat(iss.lat)}  ${fmtLon(iss.lon)}` : '–'}</dd></div>
              <div><dt className="mono">Altitude</dt><dd className="tabular">{iss ? `${Math.round(iss.alt)} km` : '–'}</dd></div>
            </dl>
            <SeeIt pass={pass} observer={observer} locate={locate} locating={locating} error={locError} />
          </div>
        </section>

        <section className="chapter" data-align="right">
          <div className="chapter-copy" data-reveal>
            <div className="chapter-meta mono"><b>03</b><span>Orbit</span></div>
            <h2>Sixteen sunsets a day.</h2>
            <p>One lap of the planet takes 92 minutes, so the crew crosses into night every 46.</p>
            <dl className="readout">
              <div>
                <dt className="mono">{shadow ? `Next ${shadow.kind} on board` : 'Next sunset on board'}</dt>
                <dd className="tabular big">{shadow && now !== null ? countdown(shadow.at - now) : '–'}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="chapter" data-align="right">
          <div className="chapter-copy" data-reveal>
            <div className="chapter-meta mono"><b>04</b><span>Everything in orbit</span></div>
            <h2>It&rsquo;s getting crowded up there.</h2>
            <p>
              Every dot is a real object we track today
              {counts?.broadband ? <>, and {Math.round((counts.broadband / counts.satellites) * 100)}% of them are broadband internet satellites, almost all launched in the last six years.</> : '.'}
            </p>
            <dl className="readout">
              <div><dt className="mono">Tracked today</dt><dd className="tabular">{counts ? counts.satellites.toLocaleString('en-US') : '–'}</dd></div>
              <div>
                <dt className="mono">Next launch</dt>
                <dd className="tabular">{nextLaunch && now !== null ? `in ${countdown(Date.parse(nextLaunch.net) - now)}` : '–'}</dd>
                {nextLaunch && <Link className="readout-note mono" href="/launches/">{nextLaunch.rocket}{/unknown/i.test(nextLaunch.mission) ? '' : ` · ${nextLaunch.mission}`} →</Link>}
              </div>
            </dl>
          </div>
        </section>

        <section className="chapter closing">
          <div className="closing-inner" data-reveal>
            <div className="chapter-meta mono"><b>05</b><span>Explore</span></div>
            <h2>Look up.</h2>
            <div className="closing-actions mono">
              <Link className="button" href="/track/">Open the live tracker <span aria-hidden>→</span></Link>
              <Link className="button" data-variant="ghost" href="/launches/">Launch schedule</Link>
              <Link className="button" data-variant="ghost" href="/aurora/">Aurora forecast</Link>
            </div>
          </div>
        </section>
      </div>

      <div className="story-hud mono">
        <span className="tabular">{String(active + 1).padStart(2, '0')} / {String(CHAPTERS.length).padStart(2, '0')}</span>
        <ol>
          {CHAPTERS.map((c, i) => (
            <li key={c.id} data-active={i === active}>{c.label}</li>
          ))}
        </ol>
        <div className="progress"><i ref={progress} /></div>
      </div>
    </>
  );
}

const fmtLat = (v: number) => `${Math.abs(v).toFixed(1)}° ${v >= 0 ? 'N' : 'S'}`;
const fmtLon = (v: number) => `${Math.abs(v).toFixed(1)}° ${v >= 0 ? 'E' : 'W'}`;

/** When the reader can see the station from where they are, or a one-tap way to find out. */
function SeeIt({
  pass,
  observer,
  locate,
  locating,
  error,
}: {
  pass: Pass | null;
  observer: Observer | null;
  locate: () => void;
  locating: boolean;
  error: string | null;
}) {
  if (!observer) {
    return (
      <div className="see-it">
        <button className="button" onClick={locate} disabled={locating}>
          {locating ? 'Locating…' : 'When can I see it?'} <span aria-hidden>→</span>
        </button>
        {error && <p className="readout-note mono">{error}</p>}
      </div>
    );
  }
  if (!pass) return <p className="see-it readout-note mono">No passes over {observer.label ?? 'you'} in the next four days.</p>;
  const day = pass.rise.toLocaleDateString(undefined, { weekday: 'short' });
  const time = pass.rise.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  const mins = Math.max(1, Math.round((pass.set.getTime() - pass.rise.getTime()) / 60000));
  return (
    <div className="see-it">
      <p className="see-it-head mono">{pass.visible ? 'You can see it' : 'Next pass overhead'} · {observer.label ?? 'your location'}</p>
      <p className="see-it-when">
        {day} {time} <span>· {mins} min · {Math.round(pass.maxElevation)}° high, rises in the {compass(pass.riseAz)}</span>
      </p>
      <Link className="readout-note mono" href="/track/">All passes in the tracker →</Link>
    </div>
  );
}
