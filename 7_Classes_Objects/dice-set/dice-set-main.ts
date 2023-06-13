import { DiceSet } from './dice-set';

// You have a `DiceSet` class which has an array of 6 dice in it
// You can manage the dice inside with the following methods:
//   - roll() - rolls all the dice
//   - getCurrent() - returns the current values of the dice
//   - reroll() - re-rolls all the dice
//   - reroll(n) - re-rolls a specific die; n is between 1 and 6 inclusive
//
// Create a function called rerollTillAllSix() that takes a dice set
// as a parameter and keeps calling the methods on it until all the
// dice show the value 6. The function doesn't need to return anything.

function rerollTillAllSix(diceSet: DiceSet) {
  let rerollCounter: number = 0;

  let currentDice = diceSet.getCurrent();

  while (!currentDice.every((value) => value === 6)) {
    for (let i = 0; i < currentDice.length; i++) {
      if (currentDice[i] !== 6) {
        diceSet.reroll(i);
      }
    }
    rerollCounter++;

    currentDice = diceSet.getCurrent();
    console.log(currentDice);
  }
  console.log(rerollCounter);
}

const diceSet = new DiceSet();
console.log(diceSet.roll());

rerollTillAllSix(diceSet);

// Expected output: [ 6, 6, 6, 6, 6, 6 ]
console.log(diceSet.getCurrent());

export { rerollTillAllSix };
