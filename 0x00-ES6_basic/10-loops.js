export default function appendToEachArrayValue(array, appendString) {
  for (let i = 0; i < array.length; i += 1) {
    const idx = i; // Store the index separately
    array[idx] = appendString + array[idx]; // eslint-disable-line no-param-reassign
  }

  return array;
}
