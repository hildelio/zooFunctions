const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees.some((e) => e.managers.includes(id));
// console.log(isManager());
const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const manager = employees.filter((e) => e.managers.includes(managerId));
    const fullName = manager.map((f) => `${f.firstName} ${f.lastName}`);
    return fullName;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
