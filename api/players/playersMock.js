const _ = require('lodash');

const playersMocks = [
  { name: 'Shug0', client: { steamId: _.random(1, 99999999999)} },
  { name: 'Zoski', client: { steamId: _.random(1, 99999999999)} },
  { name: 'Scrutch', client: { steamId: _.random(1, 99999999999)} },
  { name: 'Daft Spirit', client: { steamId: _.random(1, 99999999999)} },
  { name: 'KevinDu33', client: { steamId: _.random(1, 99999999999)} },
];


module.exports = playersMocks;
