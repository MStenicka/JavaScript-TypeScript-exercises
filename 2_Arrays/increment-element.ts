// -  Create a variable named `numbers` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element directly (without loops and without array methods: forEach, map, ...)
// -  Log the third element to the console

let numbers: number[] = [1, 2, 3, 4, 5];
numbers[2] = numbers[2] + 1;
// ++numbers[2]; another way to solve it
console.log(numbers[2]);
