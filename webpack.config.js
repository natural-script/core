const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const NpmInstallPlugin = require("webpack-plugin-install-deps");
const path = require("path");
module.exports = (env, argv) => {
  return {
    // devtool: argv.mode == `development` ? `inline-source-map` : `source-map`,
    resolve: {
      alias: {
        modernizr$: path.resolve(__dirname, "./.modernizrrc.js"),
        jquery$: path.resolve(__dirname, "./node_modules/jquery"),
        codeAnalyzer: path.resolve(__dirname, "./src/JS/codeAnalyzer"),
        commands: path.resolve(__dirname, "./src/JS/commands"),
        components: path.resolve(__dirname, "./src/JS/components"),
        core: path.resolve(__dirname, "./src/JS/core"),
        event: path.resolve(__dirname, "./src/JS/events"),
        media: path.resolve(__dirname, "./src/Media"),
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
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        XRegExp: "xregexp"
      })
    ],
    entry: ["core-js/stable", "regenerator-runtime/runtime", "./src/app.js"],
    node: {
      fs: "empty"
    },
    target: "web",
    output: {
      filename:
        argv.mode == `development`
          ? `./src/bundle.js`
          : `./naturalScript.min.js`
    },
	optimization: {
      minimizer: [new TerserPlugin()]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [
            path.resolve(__dirname, "./src/JS/Third Party/CLD/cld-min.js"),
            path.resolve(__dirname, "./node_modules/firebaseui")
          ],
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
            compact: false
          }
        },
        {
          test: /cld-min\.js/,
          loader: "script-loader"
        },
        {
          loader: "webpack-modernizr-loader",
          test: /\.modernizrrc\.js$/
        },
        {
          test: [
            path.resolve(__dirname, "./node_modules/firebaseui/dist/npm.js")
          ],
          loader: "string-replace-loader",
          options: {
            search: `var l=this`,
            replace: `var l=window`,
            strict: true
          }
        },
        {
          test: /datedropper\.js$/,
          loader: "string-replace-loader",
          options: {
            search: `$(this).is('input')`,
            replace: `($(this).is('paper-input')||$(this).is('input'))`,
            strict: true
          }
        },
        {
          test: /arli\.js$/,
          loader: "string-replace-loader",
          options: {
            search: `['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']`,
            replace: `['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']`,
            strict: true
          }
        },
        {
          test: /\.(css)$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.pegjs$/,
          loader: "pegjs-loader"
        },
        {
          test: /\.(jpg|png|svg|mp4|m4a|woff|woff2|eot|ttf|wav)$/,
          loader: "url-loader"
        },
        {
          test: /\.rive$/,
          use: "raw-loader"
        }
      ]
    }
  };
};
