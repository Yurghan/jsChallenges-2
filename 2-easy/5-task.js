// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
// shiftToLeft(5, 2) ➞ 20
// shiftToLeft(10, 3) ➞ 80
const shiftToLeft = (x, y) => x * Math.pow(2, y);
