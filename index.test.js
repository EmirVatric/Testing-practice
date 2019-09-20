const { capitalize, stringReverse, Calculator } = require('./index');

test('Capitalize string', () => {
  expect(capitalize('test')).toBe('Test');
});

test('It returns reversed string', () => {
  expect(stringReverse('test')).toBe('tset');
});

test('It adds two numbers', () => {
  const calculator = Calculator();
  expect(calculator.add(1, 1)).toBe(2);
});

test('It substracts two numbers', () => {
  const calculator = Calculator();
  expect(calculator.substract(1, 1)).toBe(0);
});

test('It multiplies two numbers', () => {
  const calculator = Calculator();
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('It divides two numbers', () => {
  const calculator = Calculator();
  expect(calculator.divide(8, 2)).toBe(4);
});
