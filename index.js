const capitalize = (string) => string.split('')[0].toUpperCase() + string.slice(1);

const stringReverse = (string) => string.split('').reverse().join('');

const Calculator = () => {
  const add = (a, b) => a + b;
  const substract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;


  return {
    add,
    substract,
    multiply,
    divide,
  };
};


module.exports = { capitalize, stringReverse, Calculator };
