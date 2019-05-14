const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: "./src/mailbots-sdk.js",
  output: {
    library: 'MailBotsClient',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist/bundles'),
    filename: "mailbots-sdk.umd.min.js"
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
  // node: {
  // 	// fs: "empty",
  // 	global: true,
  // 	process: true,
  // 	Buffer: true
  // }
};
