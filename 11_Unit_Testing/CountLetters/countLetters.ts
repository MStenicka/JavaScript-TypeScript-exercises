'use strict';
export function countLetters(str: string): { [key: string]: number } {
  const letterCount: { [key: string]: number } = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    if (letter.match(/[a-z]/i)) {
      if (letterCount.hasOwnProperty(letter)) {
        letterCount[letter]++;
      } else {
        letterCount[letter] = 1;
      }
    }
  }

  return letterCount;
}
