const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    mode: "development",
    index: "./src/index.js",
    domElements: "./src/dom.js",
  },
  output: {
    clean: true,
    filename: "[name].bundle.js",
    path: path.resolve(
      __dirname,
      String.raw`D:\programming-as-a-freelancer\portfolio-v1\dist`
    ),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Portfolio-v1",
    }),
  ],
  module: {
    rules: [{ test: /\.css$/i, use: ["style-loader", "css-loader"] }],
  },
};
