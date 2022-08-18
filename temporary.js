const possibleBonus = (a, b) => (a >= b ? false : a + 6 >= b);

console.log(possibleBonus(1, 9));
