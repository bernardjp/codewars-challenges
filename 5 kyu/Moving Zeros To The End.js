/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a",1,0,0,0,0,0,0,0,0]) // returns[false,1,1,2,1,3,"a",0,0]
*/

export default function(arr) {
  const sortedArr = [...arr];
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sortedArr[j] === 0) {
      sortedArr.push(sortedArr[j]);
      sortedArr.splice(j, 1);
    } else {
      j++;
    }
  }
  
  return sortedArr;
}

// export default function(arr) {
//   const zerosArr = [];
//   const withoutZerosArr = [];

//   arr.forEach(num => {
//     if (num === 0) {
//       zerosArr.push(num)
//     } else {
//       withoutZerosArr.push(num);
//     }    
//   })

//   return [...withoutZerosArr, ...zerosArr];
// }
