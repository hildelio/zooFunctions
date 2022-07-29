const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const filtered = (a) => species.filter((element) => element.id === a)[0];
  return ids.map(filtered);
};

module.exports = getSpeciesByIds;
