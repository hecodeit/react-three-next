/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  basePath: '/lab/next',
  trailingSlash: true
}

module.exports = nextConfig
