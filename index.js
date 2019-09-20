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

const caeser = (string, number) => {

  let checkCapital = (letter) => {
    let ascii = letter.charCodeAt()
    if (65 <= ascii && ascii <= 90) {
      return true
    }
    return false
  }
  let isAlphabet = (letter) => {
    let ascii = letter.charCodeAt()
    if (65 <= ascii && ascii <= 90 || 97 <= ascii && ascii <= 122) {
      return true
    }
    return false

  }
  let getLetterFromOrder = (number, isCapital) => {
    if (isCapital) {
      return String.fromCharCode(number + 64);
    } else {
      return String.fromCharCode(number + 96);
    }
  }

  let getLetterOrder = (letter) => {
    let ascii = letter.charCodeAt()
    if (ascii <= 91) {
      return ascii - 64;
    } else {
      return ascii - 96;
    }
  }
  let rotate = (letterOrder, number) => {
    if ((letterOrder + number) % 26 == 0) {
      return 26;
    }
    return (letterOrder + number) % 26;
  }
  let result = []
  let letter;
  for (let i = 0; i < string.length; i++) {
    letter = string.charAt(i)
    if (!isAlphabet(letter)) {
      result.push(letter)
    } else {
      let isCapital = checkCapital(letter)
      let order = getLetterOrder(letter)
      let newLetterOrder = rotate(order, number);
      let newLetter = getLetterFromOrder(newLetterOrder, isCapital)
      result.push(newLetter)
    }
  }
  return result.join("")
}

module.exports = {
  capitalize,
  stringReverse,
  calculator,
  caeser
};