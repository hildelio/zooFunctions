const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const person = employees.find((c) => c.id === id);
  const animalId = person.responsibleFor[0];
  const specie = species.find((s) => s.id === animalId);
  const oldest = specie.residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(oldest);
};

module.exports = getOldestFromFirstSpecies;
