const minMax = (arr) => {
  arr.sort((a, b) => a - b);
  return [arr.at(0), arr.at(-1)];
};

console.log(minMax([1, 2, 22, 3, 4, 5]));
