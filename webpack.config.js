const path = require("path");

module.exports = {
  entry: {
    core: "./core/index.ts",
    checkbox: "./components/checkbox.ts",
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    globalObject: "this",
    filename: "[name].js",
    libraryTarget: "umd",
    library: "[name]",
  },
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.json",
        },
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  externals: {
    react: "react",
    readline: "readline"
  },
};
