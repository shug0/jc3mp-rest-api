var express = require('express');
var router = express.Router();

// --------------- ROUTES --------------- //
var index = require('./index');
var players = require('./players');

const loadRoutes = (app) => {
  app.use('/', index);
  app.use('/players', players);
}

module.exports = loadRoutes;
