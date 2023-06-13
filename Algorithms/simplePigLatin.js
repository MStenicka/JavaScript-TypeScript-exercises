function pigIt(str) {
  //Code here
  let words = str.split(' ');
  let n = words.length;
  let word = '';
  let result = '';
  for (let i = 0; i < n - 1; i++) {
    word = words[i].slice(1, words[i].length) + words[i].slice(0, 1) + 'ay ';
    result += word;
  }
  if (words[n - 1].length > 1) {
    word =
      words[n - 1].slice(1, words[n - 1].length) +
      words[n - 1].slice(0, 1) +
      'ay';
  } else {
    word = words[n - 1];
  }
  result += word;
  return result;
}

console.log(pigIt('Pig latin is cool !'));
