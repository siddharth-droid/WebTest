import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // three's examples ship as untranspiled ESM
  transpilePackages: ['three'],
  async headers() {
    // Models and textures are content-addressed by filename; cache them hard.
    return [
      {
        source: '/(models|textures)/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
