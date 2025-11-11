/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
  },
  
  // Compression
  compress: true,
  
  // Production optimizations
  swcMinify: true,
  
  // Trailing slash
  trailingSlash: false,
  
  // Security & Performance headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  },
  
  // Environment variables that should be available on the client side
  env: {
    SITE_URL: process.env.SITE_URL || 'http://localhost:3000',
    SITE_NAME: 'Bahriddin Portfolio',
  }
}

module.exports = nextConfig

