module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    ["transform-define", {
      "process.env.SERVER": process.env.SERVER === "true" ? true : false,
      "typeof window": "object"
    }],
    "minify-dead-code-elimination"
  ]
};
