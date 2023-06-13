/*
Create a function called breakString that takes a string (text) and an integer 'n' as an input, which has to be equal or larger than 1 (if not, consider it to be 1) and returns a string where each vowel is duplicated 'n' times.
*/

function breakString(str, n) {
  if (n <= 1) {
    n = 1;
    return str;
  } else {
    let result = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[a,e,i,o,u,A,E,I,O,U]/)) {
        for (let j = 1; j <= n; j++) {
          result.push(str[i]);
        }
      } else {
        result.push(str[i]);
      }
    }
    let duplicated = result.join('');
    return duplicated;
  }
}

console.log(breakString('bread', 5));
console.log(breakString('Ale', 5));

// function breakString( str, n) {
//   if(n <= 1) {
//     return str; // tuna som mal povodne  return "should be > than 1 a nie str cize posledny example mi neukazalo dobre
//   }
//   let wovels = "aeiouAEIOU";
//   let result = "";
//   for(let i = 0; i < str.length; i++){
//     let char = str.charAt(i);
//     if(wovels.includes(char)) {
//       for(let j = 0; j < n; j ++) {
//          result += char;
//       }}
//       else{
//         result += char;

//       }
//   }
//   return result;
// }
console.log(breakString('hello', 2));
console.log(breakString('wooden door', 3));
console.log(breakString('black widow', -5));
