/**
 * The bridge between scroll and WebGL.
 *
 * GSAP ScrollTrigger tweens these plain numbers as the user scrolls; the R3F
 * scene reads them every frame in useFrame. Nothing here is React state, so
 * scrolling never triggers a re-render.
 */
export interface Vec {
  x: number;
  y: number;
  z: number;
}

export const story = {
  camera: { x: -3.6, y: 0.9, z: 17 } as Vec,
  target: { x: -4.2, y: -1.2, z: 0 } as Vec,
  satellite: { rx: 0.3, ry: -2.2, rz: 0.2 },
  earthSpin: 0,
  constellation: 0,
  intro: 1,
  labels: { array: 0, instrument: 0, propulsion: 0 },
};

export type HotspotKey = keyof typeof story.labels;

/** One entry per scroll chapter. `camera`/`target`/`satellite` are where the chapter lands. */
export const CHAPTERS = [
  {
    id: 'orbit',
    label: 'Orbit',
  },
  {
    id: 'power',
    label: 'Landsat 8',
    camera: { x: 1.6, y: 1.8, z: 7.5 },
    target: { x: -0.4, y: -1.0, z: -1 },
    satellite: { rx: 0.15, ry: -2.0, rz: 0.1 },
    labels: { array: 1 },
  },
  {
    id: 'compute',
    label: 'Instruments',
    camera: { x: -0.4, y: 0.6, z: 4.4 },
    target: { x: -1.0, y: 0.0, z: 0 },
    satellite: { rx: 0.05, ry: -2.7, rz: 0.0 },
    labels: { instrument: 1, propulsion: 1 },
  },
  {
    id: 'network',
    label: 'Everything',
    camera: { x: 10, y: 20, z: 42 },
    target: { x: 5, y: -12, z: -10 },
    satellite: { rx: 0.4, ry: -1.4, rz: 0.1 },
    earthSpin: 1.1,
    constellation: 1,
  },
  {
    id: 'launch',
    label: 'Explore',
    camera: { x: 0, y: 1.8, z: 15 },
    target: { x: 0, y: -1.6, z: 0 },
    satellite: { rx: 0.25, ry: -2.4, rz: 0.15 },
    earthSpin: 1.8,
    constellation: 0.25,
  },
] as const;
