import { Domino } from './domino';

function initializeDominoes() {
  const dominoes: Domino[] = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  const tiles: string[] = [];
  dominoes.forEach(function (domino) {
    tiles.push(`[${domino.getLeft()}, ${domino.getRight()}]`);
  });
  console.log(tiles.join(', '));
}

// You have the list of dominoes created by the initializeDominoes() function.
// Each domino has 2 sides and there are multiple methods where you can read them.
//
// Your task is to implement the sortDominoes() function which sorts the dominoes
// in a way that adjacent dominoes have the same number on their adjecent sides
// eg: [2, 4], [4, 3], [3, 5] ...
// Do this by repeatedly swapping 2 members of the dominoes array.
//
// Hint: it doesn't matter which domino is the first in the list of dominoes,
// they all form a cyclical sequence which eventually reaches back to where
// you've started.
// Hint: feel free to create a separate function for swapping 2 values of an array
// and use that in the sortDominoes function to practice separation of concerns

function sortDominoes(dominoes: Domino[]) {
  for (let i = 0; i < dominoes.length - 1; i++) {
    for (let j = i + 1; j < dominoes.length; j++) {
      if (dominoes[i].getRight() === dominoes[j].getLeft()) {
        [dominoes[i + 1], dominoes[j]] = [dominoes[j], dominoes[i + 1]];
        break;
      }
    }
  }
}

const dominoes = initializeDominoes();

sortDominoes(dominoes);

print(dominoes);

export { sortDominoes };
