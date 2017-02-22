var express = require('express');
var router = express.Router();

// ---------- Return all users
router.get('/', function(req, res, next) {
  res.json(jcmp.players);
});

router.param('steamId', function (req, res, next, steamId) {
  next();
});

// ---------- Return a user by giving his steamId
router.get('/:steamId', function (req, res, next) {
  const player = jcmp.players.find(player => player.client.steamId === req.params.steamId);
  player ? res.json(player) : res.json({ error: 'user not found'});
});

// ---------- Kick a user : give steamId
router.get('/:steamId/kick', function (req, res, next) {
  const player = jcmp.players.find(player => player.client.steamId === req.params.steamId);
  player ? player.Kick('Kicked for fun (yolo) !') : res.json({ error: 'user not found'});
});

module.exports = router;
