// Create a function which takes a array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

const multiply = (arr) => {
  return (multiplier) => {
    return arr.map((el) => el * multiplier);
  };
};
