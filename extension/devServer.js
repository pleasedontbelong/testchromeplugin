/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    assets: false,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
  },
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/static', express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});