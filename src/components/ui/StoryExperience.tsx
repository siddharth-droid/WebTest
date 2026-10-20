'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ReactLenis, useLenis, type LenisRef } from 'lenis/react';
import { CHAPTERS, story } from '@/lib/story';
import { Loader } from './Loader';
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
        if ('camera' in chapter) tl.to(story.camera, { ...chapter.camera }, at);
        if ('target' in chapter) tl.to(story.target, { ...chapter.target }, at);
        if ('satellite' in chapter) tl.to(story.satellite, { ...chapter.satellite }, at);
        tl.to(
          story,
          {
            earthSpin: 'earthSpin' in chapter ? chapter.earthSpin : story.earthSpin,
            constellation: 'constellation' in chapter ? chapter.constellation : 0,
          },
          at,
        );
        // Hotspots fade in as the camera settles and out as the next move starts
        if ('labels' in chapter) {
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

  // Intro: fly in from deep space once the assets are on the GPU
  const playIntro = useCallback(() => {
    setReady(true);
    gsap
      .timeline()
      .to(story, { intro: 0, duration: 3.2, ease: 'expo.out' }, 0)
      .from('.hero-title .line > span', { yPercent: 110, duration: 1.4, stagger: 0.1, ease: 'expo.out' }, 0.5)
      .from('.hero-foot > *', { opacity: 0, y: 12, duration: 1, stagger: 0.08, ease: 'power3.out' }, 1.1)
      .from('.site-header, .story-hud', { opacity: 0, duration: 1.2 }, 1.2);
  }, []);

  // Reset scroll-driven state if the user navigates away and back
  useEffect(() => {
    story.intro = 1;
  }, []);

  return (
    <>
      <SmoothScroll />
      <Loader onDone={playIntro} />
      <StoryScene />

      <div ref={root} className="story" style={{ visibility: ready ? 'visible' : 'hidden' }}>
        <section className="chapter hero">
          <h1 className="hero-title">
            <span className="line"><span>Every satellite.</span></span>
            <span className="line"><span>Right now.</span></span>
          </h1>
          <div className="hero-foot">
            <p>
              A live view of everything humanity has in orbit, built entirely on open data from CelesTrak, NASA and NOAA.
            </p>
            <span className="mono tabular">{counts ? `${counts.satellites.toLocaleString('en-US')} objects tracked today` : 'Tracking live'}</span>
            <span className="mono">Scroll to explore</span>
          </div>
        </section>

        <section className="chapter" data-align="right">
          <div className="chapter-copy" data-reveal>
            <div className="chapter-meta mono"><b>02</b><span>Landsat 8</span></div>
            <h2>One spacecraft, the whole planet.</h2>
            <p>
              Landsat 8 has photographed every point on Earth&rsquo;s land every 16 days since 2013, crossing the equator at
              the same local time on each orbit so shadows always fall the same way.
            </p>
            <dl className="spec">
              <div><dt className="mono">Altitude</dt><dd className="tabular">705 km</dd></div>
              <div><dt className="mono">Repeat cycle</dt><dd className="tabular">16 days</dd></div>
            </dl>
          </div>
        </section>

        <section className="chapter" data-align="left">
          <div className="chapter-copy" data-reveal>
            <div className="chapter-meta mono"><b>03</b><span>Instruments</span></div>
            <h2>Seeing in light we can&rsquo;t.</h2>
            <p>
              Two imagers share the instrument deck: one for visible and infrared light, one for heat. Together they map
              crops, glaciers, wildfire scars and city growth.
            </p>
            <dl className="spec">
              <div><dt className="mono">Swath</dt><dd className="tabular">185 km</dd></div>
              <div><dt className="mono">Imagers</dt><dd className="tabular">OLI + TIRS</dd></div>
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
