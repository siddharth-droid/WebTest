/**
 * The bridge between scroll and WebGL.
 *
 * GSAP ScrollTrigger tweens these plain numbers as the user scrolls; the R3F
 * scene reads them every frame in useFrame. Nothing here is React state, so
 * scrolling never triggers a re-render.
 *
 * The scene is live: the ISS, the Sun and the Earth's rotation all come from
 * the real clock. Scrolling adds `minutes` to "now", so riding along the orbit
 * is the station's actual next ~45 minutes. The camera is expressed in the
 * station's own frame (forward = direction of travel, up = away from Earth,
 * side = to the right), so following it is just a matter of animating time.
 */
export interface Frame {
  /** Behind (−forward), above (+up), right (+side), in scene units. */
  back: number;
  up: number;
  side: number;
}

/** Where the sunrise chapter sits on the scripted timeline. */
export const SUNRISE_MINUTES = 46;

export const story = {
  /** How far ahead of the real clock to show, in scripted minutes (see `timeScale`). */
  minutes: 0,
  /**
   * Real minutes per scripted minute. The scene stretches or squeezes the ride
   * so the sunrise chapter lands on the station's actual next orbital sunrise.
   */
  timeScale: 1,
  cam: { back: 0.46, up: 0.1, side: -0.2 } as Frame,
  /** Look target relative to the station: ahead, up, side. */
  look: { ahead: 0, up: -0.02, side: -0.04 },
  /** 0: camera rides with the station. 1: wide shot of the whole planet. */
  global: 0,
  /** Extra model rotation in the station frame (yaw, pitch, roll), radians. */
  sat: { yaw: 0.35, pitch: 0, roll: 0 },
  constellation: 0,
  /** Horizontal framing: shifts the image so the subject sits beside the copy (−0.5…0.5 of width). */
  frameX: 0.27,
  intro: 1,
  labels: { a: 0, b: 0, c: 0 },
  /** Written by the scene for the DOM: where the station is at the shown moment. */
  live: { lat: 0, lon: 0, alt: 0, sunlit: true, ready: false },
};

export type HotspotKey = keyof typeof story.labels;

type Chapter = {
  id: string;
  label: string;
  minutes?: number;
  cam?: Frame;
  look?: { ahead: number; up: number; side: number };
  sat?: { yaw: number; pitch: number; roll: number };
  global?: number;
  constellation?: number;
  frameX?: number;
  labels?: Partial<Record<HotspotKey, number>>;
};

/** One entry per scroll chapter: where each chapter lands. */
export const CHAPTERS: Chapter[] = [
  { id: 'orbit', label: 'Orbit' },
  {
    id: 'station',
    label: 'The ISS',
    minutes: 0.6,
    cam: { back: 0.24, up: 0.09, side: 0.22 },
    look: { ahead: 0, up: 0.0, side: 0.04 },
    sat: { yaw: -0.35, pitch: 0.05, roll: 0 },
    frameX: 0.2,
    labels: { a: 1, b: 1, c: 1 },
  },
  {
    id: 'sunrise',
    label: '16 sunrises',
    // Scripted to the station's next real sunrise (StoryScene sets `timeScale` so this lands on it)
    minutes: SUNRISE_MINUTES,
    cam: { back: 0.42, up: 0.09, side: -0.04 },
    // The horizon sits ~20° below level from this altitude: aim at it
    look: { ahead: 1.6, up: -0.64, side: 0 },
    sat: { yaw: 0, pitch: 0, roll: 0 },
    frameX: -0.2,
  },
  { id: 'everything', label: 'Everything', minutes: 50, global: 1, constellation: 1, frameX: -0.2 },
  { id: 'explore', label: 'Explore', minutes: 54, global: 0.82, constellation: 0.35, frameX: 0.16 },
];
