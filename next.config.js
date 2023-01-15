/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  trailingSlash: true,
  i18n,

  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/,
      },
    )
    return config
  },
}

module.exports = nextConfig
