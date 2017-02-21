var express = require('express');
var router = express.Router();

// ---------- Return all users
router.get('/', function(req, res, next) {
  res.json(jcmp.players);
});

// ---------- Return a user by giving his steamId
router.param('steamId', function (req, res, next, steamId) {
  next();
});

router.get('/:steamId', function (req, res, next) {
  res.json(jcmp.players.find(player => player.client.steamId === req.params.steamId));
});

// ---------- Kick a user : give steamId
router.get('/:steamId/kick', function (req, res, next) {
  const player = jcmp.players.find(player => player.client.steamId === req.params.steamId);
  player.Kick('Kicked for fun (yolo) !')
});

module.exports = router;
