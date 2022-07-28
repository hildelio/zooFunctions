const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const filtered = (n) => n.firstName === employeeName || n.lastName === employeeName;
  const found = employees.find(filtered);
  return found === undefined ? {} : found;
};

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
