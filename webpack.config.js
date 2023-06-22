const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: "shared",
    },
    another: {
      import: "./src/dom.js",
      dependOn: "shared",
    },
    shared: "lodash",
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
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },
      { test: /\.(woff|tff)$/i, type: "asset/resource" },
    ],
  },
};
