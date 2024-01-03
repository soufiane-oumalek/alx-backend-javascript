export default function appendToEachArrayValue(array, appendString) {
  const otherArray = [];
  for (const value of array) {
    otherArray.push(appendString + value);
  }

  return otherArray;
}
