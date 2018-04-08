const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const path = require("path");
const config = require('./webpack.config.js');

const compiler = webpack(config);
const app = express();

app.use(webpackHotMiddleware(compiler))
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get("/", function response(req, res) {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.get("/feed", function response(req, res) {
  res.sendFile(path.join(__dirname, "feed.html"));
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
