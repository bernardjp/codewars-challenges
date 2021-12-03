/*
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

Hint: See Fibonacci sequence
Ref: http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216
*/

export default function perimeter(n) {
  const squaresSides = [ 0, 1 ];

  while(n > 0){
    const last = squaresSides.length - 1;
    const prev = squaresSides.length - 2;
    squaresSides.push(squaresSides[prev] + squaresSides[last]);
    n--;
  }

  return squaresSides.reduce((acc, val) => acc + val, 0) * 4;
}
