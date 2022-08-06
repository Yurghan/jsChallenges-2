// Create a function that takes two numbers as arguments and returns their sum.
const addition = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') return 'Submit 2 numbers';
  return a + b;
};
