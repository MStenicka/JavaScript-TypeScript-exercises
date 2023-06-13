//https://www.hackerrank.com/challenges/strong-password/problem

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let numberToAddCharacters = 0;

  let typesOfCharacters = 0;
  if (password.match(/[0-9]/)) {
    typesOfCharacters++;
  }
  if (password.match(/[a-z]/)) {
    typesOfCharacters++;
  }
  if (password.match(/[A-Z]/)) {
    typesOfCharacters++;
  }
  if (password.match(/[!@#$%^&*()-+-]/)) {
    typesOfCharacters++;
  }
  let missingCharacters = 6 - n;
  let missingTypesCharacters = 4 - typesOfCharacters;
  if (missingCharacters > missingTypesCharacters) {
    numberToAddCharacters = missingCharacters;
  } else {
    numberToAddCharacters = missingTypesCharacters;
  }
  console.log(numberToAddCharacters);
  return numberToAddCharacters;
}

minimumNumber(7, 'AUzs-nV');
