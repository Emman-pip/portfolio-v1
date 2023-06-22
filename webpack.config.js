const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    domElements: "./src/dom.js",
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Portfolio-v1",
    }),
  ],
  output: {
    clean: true,
    filename: "[name].bundle.js",
    path: path.resolve(
      __dirname,
      String.raw`D:\programming-as-a-freelancer\portfolio-v1\dist`
    ),
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.(woff|tff)$/i, type: "asset/resource" },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },
    ],
  },
};
