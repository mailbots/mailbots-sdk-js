const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  }
  // node: {
  // 	// fs: "empty",
  // 	global: true,
  // 	process: true,
  // 	Buffer: true
  // }
};
