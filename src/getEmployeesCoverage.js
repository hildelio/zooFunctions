const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allEmployees = () => {
  const people = [];
  employees.forEach((employee) => {
    const { id, firstName, lastName, responsibleFor } = employee;
    const animals = [];
    const region = [];
    responsibleFor.forEach((animalId) => {
      const theAnimal = species.find((a) => a.id === animalId);
      animals.push(theAnimal.name);
      region.push(theAnimal.location);
    });
    const obj = { id, fullName: `${firstName} ${lastName}`, species: animals, locations: region };
    people.push(obj);
  });
  return people;
};
const idByName = (name) => {
  if (employees.some((e) => e.firstName === name || e.lastName === name)) {
    const all = allEmployees();
    const person = employees.find((emp) => emp.firstName === name || emp.lastName === name);
    console.log(person);
    const idFounded = person.id;
    return all.find((e) => e.id === idFounded);
  }
  throw new Error('Informações inválidas');
};

const byId = (id) => {
  if (employees.some((e) => e.id === id)) {
    return allEmployees().find((p) => p.id === id);
  }
  throw new Error('Informações inválidas');
};

function getEmployeesCoverage(param = {}) {
  const { name = false, id = false } = param;
  if (!name && !id) {
    return allEmployees();
  }
  if (name) {
    return idByName(name);
  }
  if (id) {
    return byId(id);
  }
}

module.exports = getEmployeesCoverage;
