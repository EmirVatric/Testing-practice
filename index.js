const capitalize = (string) => string.split('')[0].toUpperCase() + string.slice(1);

const stringReverse = (string) => string.split('').reverse().join('');

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  }
};


module.exports = { capitalize, stringReverse, calculator };
