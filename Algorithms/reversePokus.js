/*
2. use reverse order without .reverse
console.log(reverse("lleW ,enod taht saw ton taht .drah ?eeS")); 
*/

function reverse(string) {
  let words = string.split(' ');
  let result = [];
  let word = '';
  for (let i = 0; i < words.length; i++) {
    word = '';
    for (let j = words[i].length - 1; j >= 0; j--) {
      word += words[i][j];
    }
    result.push(word);
  }
  result = result.join(' ');
  return result;
}

console.log(reverse('lleW ,enod taht saw ton taht .drah ?eeS'));
