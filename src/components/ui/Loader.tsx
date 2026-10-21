'use client';

import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

/** Tracks every asset loaded through drei/three loaders and fades out when done. */
export function Loader({ onDone }: { onDone?: () => void }) {
  const { progress, active } = useProgress();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done || active || progress < 100) return;
    // Give the GPU a frame to upload textures before revealing
    const id = setTimeout(() => {
      setDone(true);
      onDone?.();
    }, 250);
    return () => clearTimeout(id);
  }, [active, progress, done, onDone]);

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
