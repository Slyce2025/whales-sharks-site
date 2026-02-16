/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['files.cdn.printful.com', 'images.unsplash.com'],
  },
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  },
}

module.exports = nextConfig
