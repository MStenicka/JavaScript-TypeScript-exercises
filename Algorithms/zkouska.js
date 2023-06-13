export function countTriples(string) {
  let newString = string.split('');
  let count = 0;
  for (let i = 0; i < newString.length; i++) {
    if (string[i] === string[i] && string[i + 1] === string[i + 2]) {
      count++;
    }
  }
  return count;
}
