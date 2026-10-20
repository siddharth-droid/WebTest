import type { NextConfig } from 'next';

// Set when deploying under a sub-path, e.g. GitHub Pages at /<repo>/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static HTML export: the whole app is client-rendered WebGL, so no server is needed
  output: 'export',
  trailingSlash: true,
  basePath,
  // three's examples ship as untranspiled ESM
  transpilePackages: ['three'],
};

export default nextConfig;
