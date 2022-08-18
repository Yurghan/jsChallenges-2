// Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.
// shiftToRight(80, 3) ➞ 10
// shiftToRight(-24, 2) ➞ -6

const shiftToRight = (a, b) => Math.floor(a / Math.pow(2, b));
