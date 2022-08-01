const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const weekDaysObject = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const weekDays = Object.keys(weekDaysObject);

const weekDay = (scheduleTarget) => {
  const obj = {};
  obj[scheduleTarget] = weekDaysObject[scheduleTarget];
  return obj;
};

const arrayAnimals = species.reduce((acc, next) => [...acc, next.name], []);

const animalName = (scheduleTarget) => {
  const allAnimals = [];
  species.forEach((specie) => allAnimals.push({ [specie.name]: specie.availability }));
  return allAnimals.find((element) => Object.keys(element)[0] === scheduleTarget)[scheduleTarget];
};

const getSchedule = (scheduleTarget) => {
  if (weekDays.some((e) => e === scheduleTarget)) {
    return weekDay(scheduleTarget);
  }
  const isTrue = arrayAnimals.some((element) => element === scheduleTarget);
  if (isTrue) {
    return animalName(scheduleTarget);
  }
  return weekDaysObject;
};

module.exports = getSchedule;
