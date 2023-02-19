/** @type {import('next').NextConfig} */

const loaderUtils = require('loader-utils')

const { i18n } = require('./next-i18next.config.js')
const path = require('path')

isProd = false

const regexEqual = (x, y) => {
  return (
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline
  )
}

const localIdent = (loaderContext, localIdentName, localName, options) => {
  return (
    loaderUtils
      .interpolateName(loaderContext, `[folder]_[name]__${localName}`, options)
      // Webpack name interpolation returns `about_about.module__root` for
      // `.root {}` inside a file named `about/about.module.css`. Let's simplify
      // this.
      .replace(/\.module_/, '_')
      // Replace invalid symbols with underscores instead of escaping
      // https://mathiasbynens.be/notes/css-escapes#identifiers-strings
      .replace(/[^a-zA-Z0-9-_]/g, '_')
      // "they cannot start with a digit, two hyphens, or a hyphen followed by a digit [sic]"
      // https://www.w3.org/TR/CSS21/syndata.html#characters
      .replace(/^(\d|--|-\d)/, '__$1')
  )
}

function cssLoaderOptions(modules) {
  const { getLocalIdent, ...others } = modules
  return {
    ...others,
    getLocalIdent: isProd ? getLocalIdent : localIdent,
    exportLocalsConvention: 'camelCaseOnly',
    mode: 'local',
  }
}

const nextConfig = {
  output: 'standalone',

  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  trailingSlash: true,
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

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

    // const oneOf = config.module.rules.find(
    //   (rule) => typeof rule.oneOf === 'object',
    // )

    // if (oneOf) {
    //   // Find the module which targets *.scss|*.sass files
    //   const moduleSassRule = oneOf.oneOf.find((rule) =>
    //     regexEqual(rule.test, /\.module\.(scss|sass)$/),
    //   )

    //   if (moduleSassRule) {
    //     // Get the config object for css-loader plugin
    //     const cssLoader = moduleSassRule.use.find(({ loader }) =>
    //       loader.includes('css-loader'),
    //     )
    //     if (cssLoader) {
    //       cssLoader.options = {
    //         ...cssLoader.options,
    //         modules: cssLoaderOptions(cssLoader.options.modules),
    //         module: true
    //       }
    //     }
    //   }
    // }
    return config
  },
}

module.exports = nextConfig
