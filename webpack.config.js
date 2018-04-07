const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ["babel-polyfill", "./src/index.jsx"],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        include: path.join(__dirname, "src"),
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
