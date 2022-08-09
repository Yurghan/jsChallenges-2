// Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.
// towerHanoi(3) ➞ 7

function towerHanoi(discs) {
  return Math.pow(2, discs) - 1;
}
