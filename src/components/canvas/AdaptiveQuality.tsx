'use client';

import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';
import { downgrade, dprRange, useTier } from '@/lib/quality';

/**
 * Keeps the frame rate up: render resolution steps down when frames run long
 * (and back up when there is headroom), and if even the lowest resolution
 * can't keep up, the whole quality tier drops a level.
 */
export function AdaptiveQuality() {
  const tier = useTier();
  const setDpr = useThree((s) => s.setDpr);
  const [min, max] = dprRange(tier);
  const dpr = useRef(max);

  useEffect(() => {
    dpr.current = max;
    setDpr(max);
  }, [max, setDpr]);

  return (
    <PerformanceMonitor
      // Judge against the display's own refresh rate
      bounds={(refresh) => (refresh > 90 ? [70, refresh - 10] : [45, 57])}
      flipflops={4}
      onDecline={() => {
        if (dpr.current > min + 0.01) {
          dpr.current = Math.max(min, dpr.current - 0.25);
          setDpr(dpr.current);
        } else {
          downgrade();
        }
      }}
      onIncline={() => {
        if (dpr.current < max - 0.01) {
          dpr.current = Math.min(max, dpr.current + 0.25);
          setDpr(dpr.current);
        }
      }}
      onFallback={() => downgrade()}
    />
  );
}
