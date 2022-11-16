const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'custom',
    loaderFile: './configs/image/loader.js',
    // minimumCacheTTL: 12000,
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'publish-p81252-e700817.adobeaemcloud.com',
    //     pathname: '/**',
    //   },
    // ],
  },
}
// module.exports = withBundleAnalyzer(nextConfig)
module.exports = nextConfig