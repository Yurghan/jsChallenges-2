// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

const generation = (x, y) => {
  const template = [
    ['great grandfather', 'grandfather', 'father', 'me!', 'son', 'grandson', 'great grandson'],
    ['great grandmother', 'grandmother', 'mother', 'me!', 'daughter', 'granddaughter', 'great granddaughter'],
  ];

  const index1 = y === 'm' ? 0 : 1;
  const index2 = x + 3;

  return template[index1][index2];
};
