// Strings
// Given a string, write a recursive (no loops) method which returns a new string with all the lowercase 'x' chars changed to 'y' chars.

function characterChanger(
  word: string,
  newChar: string,
  removedChar: string,
): string {
  if (word.length === 0) {
    return '';
  }

  const firstChar = word.charAt(0);
  const restOfString = word.substring(1);

  if (firstChar === removedChar) {
    return newChar + characterChanger(restOfString, newChar, removedChar);
  } else {
    return firstChar + characterChanger(restOfString, newChar, removedChar);
  }
}

const testString = 'Mx friend has a xellow Xiaomi phone.';

// Expected output: "My friend has a yellow Xiaomi phone."
console.log(characterChanger(testString, 'y', 'x'));
