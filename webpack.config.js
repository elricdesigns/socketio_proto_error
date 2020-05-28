const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: `${__dirname}/app`,
  resolve: {
    modules: ["node_modules"],
    extensions: [".js"],
  },
  output: {
    publicPath: "/",
    path: `${__dirname}/build`,
    filename: "main.js",
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        extractComments: "all",
        exclude: /\/node_modules/,
      }),
    ],
  },
};
