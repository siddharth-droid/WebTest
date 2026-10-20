'use client';

import { Bloom, EffectComposer, Noise, SMAA, ToneMapping, Vignette } from '@react-three/postprocessing';
import { BlendFunction, ToneMappingMode } from 'postprocessing';

/**
 * The "cinematic" layer. Bloom only catches pixels brighter than white
 * (sun glints, emissive parts), so it glows without washing out the frame.
 */
export function Effects({ bloom = 0.9 }: { bloom?: number }) {
  return (
    <EffectComposer multisampling={0}>
      <SMAA />
      <Bloom mipmapBlur intensity={bloom} luminanceThreshold={0.9} luminanceSmoothing={0.2} radius={0.75} />
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      <Vignette offset={0.3} darkness={0.7} />
      <Noise premultiply blendFunction={BlendFunction.ADD} opacity={0.06} />
    </EffectComposer>
  );
}
