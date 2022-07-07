/*
Description:

Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

  s1 = "A aaaa bb c"

  s2 = "& aaa bbb c d"

  s1 has 4 'a', 2 'b', 1 'c'

  s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

  s1 = "my&friend&Paul has heavy hats! &"
  s2 = "my friend John has many many friends &"
  mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

  s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
  s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
  mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

  s1="Are the kids at home? aaaaa fffff"
  s2="Yes they are here! aaaaa fffff"
  mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

*/

export default function(s1, s2) {
  const filteredChars1 = filterChars(s1);
  const filteredChars2 = filterChars(s2);
  const groupedChars1 = groupChars(filteredChars1);
  const groupedChars2 = groupChars(filteredChars2);

  const highestOcurranceChars = getCharsOcurrance(groupedChars1, groupedChars2);
  const sortedCharsList = sortChars(highestOcurranceChars);
  
  return sortedCharsList
    .map(c => c[0] === '3' ? c.replace('3', '=') : c)
    .join('/')
}

function filterChars(string) {
  const charsList = string.split('');
  return charsList.filter(c => (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122)).sort();
}

function groupChars(charsArray) {
  const groupedChars = [''];
  
  charsArray.forEach((char, i) => {
    if (i === 0) {
      groupedChars[groupedChars.length - 1] += char;
    } else if (char !== groupedChars[groupedChars.length - 1][0]) {
      groupedChars.push(char);
    } else {
      groupedChars[groupedChars.length - 1] += char;
    }
  })

  return groupedChars.filter(c => c.length > 1);
}

function getCharsOcurrance(s1, s2) {
  const highestOcurrenceChars = [];

  for(let i = 97; i <= 122; i++) {
    const c = String.fromCharCode(i);
    const currentStr1 = s1[0];
    const currentStr2 = s2[0];
    const currentChar1 = s1.length !== 0 ? currentStr1[0] : null;
    const currentChar2 = s2.length !== 0 ? currentStr2[0] : null;
    
    // iteration escape condition (both lists empty)
    if (!currentChar1 && !currentChar2) continue;

    if (currentChar1 === c && currentChar2 === c) {
      if (currentStr1.length > currentStr2.length) {
        highestOcurrenceChars.push(`1:${currentStr1}`);
      }

      if (currentStr1.length < currentStr2.length) {
        highestOcurrenceChars.push(`2:${currentStr2}`);
      }

      if (currentStr1.length === currentStr2.length) {
        highestOcurrenceChars.push(`3:${currentStr1}`);
      }
      
      s1.shift();
      s2.shift();
      continue;
    }

    if (currentChar1 === c && currentChar2 !== c) {
      highestOcurrenceChars.push(`1:${currentStr1}`);
      s1.shift();
      continue;
    }

    if (currentChar1 !== c && currentChar2 === c) {
      highestOcurrenceChars.push(`2:${currentStr2}`);
      s2.shift();
      continue;
    }
  }

  return highestOcurrenceChars;
}

function sortChars(charList) {
  const sortedCharList= [...charList]
    // ---> sort the strings by length
    .sort((a, b) => b.length - a.length)
    // ---> group each string by length on their own subarray 
    .reduce((acc, c, i) => {
      if (i === 0) return [...acc, [c]];
      if (acc[acc.length - 1][0].length !== c.length) return [...acc, [c]];
      
      acc[acc.length - 1].push(c);
      return acc;
    }, [])
    // ---> sort each subarray
    .map(subarray => {
      return subarray
        // ---> sort each subarray by ascending cathegory order -> 1:..., 2:..., 3:...
        .sort((a, b) => {
          return Number(a[0]) - Number(b[0])
        })
        // ---> sort each subarray with the same cathegory
        // by ascending alphabetical order -> 1:aaa, 1:bbb, 1:ccc, ...
        .sort((a, b) => {
          if (a[0] === b[0]) {
            return a[2].charCodeAt() - b[2].charCodeAt();
          }
          return;
        });
    })
    // ---> flatten all the subarrays into one
    .reduce((acc, c) => {
      return acc.concat(c);
    }, []);

  return sortedCharList;
}
