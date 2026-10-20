/**
 * The physically based sky is rendered in radiance units that need ~10×
 * exposure to look right. Everything we draw ourselves (Earth, markers,
 * lights) is authored in display units and scaled by RADIANCE so it sits in
 * the same range before tone mapping.
 */
export const EXPOSURE = 10;
export const RADIANCE = 1 / EXPOSURE;
