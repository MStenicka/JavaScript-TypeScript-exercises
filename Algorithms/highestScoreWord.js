function high(x) {
  let myWords = x.split(' ');
  let highestValue = 0;
  let highestWord = '';

  for (let word of myWords) {
    let tmpValue = 0;
    for (let ch of word) {
      tmpValue += ch.charCodeAt(0) - 96;
    }
    if (tmpValue > highestValue) {
      highestValue = tmpValue;
      highestWord = word;
    }
  }

  return [highestWord, highestValue];
}

console.log(high('man i need a taxi up to ubud'));
