const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const NpmInstallPlugin = require('webpack-plugin-install-deps');
const path = require('path');
module.exports = (env, argv) => {
  return {
    devtool: (argv.mode == `development` ? `inline-source-map` : `source-map`),
    resolve: {
      alias: {
        modernizr$: path.resolve(__dirname, "./.modernizrrc.js"),
        jquery$: path.resolve(__dirname, "./node_modules/jquery"),
        codeAnalyzer: path.resolve(__dirname, "./src/JS/codeAnalyzer"),
        commands: path.resolve(__dirname, "./src/JS/commands"),
        components: path.resolve(__dirname, "./src/JS/components"),
        core: path.resolve(__dirname, "./src/JS/core"),
        event: path.resolve(__dirname, "./src/JS/events"),
        FX: path.resolve(__dirname, "./src/JS/FX"),
        measurements: path.resolve(__dirname, "./src/JS/measurements"),
        parsers: path.resolve(__dirname, "./src/JS/parsers"),
        providers: path.resolve(__dirname, "./src/JS/providers"),
        thirdParty: path.resolve(__dirname, "./src/JS/thirdParty"),
        translations: path.resolve(__dirname, "./src/JS/translations"),
        CSS: path.resolve(__dirname, "./src/CSS")
      }
    },
    plugins: [
      new NpmInstallPlugin(),
      /* new BundleAnalyzerPlugin({
        analyzerMode: 'static'
      }), */
      new CompressionPlugin(),
      new OptimizeCssAssetsPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'XRegExp': 'xregexp'
      }),
      new webpack.DefinePlugin({
        'NS_Version': JSON.stringify(process.env.npm_package_version)
      })
    ],
    entry: ["@babel/polyfill", "./src/app.js"],
    node: {
      fs: "empty"
    },
    target: "web",
    output: {
      filename: (argv.mode == `development` ? `./src/bundle.js` : `./naturalScript.min.js`),
    },
    optimization: {
      minimizer: [new TerserPlugin()]
    },
    module: {
      rules: [{
          test: /\.js$/,
          exclude: [path.resolve(__dirname, "./src/JS/Third Party/CLD/cld-min.js"), path.resolve(__dirname, "./node_modules/web-animations-js/web-animations-next-lite.min.js"), path.resolve(__dirname, "./node_modules/firebaseui"), path.resolve(__dirname, "./node_modules/@polymer/polymer")],
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            compact: true
          }
        }, {
          test: /(web-animations-next-lite\.min|cld-min)\.js/,
          loader: 'script-loader'
        }, {
          loader: "webpack-modernizr-loader",
          test: /\.modernizrrc\.js$/
        }, {
          test: [path.resolve(__dirname, "./node_modules/firebaseui/dist/npm.js")],
          loader: 'string-replace-loader',
          options: {
            search: `var l=this`,
            replace: `var l=window`,
            strict: true
          }
        }, {
          test: /datedropper\.js$/,
          loader: 'string-replace-loader',
          options: {
            search: `$(this).is('input')`,
            replace: `($(this).is('paper-input')||$(this).is('input'))`,
            strict: true
          }
        }, {
          test: /arli\.js$/,
          loader: 'string-replace-loader',
          options: {
            search: `['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']`,
            replace: `['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']`,
            strict: true
          }
        }, {
          test: /\.(pug|jade)$/,
          loader: 'pug-loader'
        }, {
          test: /\.(css)$/,
          use: ["style-loader", "css-loader"]
        }, {
          test: /\.(scss|sass)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }, {
          test: /\.(less)$/,
          use: ["style-loader", "css-loader", "less-loader"]
        }, {
          test: /\.(postcss)$/,
          use: ["style-loader", "css-loader", "postcss-loader"]
        },
        {
          test: /\.pegjs$/,
          loader: 'pegjs-loader'
        }, {
          test: /\.(jpg|png|svg|mp4|m4a|woff|woff2|eot|ttf)$/,
          loader: 'url-loader'
        }, {
          test: /\.rive$/,
          use: 'raw-loader'
        }
      ]
    }
  }
}