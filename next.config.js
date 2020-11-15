const path = require('path')

module.exports = (phase, { defaultConfig }) => {
  return {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.node = {
          fs: 'empty',
        }
      }
      config.module.rules.push({
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            fallback: {
              loader: 'file-loader',
              options: {
                publicPath: '/_next/static/images',
                outputPath: 'static/images',
              },
            },
          },
        },
      })

      config.resolve.alias['@'] = path.join(__dirname, 'src')
      return config
    },
    reactStrictMode: true,
  }
}
