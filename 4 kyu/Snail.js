/*
nail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/

export default function(array) { 
  const newArray = [];
  let check = 'forward';

  while (array.length !== 0) {
    if (check === 'forward') {
      const arr = array.shift();
  
      arr.forEach((val, i) => {
        newArray.push(val);
        if (i === arr.length - 1) {
          check = 'down';
        }
      });
    }
  
    if (check === 'down') {
      array.forEach((arr, i) => {
        const lastVal = arr.pop();
        newArray.push(lastVal);
        
        if (i === array.length - 1) {
          check = 'backward';
        }
      })
    }
  
    if (check === 'backward') {
      const arr = array.pop().reverse();
  
      arr.forEach((val, i) => {
        newArray.push(val);
        if (i === arr.length - 1) {
          check = 'up';
        }
      });
    }
  
    if (check === 'up') {
      for (let i = array.length - 1; i >= 0; i--) {
        const firstVal = array[i].shift();
        newArray.push(firstVal);
        if (i === 0) {
          check = 'forward';
        }
      }
    }
  }

  return newArray;
}
