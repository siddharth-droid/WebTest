/**
 * The bridge between scroll and the landing sequence.
 *
 * GSAP ScrollTrigger tweens these plain numbers as the user scrolls; the frame
 * sequence reads them every animation frame. Nothing here is React state, so
 * scrolling never triggers a re-render.
 */
export const story = {
  /** Position in the pre-rendered sequence (fractional; the nearest frame is drawn). */
  frame: 0,
  labels: { a: 0, b: 0, c: 0 },
};

export type HotspotKey = keyof typeof story.labels;

/** Frames per chapter in the rendered sequence (scripts/landing/render.py, SEG). */
export const FRAMES_PER_CHAPTER = 45;

type Chapter = {
  id: string;
  label: string;
  labels?: Partial<Record<HotspotKey, number>>;
};

/** One entry per scroll chapter; chapter i lands on frame i × FRAMES_PER_CHAPTER. */
export const CHAPTERS: Chapter[] = [
  { id: 'orbit', label: 'Orbit' },
  { id: 'station', label: 'The ISS', labels: { a: 1, b: 1, c: 1 } },
  { id: 'sunrise', label: '16 sunsets' },
  { id: 'everything', label: 'Everything' },
  { id: 'explore', label: 'Explore' },
];
