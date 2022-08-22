const generation = (x, y) => {
  const template = [
    ['great grandfather', 'grandfather', 'father', 'me!', 'son', 'grandson', 'great grandson'],
    ['great grandmother', 'grandmother', 'mother', 'me!', 'daughter', 'granddaughter', 'great granddaughter'],
  ];

  const index1 = y === 'm' ? 0 : 1;
  const index2 = x + 3;

  return template[index1][index2];
};

console.log(generation(1, 'f'));
