// Write a function redundant that takes in a string str and returns a function that returns str.
// const f1 = redundant("apple")
// f1() ➞ "apple"

const redundant = (str) => () => str;
