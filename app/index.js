var process = require('process');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(`Hello World! My process is pid ${process.pid}`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
