import * as THREE from 'three';

/**
 * The retro palette: a 1970s print run. Every colour in the landing scene
 * comes from here, so the 3D and the page read as one piece.
 */
export const PALETTE = {
  ink: '#0d0e1a',
  night: '#141a38',
  navy: '#1d2a5a',
  ocean: '#1f5d86',
  shelf: '#3a8ea0',
  teal: '#3fa7a9',
  sky: '#9fe3e6',
  cream: '#f2e6cc',
  mustard: '#eaa93b',
  orange: '#ec6f2e',
  red: '#d23c2c',
} as const;

export const color = (key: keyof typeof PALETTE) => new THREE.Color(PALETTE[key]);
