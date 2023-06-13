export function dup(s) {
  //..
  let newS = [];
  for (let word of s) {
    word = word.split('');
    let i = 0;
    while (i < word.length - 1) {
      if (word[i] === word[i + 1]) {
        word.splice(i, 1);
      } else {
        i++;
      }
    }
    word = word.join('');
    newS.push(word);
  }
  return newS;
}

//dup(['abracadabra', 'allottee', 'assessee']);
console.log(
  dup(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo']),
);
