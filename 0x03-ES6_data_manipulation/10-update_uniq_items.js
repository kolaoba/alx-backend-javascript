const updateUniqItems = (items) => items.forEach((item, key, map) => {
  if (item === 1) {
    map.set(key, 100);
  }
  return item;
});

export default updateUniqItems;
