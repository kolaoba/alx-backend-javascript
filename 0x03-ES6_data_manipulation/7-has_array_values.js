const hasValuesFromArray = (set, array) => {
  let result = true;
  array.forEach((item) => {
    if (!set.has(item)) {
      result = false;
    }
  });
  return result;
};

export default hasValuesFromArray;
