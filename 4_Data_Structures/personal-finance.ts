// Personal finance
// We are going to represent our expenses in a list containing integers.

// Create a list with the following items:
// 500, 1000, 1250, 175, 800 and 120
// Create an application which prints out the answers to the following questions:
// How much did we spend?
// Which was our greatest expense?
// Which was our cheapest spending?
// What was the average amount of our spendings? (print this as a float value)

let expenses: number[] = [500, 1000, 1250, 175, 800, 120];
let totalExpenses: number = expenses.reduce((a, b) => a + b, 0);
let maxExpense: number = Math.max(...expenses);
let minExpense: number = Math.min(...expenses);
let avgExpense: number = totalExpenses / expenses.length;

// The full output of your main method should be the following:
// 3845
// 1250
// 120
// 640.8333

console.log(totalExpenses);
console.log(maxExpense);
console.log(minExpense);
console.log(avgExpense.toFixed(4));
