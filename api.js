// first test fanOut
// args: Array, callback()
// function square(n) {return n * n}
// given fanOut([1,2,3], square)
// => [1, 4, 9]
// can't use .map()
// ['🐔', '🐮'].map(cook);
// =>['🍗', '🍔']
function map(array, callback) {
  const output = [];
  for (var i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
}
/*
  Function is a predicate, to test each element of
  the array. Return a value that coerces to true
  to keep the element, or to false otherwise
*/
function filter(array, predicate) {
  return [];
}

const api = {
  map,
  filter
};

module.exports = api;
