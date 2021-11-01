/*
Acknowledgments:

I thank yvonne-liu for the idea and for the example tests :)
Description:

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

  Your message is a string containing space separated words.
  You need to encrypt each word in the message using the following rules:
    The first letter must be converted to its ASCII code.
    The second letter must be switched with the last letter
  Keepin' it simple: There are no special characters in the input.

Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

const encryptThis = function(text) {
  return text.split(' ')
    .map(word => {
      const firstChar = word.split('').shift().charCodeAt();
      const chars = word.slice(1).split('');
      const secondChar = chars.shift();
    
      chars.unshift(chars.pop());
      chars.push(secondChar);
      chars.unshift(firstChar);

      return chars.filter(a => a !== undefined).join('');
    })
    .join(' ');
}