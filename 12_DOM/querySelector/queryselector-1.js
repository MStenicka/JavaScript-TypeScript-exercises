// 1. store the element that says 'The King' in the 'king' variable.
// console.log it.
const king = document.querySelector('.asteroid#b325');
console.log(king);

// 2. store 'The Businessman' and 'The Lamplighter' in the 'businessLamp' variable.
// console.log each of them.
const businessLamp = document.querySelectorAll('.asteroid.big');
businessLamp.forEach((element) => console.log(element));

// 3. store 'The King' and 'The Conceited Man' in the 'conceitedKing' variable.
// alert them one by one.
const conceitedKing = document.querySelectorAll(
  '.asteroid#b325, .asteroid.b326',
);
conceitedKing.forEach((element) => alert(element.textContent));

// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter' in the 'noBusiness' variable.
// console.log each of them.
const noBusiness = document.querySelectorAll(
  '.asteroid#b325, .asteroid.b326, .asteroid.b329',
);
noBusiness.forEach((element) => console.log(element));
