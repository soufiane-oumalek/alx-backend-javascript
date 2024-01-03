export default function appendToEachArrayValue(array, appendString) {
  array.forEach((value, idx) => {
    array[idx] = appendString + value; // eslint-disable-line no-param-reassign
  });

  return array;
}
