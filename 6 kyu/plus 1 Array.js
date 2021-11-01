/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

  - the array can't be empty
  - only non-negative, single digit integers are allowed

Return nil (or your language's equivalent) for invalid inputs.
Examples

For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]
*/

function upArray(array){
  const newArr = [...array];
  
  if (array.length === 0 || array.some(num => num < 0 || num > 9)) {
    return null;
  };
  
  newArr[newArr.length - 1]++;

  for (let i = array.length - 1; newArr[i] === 10; i--) {
    newArr[i] = 0;
    if (i === 0) {
      newArr.unshift(1);
    } else {
      newArr[i - 1]++;
    }
  }

  return newArr;
}