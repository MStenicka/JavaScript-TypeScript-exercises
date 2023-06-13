// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
function firstNonRepeatingLetter(s) {
  //Add your code here
  s = s.split('');
  let sliced = [];
  let stack = [];
  if (s.length == 1) {
    return s[0];
  } else {
    for (let i = 0; i < s.length; i++) {
      sliced = s.slice(i + 1);
      if (!sliced.includes(s[i]) && !stack.includes(s[i])) {
        return s[i];
        break;
      } else {
        stack.push(s[i]);
      }
    }
  }
}

// console.log(firstNonRepeatingLetter('a'));
// console.log(firstNonRepeatingLetter('stress'));
console.log(firstNonRepeatingLetter('moonmen'));
