module.exports = {
  entry: "./src/mailbots-sdk.js",
  output: {
    filename: "./dist/mailbots-sdk.js"
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }]
  }
  // node: {
  // 	// fs: "empty",
  // 	global: true,
  // 	process: true,
  // 	Buffer: true
  // }
};
