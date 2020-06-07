const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  target: "node",
  entry: "./server.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "./build",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        options: {
          presets: [
            ["@babel/preset-env", { loose: true, modules: false }],
            "@babel/react",
          ],
          plugins: [
            "@babel/proposal-class-properties",
            [
              "css-modules-transform",
              {
                camelCase: true,
                extensions: [".css"],
              },
            ],
            "dynamic-import-node",
            "@babel/plugin-transform-runtime",
            "@babel/plugin-transform-modules-commonjs",
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
      __isBrowser__: false,
    }),
  ],

  externals: [webpackNodeExternals()],
};
