'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ReactLenis, useLenis, type LenisRef } from 'lenis/react';
import { CHAPTERS, story } from '@/lib/story';
import { TitleSequence } from '@/components/retro/TitleSequence';
import { useData } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// WebGL can't render on the server
const StoryScene = dynamic(() => import('@/components/canvas/StoryScene'), { ssr: false });

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
  const [ready, setReady] = useState(false);
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
        if (chapter.cam) tl.to(story.cam, { ...chapter.cam }, at);
        if (chapter.look) tl.to(story.look, { ...chapter.look }, at);
        if (chapter.sat) tl.to(story.sat, { ...chapter.sat }, at);
        // Travel along the orbit at a steady pace: this is what makes the camera "fly with" the station
        if (chapter.orbitU !== undefined) tl.to(story, { orbitU: chapter.orbitU, ease: 'none' }, at);
        tl.to(story, { global: chapter.global ?? 0, constellation: chapter.constellation ?? 0, frameX: chapter.frameX ?? 0 }, at);
        // Hotspots fade in as the camera settles and out as the next move starts
        if (chapter.labels) {
          const off = Object.fromEntries(Object.keys(chapter.labels).map((k) => [k, 0]));
          tl.to(story.labels, { ...chapter.labels, duration: 0.22, ease: 'power1.out' }, at + 0.72);
          tl.to(story.labels, { ...off, duration: 0.18, ease: 'power1.in' }, at + 1.02);
        }
      });

      // Chapter copy: rise in on enter
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el.children, {
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

  // Intro: fly in from deep space once the titles are done and the assets are on the GPU
  const playIntro = useCallback(() => {
    setReady(true);
    gsap
      .timeline()
      .to(story, { intro: 0, duration: 3.2, ease: 'expo.out' }, 0)
      .from('.hero-title .line > span', { yPercent: 110, duration: 1.1, stagger: 0.12, ease: 'expo.out' }, 0.3)
      .from('.hero-sub', { opacity: 0, x: -16, duration: 0.9, ease: 'power3.out' }, 0.9)
      .from('.hero-foot > *', { opacity: 0, y: 12, duration: 1, stagger: 0.08, ease: 'power3.out' }, 1.1)
      .from('.patch', { scale: 0.6, opacity: 0, rotate: -40, duration: 1.2, ease: 'back.out(1.6)' }, 1.2)
      .from('.site-header, .story-hud', { opacity: 0, duration: 1.2 }, 1.2);
  }, []);

  // Reset scroll-driven state if the user navigates away and back
  useEffect(() => {
    story.intro = 1;
  }, []);

  return (
    <div className="retro">
      <SmoothScroll />
      <TitleSequence onDone={playIntro} />
      <StoryScene />

      <div ref={root} className="story" style={{ visibility: ready ? 'visible' : 'hidden' }}>
        <section className="chapter hero">
          <p className="hero-sub">a live broadcast from low Earth orbit</p>
          <h1 className="hero-title">
            <span className="line"><span>Every satellite<span className="punct">.</span></span></span>
            <span className="line"><span>Right now<span className="punct">.</span></span></span>
          </h1>
          <div className="hero-foot">
            <p>
              Everything humanity has in orbit, tracked live and built entirely on open data from CelesTrak, NASA and NOAA.
            </p>
            <span className="mono tabular">{counts ? `${counts.satellites.toLocaleString('en-US')} objects on the air` : 'On the air'}</span>
            <span className="mono">Scroll to tune in ↓</span>
          </div>
          <MissionPatch />
        </section>

        <section className="chapter" data-align="left">
          <Session n={2} title="Football Field Blues">
            <h2>A football field, 420 km up.</h2>
            <p>
              Sixteen pressurised modules from five space agencies, continuously crewed since November 2000. This is
              NASA&rsquo;s own engineering model, down to the handrails.
            </p>
            <dl className="spec">
              <div><dt className="mono">Span</dt><dd className="tabular">109 m</dd></div>
              <div><dt className="mono">Mass</dt><dd className="tabular">420 t</dd></div>
            </dl>
          </Session>
        </section>

        <section className="chapter" data-align="right">
          <Session n={3} title="Sunrise Waltz">
            <h2>Sixteen sunrises a day.</h2>
            <p>
              At 7.66 km per second the station laps the planet every 92 minutes, so the crew sees a sunrise or a
              sunset every 45. Scroll to ride along.
            </p>
            <dl className="spec">
              <div><dt className="mono">Speed</dt><dd className="tabular">27,600 km/h</dd></div>
              <div><dt className="mono">One orbit</dt><dd className="tabular">92 min</dd></div>
            </dl>
          </Session>
        </section>

        <section className="chapter" data-align="right">
          <Session n={4} title="Crowded Sky Rhapsody">
            <h2>It&rsquo;s getting crowded up there.</h2>
            <p>
              Each dot is a real object, placed where it was when you opened this page. Most of the shell is Starlink,
              launched in the last few years.
            </p>
            <dl className="spec">
              <div><dt className="mono">Tracked objects</dt><dd className="tabular">{counts ? counts.satellites.toLocaleString('en-US') : '–'}</dd></div>
              <div><dt className="mono">Launches queued</dt><dd className="tabular">{counts ? counts.launches : '–'}</dd></div>
            </dl>
          </Session>
        </section>

        <section className="chapter closing">
          <div className="closing-inner" data-reveal>
            <p className="session-tag mono">Session #05 · Final</p>
            <h2>Look up<span className="punct">.</span></h2>
            <p className="signoff">See you out there, space cowboy&hellip;</p>
            <div className="closing-actions mono">
              <Link className="button" href="/track/">Open the live tracker <span aria-hidden>→</span></Link>
              <Link className="button" data-variant="ghost" href="/launches/">Launch schedule</Link>
              <Link className="button" data-variant="ghost" href="/aurora/">Aurora forecast</Link>
            </div>
          </div>
        </section>
      </div>

      <div className="story-hud mono">
        <span className="tabular">Session {String(active + 1).padStart(2, '0')} / {String(CHAPTERS.length).padStart(2, '0')}</span>
        <ol>
          {CHAPTERS.map((c, i) => (
            <li key={c.id} data-active={i === active}>{c.label}</li>
          ))}
        </ol>
        <div className="progress"><i ref={progress} /></div>
      </div>
    </div>
  );
}

/** An episode card: session number and a jazz-standard title over the chapter copy. */
function Session({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="chapter-copy session-card" data-reveal>
      <div className="session-head">
        <span className="session-tag mono">Session #{String(n).padStart(2, '0')}</span>
        <span className="session-title">{title}</span>
      </div>
      {children}
    </div>
  );
}

/** A mission patch with its motto running round the rim. */
function MissionPatch() {
  return (
    <svg className="patch" viewBox="0 0 200 200" aria-hidden>
      <defs>
        <path id="patch-rim" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
      </defs>
      <circle cx="100" cy="100" r="96" className="patch-ring" />
      <circle cx="100" cy="100" r="54" className="patch-core" />
      <g className="patch-spin">
        <text className="patch-text">
          <textPath href="#patch-rim">Orbita · open data · live from orbit · est. 2026 ·</textPath>
        </text>
      </g>
      <circle cx="100" cy="100" r="22" className="patch-sun" />
      <path d="M58 112 Q100 76 142 112" className="patch-orbit" />
      <circle cx="132" cy="103" r="5" className="patch-sat" />
    </svg>
  );
}
