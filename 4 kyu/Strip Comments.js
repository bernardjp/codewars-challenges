/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas

The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

export default function(input, markers) {
  let isComment = false;
  let textFiltered = [];

  input.split('').forEach((c, ind, arr) => {
    if (!isComment) {
      markers.forEach(marker => {
        if (c === marker) {
          isComment = true;
          arr[ind - 1] === ' ' && textFiltered.pop();
        }
      })

      if(!isComment) textFiltered.push(c);
    }

    if (isComment) {
      if (ind === arr.length - 1) {
        isComment = false;
      }
      if (c === '\n') {
        isComment = false;
        textFiltered.push(c);
      }
    }
  });

  return textFiltered.join('');
}
