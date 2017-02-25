const _ = require('lodash');

const pseudoList = [
  'Shug0',
  'Zoski',
  'Scrutch',
  'Daft Spirit',
  'KevinDu33',
];

const playersMocks = pseudoList.map((pseudo) => ({
  name: pseudo,
  client: {
    steamId: _.random(1, 99999999999),
    ping: _.random(1, 200)
  }
}));

module.exports = playersMocks;
