module.exports = {
	entry: "./src/gopherhq-node.js",
	output: {
		filename: "./dist/gopherhq-client.js"
	},
	module: {
		rules: [{ test: /\.js$/, use: "babel-loader" }]
	},
	node: {
		// fs: "empty",
		global: true,
		process: true,
		Buffer: true
	}
};
