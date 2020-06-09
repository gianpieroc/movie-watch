var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "main.js",
    publicPath: "/"
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    port: 3000,
    historyApiFallback: true,
    watchContentBase: true,
    open: true
  },
  node: {
    fs: "empty"
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          chunks: "all",
          test: /node_modules/
        }
      }
    }
  }
};
