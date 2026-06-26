import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Compile workspace packages through Next.js transpiler
  transpilePackages: [
    '@sagemodules/database',
    '@sagemodules/core',
    '@sagemodules/ui',
    '@sagemodules/auth',
  ],

  output: 'standalone',

  // Security headers applied globally
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' blob: data: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'none';",
          },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },

  // Image configuration
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.amazonaws.com' },
      { protocol: 'https', hostname: '**.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },

  // Enable React strict mode for production hardening
  reactStrictMode: true,

  // Experimental features
  experimental: {
    // Enable server actions (already default in Next.js 16 but explicit for clarity)
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;
