// Node modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const http = require('http');

// Custom modules
const config = require('./config');
const loadRoutes = require('./routes/loader');

// Launch Express
const app = express();

loadRoutes(app);

// Dunno why using it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: fal

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.json({
    error: err
  })
});

var server = http.createServer(app);
server.listen(config.port);
