const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    'loginBudle': './src/containers/login.jsx',
    'feedBundle': './src/containers/feed.jsx',
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
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
