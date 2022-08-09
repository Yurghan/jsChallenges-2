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

console.log(allAboutStrings('AanMn'));
