const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((e) => {
    if (e.age < 18) {
      child += 1;
    } else if (e.age >= 18 && e.age < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });
  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  let price = 0;
  if (typeof entrants === 'object' && entrants.length > 0) {
    const en = countEntrants(entrants);
    const { child } = en;
    const { adult } = en;
    const { senior } = en;
    const { prices } = data;
    price = (prices.child * child) + (prices.adult * adult) + (prices.senior * senior);
  }
  return price;
};

module.exports = { calculateEntry, countEntrants };
