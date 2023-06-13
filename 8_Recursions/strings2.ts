// Strings again
// Given a string, write a recursive (no loops) method which returns a new string with all the lowercase 'x' chars removed.

function removeCharacters(word: string, x: string): string {
  if (word.length == 0) {
    return '';
  }
  if (word.charAt(0) === x) {
    return removeCharacters(word.substring(1), x);
  }
  return word.charAt(0) + removeCharacters(word.substring(1), x);
}
console.log(removeCharacters('xbxdxjbxlx', 'x'));
