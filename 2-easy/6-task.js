// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

const minMax = (arr) => {
  arr.sort((a, b) => a - b);
  return [arr.at(0), arr.at(-1)];
};
