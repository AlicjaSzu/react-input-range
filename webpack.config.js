var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/components/RangeInput/index.ts",
  output: {
    path: path.resolve("lib"),
    filename: "RangeInput.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
    ],
  },
};
