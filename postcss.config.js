module.exports = {
  plugins: [,
    require('postcss-import'),
    require('precss'),
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('postcss-google-color'),
    require('postcss-font-magician')({
      protocol: 'https:'
    }),
    require('postcss-inline-base64')
  ]
}