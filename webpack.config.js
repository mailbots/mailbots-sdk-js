module.exports = {
	entry: "./src/gopherhq.js",
	output: {
		filename: "./dist/gopherhq-browser.js"
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
