/*
2. use reverse order without .reverse
console.log(reverse("lleW ,enod taht saw ton taht .drah ?eeS")); 
*/

function reverse(str) {
  let arr = str.split(' ');
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split('');
    let correctWord = '';

    for (let j = word.length - 1; j >= 0; j--) {
      correctWord += word[j];
    }
    console.log(correctWord);
    result.push(correctWord);
  }

  return result.join(' ');
}
console.log(reverse('lleW ,enod taht saw ton taht .drah ?eeS'));
//reverse('lleW ,enod taht saw ton taht .drah ?eeS');
