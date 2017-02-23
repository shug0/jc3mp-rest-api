// Node modules
const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');

// Custom modules
const config = require('./config');
const loadRoutes = require('./api/index');

// Launch Express
const port = config.port;
const app = express();

// Allow Crossorigin
app.use(cors());

// load routes
loadRoutes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.json({
    error: err
  })
});


var server = http.createServer(app);
server.listen(port);
