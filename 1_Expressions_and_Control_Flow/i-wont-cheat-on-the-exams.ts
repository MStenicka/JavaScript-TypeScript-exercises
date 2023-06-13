'use strict';

// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"

// first way
function iWontCheatOnTheExams(): void {
  for (let i = 0; i < 100; i++) {
    console.log("I won't cheat on the exam!");
  }
}

iWontCheatOnTheExams();

// second way
// function iWontCheatOnTheExams(): void {
// let count = 0;
// while (count < 100) {
//   count++;
//   console.log("I won't cheat on the exam!");
// }
// }

// iWontCheatOnTheExams();

export { iWontCheatOnTheExams };
