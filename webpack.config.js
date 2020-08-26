const TsDeclarationWebpackPlugin = require("ts-declaration-webpack-plugin");
const TypescriptDeclarationPlugin = require("typescript-declaration-webpack-plugin");
path = require("path");

module.exports = {
  entry: {
    main: "./src/main.ts",
    // data: "./src/data/index.ts",
  },
  mode: "development",
  target: "node",
  devtool: "source-map",
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /dist/],
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
  // plugins: [new TsDeclarationWebpackPlugin()],
  // plugins: [
  //   new TypescriptDeclarationPlugin({
  //     out: "main.d.ts",
  //   }),
  // ],
};
