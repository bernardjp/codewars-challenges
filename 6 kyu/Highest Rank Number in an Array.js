/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(array){
  return [... new Set(array)]
    .map(num => {
      return { num, freq: (array.filter(num2 => num === num2)).length };
    })
    .reduce((acc, value) => {
      if (value.freq > acc.freq) return value;
      else if (value.freq === acc.freq) return value.num > acc.num ? value : acc;
      return acc;
    })
    .num;
}