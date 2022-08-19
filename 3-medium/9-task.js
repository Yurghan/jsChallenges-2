// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).
// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

const addName = (obj, name, value) => {
  return { ...obj, [name]: value };
};
