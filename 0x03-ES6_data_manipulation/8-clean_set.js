function cleanSet(xSet, xStartString) {
  if (!xSet || !xStartString || !(xSet instanceof Set) || typeof xStartString !== 'string') {
    return '';
  }

  let result = '';
  xSet.forEach((value) => {
    if (value.startsWith(xStartString)) {
      const cleanedValue = value.slice(xStartString.length);
      result += (result.length === 0 ? '' : '-') + cleanedValue;
    }
  });

  return result;
}

export default cleanSet;
