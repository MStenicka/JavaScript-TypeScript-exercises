/*
1.counts how many unique words end with the given character
let inputS = "all is well that ends well";
let inputC = "l";
*/
function endsWithChar(string, ch) {
  let arrS = string.split(' ');
  let counter = 0;
  let usedWords = [];

  for (let i = 0; i < arrS.length; i++) {
    if (arrS[i].endsWith(ch) && !usedWords.includes(arrS[i])) {
      counter++;
      usedWords.push(arrS[i]);
    }
  }

  return counter;
}
console.log(endsWithChar('all is well that ends well', 'l'));
