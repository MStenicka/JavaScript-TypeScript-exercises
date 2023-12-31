// -  Create a variable named `numbers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `numbers` to the console*
// *hint: use a loop, console.log(numbers) won't cut it
// -  bonus for using the correct built in array method

let numbers: number[] = [4, 5, 6, 7];

// first way how to solve it
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// another way how to solve it
numbers.forEach(function (value) {
  console.log(value);
});
