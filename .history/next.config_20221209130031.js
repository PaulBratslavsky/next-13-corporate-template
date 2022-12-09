/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    API_KEY: process.env.API_KEY
  }
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
      },
    ],
  },
}

module.exports = nextConfig
