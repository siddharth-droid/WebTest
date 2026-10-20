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
            <span className="line"><span>Orbital</span></span>
            <span className="line"><span>Intelligence</span></span>
          </h1>
          <div className="hero-foot">
            <p>
              A constellation of compute satellites that process data in orbit, so the ground receives answers,
              not raw imagery.
            </p>
            <span className="mono">30 spacecraft · 6 planes</span>
            <span className="mono">Scroll to explore</span>
          </div>
        </section>

        <section className="chapter" data-align="right">
          <div className="chapter-copy" data-reveal>
            <div className="chapter-meta mono"><b>02</b><span>Power subsystem</span></div>
            <h2>Sunlight in. Compute out.</h2>
            <p>
              A single deployable wing tracks the sun through every orbit. Power that used to run a camera now runs
              a datacenter-class accelerator.
            </p>
            <dl className="spec">
              <div><dt className="mono">Array output</dt><dd className="tabular">4.3 kW</dd></div>
              <div><dt className="mono">Eclipse reserve</dt><dd className="tabular">38 min</dd></div>
            </dl>
          </div>
        </section>

        <section className="chapter" data-align="left">
          <div className="chapter-copy" data-reveal>
            <div className="chapter-meta mono"><b>03</b><span>Compute payload</span></div>
            <h2>Inference at the edge of space.</h2>
            <p>
              Sensor data is processed seconds after capture. A wildfire perimeter downlinks as 2 KB of geometry,
              not 40 GB of pixels.
            </p>
            <dl className="spec">
              <div><dt className="mono">Throughput</dt><dd className="tabular">220 TOPS</dd></div>
              <div><dt className="mono">Downlink saved</dt><dd className="tabular">99.6%</dd></div>
            </dl>
          </div>
        </section>

        <section className="chapter" data-align="right">
          <div className="chapter-copy" data-reveal>
            <div className="chapter-meta mono"><b>04</b><span>Constellation</span></div>
            <h2>One mesh. Whole planet.</h2>
            <p>
              Six orbital planes in a Walker-delta pattern. Laser crosslinks route results between spacecraft to
              whichever ground station is in view.
            </p>
            <dl className="spec">
              <div><dt className="mono">Revisit</dt><dd className="tabular">&lt; 12 min</dd></div>
              <div><dt className="mono">Crosslink</dt><dd className="tabular">100 Gbps</dd></div>
            </dl>
          </div>
        </section>

        <section className="chapter closing">
          <div className="closing-inner" data-reveal>
            <div className="chapter-meta mono"><b>05</b><span>Operations</span></div>
            <h2>Watch it fly.</h2>
            <div className="closing-actions mono">
              <Link className="button" href="/fleet">Open fleet console <span aria-hidden>→</span></Link>
              <a className="button" data-variant="ghost" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0 }); }}>
                Back to top
              </a>
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
