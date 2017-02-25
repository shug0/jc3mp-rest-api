const express = require('express');
const router = express.Router();

// --------------- ROUTES --------------- //
const players = require('./players/players');

const loadRoutes = (app) => {

  app.use('/', router.get('/', function(req, res, next) {
    res.json({ message: 'Nothing to see here sorry.' });
  }));

  app.use('/players', players);
};

module.exports = loadRoutes;
