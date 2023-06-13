function alphabetPosition(string) {
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
  let result = '';
  string = string.toUpperCase();
  for (let i = 0; i < string.length; i++) {
    result += letters.indexOf(string[i]) + 1;
  }
  result = result.toString();
  result = result.split('').join(' ');
  return result;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
