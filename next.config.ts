// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // New: Sanity CDN images
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        // No port needed
        // Sanity images are usually under /images/<projectId>/<dataset>/...
        // Using /** is safe and covers everything
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;


