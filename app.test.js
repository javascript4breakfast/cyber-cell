const api = require('./api');

const { map, filter } = api;

// theoretical functions
const square = n => n * n;
const plusOne = n => n += 1;
const isBob = name => name === 'bob';

test('map iterates and applys callback', () => {
  const testArr = [1, 2, 3];
  const result = map(testArr, square);

  expect(result).toEqual([1, 4, 9]);
});

test('map iterates and applys different callback', () => {
  const testArr = [4, 5, 6];
  const result = map(testArr, plusOne);

  expect(result).toEqual([5, 6, 7]);
});

test('filters an array', () => {
  const testArr = ['bob', 'sally', 'jerry'];
  const result = filter(testArr, isBob);

  expect(result).toEqual(['bob']);
});
