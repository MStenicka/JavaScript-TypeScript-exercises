const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('assets'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/assets/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'assets', 'style.css'));
});

app.get('/assets/product.csv', function (req, res) {
  res.sendFile(path.join(__dirname, 'assets', 'product.csv'));
});

app.listen(3000, 'localhost');
