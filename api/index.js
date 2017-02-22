var express = require('express');
var router = express.Router();

// --------------- ROUTES --------------- //
var players = require('./players/players');

const loadRoutes = (app) => {

  app.use('/', router.get('/', function(req, res, next) {
    res.json({ message: 'Nothing to see here sorry.' });
  }));

  app.use('/players', players);
}

module.exports = loadRoutes;
