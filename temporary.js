// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

const multiply = (arr) => {
  return (multiplier) => {
    return arr.map((el) => el * multiplier);
  };
};

console.log(multiply([1, 2, 3])(2));
