const capitalize = (string) => string.split('')[0].toUpperCase() + string.slice(1);

const stringReverse = (string) => string.split('').reverse().join('');

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

const caeser = (string, number) => {
  const checkCapital = (letter) => {
    const ascii = letter.charCodeAt();
    if (ascii >= 65 && ascii <= 90) {
      return true;
    }
    return false;
  };
  const isAlphabet = (letter) => {
    const ascii = letter.charCodeAt();
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      return true;
    }
    return false;
  };
  const getLetterFromOrder = (num, isCapital) => {
    if (isCapital) {
      return String.fromCharCode(num + 64);
    }
    return String.fromCharCode(num + 96);
  };

  const getLetterOrder = (letter) => {
    const ascii = letter.charCodeAt();
    if (ascii <= 91) {
      return ascii - 64;
    }
    return ascii - 96;
  };
  const rotate = (letterOrder, num) => {
    if ((letterOrder + num) % 26 === 0) {
      return 26;
    }
    return (letterOrder + num) % 26;
  };
  const result = [];
  let letter;
  for (let i = 0; i < string.length; i += 1) {
    letter = string.charAt(i);
    if (!isAlphabet(letter)) {
      result.push(letter);
    } else {
      const isCapital = checkCapital(letter);
      const order = getLetterOrder(letter);
      const newLetterOrder = rotate(order, number);
      const newLetter = getLetterFromOrder(newLetterOrder, isCapital);
      result.push(newLetter);
    }
  }
  return result.join('');
};


const arrayAnalysis = (array) => {
  const {
    length,
  } = array;
  const average = parseFloat(((array.reduce((a, b) => a + b)) / array.length).toFixed(2));
  array.sort((a, b) => a - b);
  let min;
  let max;
  if (length === 1) {
    [min] = array;
    max = min;
  } else {
    min = Number(array.slice(0, 1));
    max = Number(array.pop());
  }

  return {
    average,
    min,
    max,
    length,
  };
};


module.exports = {
  capitalize,
  stringReverse,
  calculator,
  caeser,
  arrayAnalysis,
};
