const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => species
  .filter((a) => a.name === animal)[0].residents.every((e) => e.age >= age);

module.exports = getAnimalsOlderThan;
