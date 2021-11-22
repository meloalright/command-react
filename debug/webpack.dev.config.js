module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "./dist/index.bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  externals: {
    'command-react': "require('../../dist/core')",
    'command-react/dist/checkbox': "require('../../dist/checkbox')",
  },
};
