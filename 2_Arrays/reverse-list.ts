// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`
let numbers: number[] = [3, 4, 5, 6, 7];
console.log(numbers);

// first way - method "reverse"
let reverse = numbers.reverse();
console.log(reverse);
console.log(numbers);

// second way - new temp array and a loop
let tempArray: number[] = [];
for (let i = 0; i < numbers.length; i++) {
  tempArray[i] = numbers[numbers.length - 1 - i];
}
console.log(tempArray);
