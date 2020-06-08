const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  target: "web",
  entry: "./src/client.js",
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "build/public"),
    publicPath: "./build/public",
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        options: {
          presets: ["@babel/react", "@babel/env"],
          plugins: [
            "@babel/proposal-class-properties",
            "dynamic-import-node",
            "@babel/plugin-transform-runtime",
            "@babel/plugin-transform-modules-commonjs",
            "@babel/plugin-proposal-object-rest-spread",
          ],
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },

  plugins: [
    new miniCssExtractPlugin({
      filename: "style.css",
    }),

    new webpack.DefinePlugin({
      __isBrowser__: true,
    }),
  ],
};
