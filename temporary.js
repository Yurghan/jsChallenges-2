const addName = (obj, name, value) => {
  return { ...obj, [name]: value };
};

console.log(addName({ piano: 500 }, 'Brutus', 400));
