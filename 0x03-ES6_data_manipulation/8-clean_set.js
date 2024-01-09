function cleanSet(inputSet, startString = '') {
  if (!(inputSet instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const cleanedValues = Array.from(inputSet)
    .filter((value) => value && value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return cleanedValues.join('-');
}

export default cleanSet;
