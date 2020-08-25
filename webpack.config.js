path = require("path");

module.exports = {
  entry: ["./src/main.ts"],
  mode: "development",
  target: "node",
  devtool: "inline-source-map",
  output: {
    path: __dirname + "/dist",
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@root": path.resolve(__dirname, "."),
      "@src": path.resolve(__dirname, "./src"),
      "@data": path.resolve(__dirname, "./src/data"),
    },
  },
  // plugins: []
};
