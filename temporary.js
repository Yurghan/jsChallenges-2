// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

const bitwiseAND = (a) => {
  let sum = 0;
  while (a) {
    sum += a;
    a--;
  }
  return sum;
};

console.log(bitwiseAND(4));
