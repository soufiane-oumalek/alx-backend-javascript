function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((value, key, originalMap) => {
    if (value === 1) {
      originalMap.set(key, 100);
    }
  });

  return map;
}

export default updateUniqueItems;
