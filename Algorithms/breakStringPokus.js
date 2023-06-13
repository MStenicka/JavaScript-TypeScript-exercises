/*
Create a function called breakString that takes a string (text) and an integer 'n' as an input, which has to be equal or larger than 1 (if not, consider it to be 1) and returns a string where each vowel is duplicated 'n' times.
*/

function breakString(string, n) {
  let vowels = 'aeiouAEIOU';
  let newString = string.split('');
  let results = [];
  if (n <= 1) {
    return string;
  } else {
    for (let i = 0; i < vowels.length; i++) {
      if (vowels.includes(newString[i])) {
        for (let j = 0; j < n; j++) {
          results.push(newString[i]);
        }
      } else {
        results.push(newString[i]);
      }
    }
  }
  return results.join('');
}

console.log(breakString('hello', 3));
console.log(breakString('wooden door', 3));
console.log(breakString('black widow', -5));
