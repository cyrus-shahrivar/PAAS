const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(logger('dev'));

app.listen(3000, function () {
  console.log("you are broadcasting live on port 3000");
});

app.get('/gm/:to/:from', function (req,res) {
  res.send('Good Morning, ' + req.params.to + "! - " + req.params.from);
});

app.get('/api/gm/:to/:from', function (req,res) {
  res.json({greeting: 'Good Morning, ' + req.params.to + "! - " + req.params.from});
});

app.get('/gd/:to/:from', function (req,res) {
  res.send('Good Day, ' + req.params.to + "! - " + req.params.from);
});

app.get('/api/gd/:to/:from', function (req,res) {
  res.json({greeting: 'Good Day, ' + req.params.to + "! - " + req.params.from});
});

app.get('/ge/:to/:from', function (req,res) {
  res.send('Good Evening, ' + req.params.to + "! - " + req.params.from);
});

app.get('/api/ge/:to/:from', function (req,res) {
  res.json({greeting: 'Good Evening, ' + req.params.to + "! - " + req.params.from});
});

app.get('/gn/:to/:from', function (req,res) {
  res.send('Good Night, ' + req.params.to + "! - " + req.params.from);
});

app.get('/api/gn/:to/:from', function (req,res) {
  res.json({greeting: 'Good Night, ' + req.params.to + "! - " + req.params.from});
});
