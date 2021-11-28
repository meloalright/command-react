module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "./dist/index.bundle.prod.js",
  },
  mode: "production",
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
    'ws': "require('ws')",
    'react-devtools': "require('react-devtools')",
    'readline': "require('readline')",
  },
};
