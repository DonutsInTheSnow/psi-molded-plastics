// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Existing Supabase storage images
      {
        protocol: 'https',
        hostname: 'dqnwxrsghenfcrxvgetp.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },

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


