// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence: "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function pangram(sentence) {
  sentence = sentence.toUpperCase();
  let letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  let index = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (letters.includes(sentence[i])) {
      index = letters.indexOf(sentence[i]);
      letters.splice(index, 1);
    }
    console.log(letters);
  }
  if (letters.length == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(pangram('The quick brown fox jumps over the lazy dog'));
