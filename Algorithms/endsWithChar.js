/*
1.counts how many unique words end with the given character
let inputS = "all is well that ends well";
let inputC = "l";
*/

const { count } = require('yargs');

export function endsWithChar(string, inputC) {
  let words = string.split(' ');
  let count = 0;
  let uniqueWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].endsWith(inputC) && !uniqueWords.includes(words[i])) {
      count++;
      uniqueWords.push(words[i]);
    }
  }
  console.log(uniqueWords);
  return count;
}

console.log(endsWithChar('all is well that ends well', 'l'));
