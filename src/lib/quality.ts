'use client';

import { useSyncExternalStore } from 'react';

/**
 * Rendering quality, picked once per device and lowered at runtime if frames
 * run long. Everything costly in the 3D scenes reads it:
 *
 *   high    full post chain, self-shadowing, 8K textures, up to 1.5× resolution
 *   medium  bloom and haze, no shadows, 2K textures, up to 1.25×
 *   low     tone mapping only, 2K textures, 1× (or less) resolution
 */
export type Tier = 'low' | 'medium' | 'high';

const ORDER: Tier[] = ['low', 'medium', 'high'];
const KEY = 'webtest.quality';
const lower = (a: Tier, b: Tier) => (ORDER.indexOf(a) < ORDER.indexOf(b) ? a : b);

function gpuName() {
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2') ?? c.getContext('webgl');
    if (!gl) return null;
    const info = gl.getExtension('WEBGL_debug_renderer_info');
    const name = String(info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER));
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return name.toLowerCase();
  } catch {
    return null;
  }
}

function detect(): Tier {
  const forced = new URLSearchParams(location.search).get('quality');
  if (forced && ORDER.includes(forced as Tier)) return forced as Tier;

  const gpu = gpuName();
  if (gpu === null) return 'low';
  let tier: Tier = 'high';
  if (/swiftshader|llvmpipe|softpipe|software|basic render/.test(gpu)) tier = 'low';
  // Older Intel integrated graphics (HD / UHD) can't afford full-screen effects at speed
  else if (/intel/.test(gpu) && !/iris|arc/.test(gpu)) tier = 'low';
  else if (/intel|mali|adreno|powervr|apple|videocore/.test(gpu)) tier = 'medium';

  const memory = (navigator as { deviceMemory?: number }).deviceMemory;
  const cores = navigator.hardwareConcurrency;
  if ((memory && memory <= 2) || (cores && cores <= 2)) tier = 'low';
  else if ((memory && memory <= 4) || (cores && cores <= 4)) tier = lower(tier, 'medium');
  if (matchMedia('(pointer: coarse)').matches) tier = lower(tier, 'medium');

  // A device that struggled before starts where it settled
  try {
    const saved = localStorage.getItem(KEY) as Tier | null;
    if (saved && ORDER.includes(saved)) tier = lower(tier, saved);
  } catch {
    /* storage unavailable */
  }
  return tier;
}

let current: Tier | null = null;
const listeners = new Set<() => void>();

export function getTier(): Tier {
  if (current === null) {
    current = typeof window === 'undefined' ? 'medium' : detect();
    if (typeof document !== 'undefined') document.documentElement.dataset.quality = current;
  }
  return current;
}

/** Step down one level after sustained slow frames, and remember it for next time. */
export function downgrade() {
  const t = getTier();
  const next = ORDER[Math.max(0, ORDER.indexOf(t) - 1)];
  if (next === t) return false;
  current = next;
  document.documentElement.dataset.quality = next;
  try {
    localStorage.setItem(KEY, next);
  } catch {
    /* storage unavailable */
  }
  listeners.forEach((l) => l());
  return true;
}

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export function useTier(): Tier {
  return useSyncExternalStore(subscribe, getTier, () => 'medium');
}

/** Resolution limits per tier: [lowest, highest] device pixel ratio. */
export function dprRange(tier: Tier): [number, number] {
  const device = typeof window === 'undefined' ? 1 : window.devicePixelRatio || 1;
  const max = tier === 'high' ? 1.5 : tier === 'medium' ? 1.25 : 1;
  return [tier === 'low' ? 0.6 : 0.75, Math.min(max, device)];
}
