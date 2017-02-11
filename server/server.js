const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const port = 3000;
const config = require('../webpack.config');

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./static'));

app.get("/", (req, res) => {
  res.sendFile(path.resolve('client/index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.log("Listening on port: ", port);
  }
});
