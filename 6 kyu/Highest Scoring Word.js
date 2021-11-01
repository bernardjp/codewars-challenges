/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(str){
  return str
    .split(' ')
    .map(word => {
      const value = word.split('')
        .map(char => char.charCodeAt() - 96)
        .reduce((acc, charVal) => acc + charVal);

      return { word, value };
    })
    .reduce((max, word) => word.value > max.value ? word : max)
    .word;
}