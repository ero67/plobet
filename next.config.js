/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker optimization
  output: 'standalone',
  
  // Optimize for production
  experimental: {
    // Enable turbopack for development (already in your package.json)
    // This config is for production builds
  },
  
  // Optional: Add any other configurations you need
  images: {
    // Configure if you're using next/image
    unoptimized: true, // Set to false if you want Next.js image optimization
  },
}

module.exports = nextConfig