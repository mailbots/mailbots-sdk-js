module.exports = {
	entry: "./gopherhq-node.js",
	output: {
		filename: "./gopherhq-client.js"
	},
	module: {
		rules: [{ test: /\.js$/, use: "babel-loader" }]
	},
	node: {
		//fs: "mock",
		global: true,
		process: true,
		Buffer: true
	}
};
