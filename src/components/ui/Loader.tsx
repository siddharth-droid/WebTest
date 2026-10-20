'use client';

import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

/**
 * Tracks assets loaded through drei/three loaders and fades out when done.
 * With `ready`, the scene says when it is presentable instead, so optional
 * assets (a detailed model, say) can keep streaming in behind the reveal.
 */
export function Loader({ onDone, ready }: { onDone?: () => void; ready?: boolean }) {
  const loading = useProgress();
  const [done, setDone] = useState(false);
  const finished = ready ?? (!loading.active && loading.progress >= 100);
  const progress = ready === undefined ? loading.progress : ready ? 100 : Math.min(loading.progress, 96);

  useEffect(() => {
    if (done || !finished) return;
    // Give the GPU a frame to upload textures before revealing
    const id = setTimeout(() => {
      setDone(true);
      onDone?.();
    }, 250);
    return () => clearTimeout(id);
  }, [finished, done, onDone]);

  return (
    <div className="loader" data-done={done} aria-hidden={done}>
      <div className="loader-inner mono">
        <div className="loader-row">
          <span>Acquiring signal</span>
          <span className="tabular">{String(Math.round(progress)).padStart(3, '0')}</span>
        </div>
        <div className="loader-track">
          <div className="loader-fill" style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
      </div>
    </div>
  );
}
