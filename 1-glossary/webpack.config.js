require("dotenv").config();

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*
  What should go here?  Great question!

  Before you go to documentation, verify which version of webpack
  you are using.

  Use this config to copy production versions of your
  index.html and styles.css to dist folder upon build
*/

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/client/src/index.jsx"),
  output: {
    path: path.join(__dirname, "/client/dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
