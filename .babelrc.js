module.exports = {
  presets: [
    ["@babel/preset-env", {
      useBuiltIns: "usage",
      corejs: 3,
      targets: {
        node: "18"
      }
    }]
  ],
  plugins: [
    ["transform-define", {
      "process.env.SERVER": process.env.SERVER === "true" ? true : false,
      "typeof window": "object"
    }],
    "minify-dead-code-elimination"
  ]
};
