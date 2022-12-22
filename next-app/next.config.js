/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  trailingSlash: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
      use: ["@svgr/webpack"]
    },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/,

      })
      return config
    }
}

module.exports = nextConfig