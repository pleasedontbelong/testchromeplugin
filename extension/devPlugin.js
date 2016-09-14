/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');

const app = express();

app.use(express.static('dist/'));

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