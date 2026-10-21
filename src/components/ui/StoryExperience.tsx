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
  const manifest = useData<{ counts?: { satellites: number; launches: number; events: number } }>('manifest.json');
  const counts = manifest.status === 'ready' ? manifest.data.counts : undefined;

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
            <div className="chapter-meta mono"><b>02</b><span>International Space Station</span></div>
            <h2>A football field, 420 km up.</h2>
            <p>
              Sixteen pressurised modules from five space agencies, continuously crewed since November 2000. This is
              NASA&rsquo;s own engineering model, down to the handrails.
            </p>
            <dl className="spec">
              <div><dt className="mono">Span</dt><dd className="tabular">109 m</dd></div>
              <div><dt className="mono">Mass</dt><dd className="tabular">420 t</dd></div>
            </dl>
          </div>
        </section>

        <section className="chapter" data-align="right">
          <div className="chapter-copy" data-reveal>
            <div className="chapter-meta mono"><b>03</b><span>Orbit</span></div>
            <h2>Sixteen sunrises a day.</h2>
            <p>
              At 7.66 km per second the station laps the planet every 92 minutes, so the crew sees a sunrise or a
              sunset every 45. Scroll to ride along.
            </p>
            <dl className="spec">
              <div><dt className="mono">Speed</dt><dd className="tabular">27,600 km/h</dd></div>
              <div><dt className="mono">One orbit</dt><dd className="tabular">92 min</dd></div>
            </dl>
          </div>
        </section>

        <section className="chapter" data-align="right">
          <div className="chapter-copy" data-reveal>
            <div className="chapter-meta mono"><b>04</b><span>Everything in orbit</span></div>
            <h2>It&rsquo;s getting crowded up there.</h2>
            <p>
              Each dot is a real object, placed where it was when you opened this page. Most of the blue shell is Starlink,
              launched in the last few years.
            </p>
            <dl className="spec">
              <div><dt className="mono">Tracked objects</dt><dd className="tabular">{counts ? counts.satellites.toLocaleString('en-US') : '–'}</dd></div>
              <div><dt className="mono">Launches queued</dt><dd className="tabular">{counts ? counts.launches : '–'}</dd></div>
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
