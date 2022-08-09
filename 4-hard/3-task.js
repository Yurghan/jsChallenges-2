// Create a function that, given a string with at least three characters, returns an array of its:
// Length.
// First character.
// Last character.
// Middle character, if the string has an odd number of characters. Middle TWO characters, if the string has an even number of characters.
// Index of the second occurrence of the second character in the format "@ index #" and "not found" if the second character doesn't occur again.

function allAboutStrings(str) {
  const result = [];
  const length = str.length;

  result.push(length);
  result.push(str[0]);
  result.push(str[length - 1]);
  length % 2 ? result.push(str[(length + 1) / 2 - 1]) : result.push(str.slice(length / 2 - 1, length / 2 + 1));

  const theIndex = str.split('').indexOf(str[1], 2);
  theIndex === -1 ? result.push('not found') : result.push(`@ index ${theIndex}`);

  return result;
}
