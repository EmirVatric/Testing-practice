const {
  capitalize, stringReverse, calculator, caeser, arrayAnalysis,
} = require('./index');

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

test('it encrypts lowercase strings', () => {
  expect(caeser('abc', 1)).toBe('bcd');
  expect(caeser('abc', -1)).toBe('zab');
  expect(caeser('xyz', 1)).toBe('yza');
});

test('it encrypts Uppercase strings', () => {
  expect(caeser('ABC', 1)).toBe('BCD');
  expect(caeser('ABC', -1)).toBe('ZAB');
  expect(caeser('XYZ', 1)).toBe('YZA');
});

test('it encrypts alphabet characters and ignore symbols and numbers', () => {
  expect(caeser('231654', 2)).toBe('231654');
  expect(caeser(')_=+*', 2)).toBe(')_=+*');
  expect(caeser('Abc123*', 2)).toBe('Cde123*');
});

test('It returns the avarage of array', () => {
  expect(arrayAnalysis([1, 2, 3]).average).toBe(2);
});

test('It returns smallest number in array', () => {
  expect(arrayAnalysis([1, 2, 3]).min).toBe(1);
});

test('It returns biggest number in array', () => {
  expect(arrayAnalysis([1, 2, 3]).max).toBe(3);
});

test('It returns length of the array', () => {
  expect(arrayAnalysis([1, 2, 3]).length).toBe(3);
});
