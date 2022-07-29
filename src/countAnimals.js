const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = ({ specie = false, sex = false } = {}) => {
  if (!specie && !sex) {
    const allAnimals = {};
    species.forEach((e) => { allAnimals[e.name] = e.residents.length; });
    return allAnimals;
  }
  const theAnimal = species.find((e) => e.name === specie).residents;
  if (!sex) {
    return theAnimal.length;
  }
  const animalSexn = theAnimal.filter((e) => e.sex === sex).length;
  return animalSexn;
};

module.exports = countAnimals;
