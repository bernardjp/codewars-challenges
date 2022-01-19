/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= input.length <= 100
*/

function challenge(string) {
  const newString = string.replace('()', '');

  if (string === newString) return false;

  if (newString.length === 0) return true;

  return challenge(newString);
}

export default challenge;
