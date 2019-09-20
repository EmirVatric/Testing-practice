const { capitalize, stringReverse, calculator } = require('./index');

test('Capitalize string', () => {
  expect(capitalize('test')).toBe('Test');
});

test('It returns reversed string', () => {
  expect(stringReverse('test')).toBe('tset');
});

test('It adds two numbers', () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test('It substracts two numbers', () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});

test('It multiplies two numbers', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('It divides two numbers', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});
