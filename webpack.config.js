const path = require("path");
var ZipPlugin = require("zip-webpack-plugin");

module.exports = {
  entry: "./index.js",
  mode: "production",
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    new ZipPlugin({
      filename: "artifact.zip",
      extension: "zip",
    }),
  ],
};
