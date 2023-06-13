// Create a function called trickyAverage that takes an array of integers as an input and returns the average of the smallest odd and the largest even number in it.

// You cannot use LINQ/Streams or similar functions that would solve this with single command.

// Example cases:

// trickyAverage([1, 2, 3]);
// Should return 1.5, because the average of 1 and 2 is 1.5.

// trickyAverage([3, 4, 5, 6]);
// Should return 4.5, because the average of 3 and 6 is 4.5.

// trickyAverage([5, 2, 8, -1]);
// Should return 3.5, because the average of -1 and 8 is 3.5.

export function trickyAverage(numbers) {
  let numbersArray = [...numbers];
  let sortedNumbers = numbersArray.sort((a, b) => a - b);
  let minOddNumber;
  let maxEvenNumber;
  let averageNumber;
  for (let i = 0; i < sortedNumbers.length; i++) {
    if (sortedNumbers[i] % 2 !== 0) {
      minOddNumber = sortedNumbers[i];
      break;
    }
  }
  for (let j = sortedNumbers.length - 1; j > 0; j--) {
    if (sortedNumbers[j] % 2 == 0) {
      maxEvenNumber = sortedNumbers[j];
      break;
    }
  }
  averageNumber = (maxEvenNumber + minOddNumber) / 2;
  return averageNumber;
}

trickyAverage([1, 2, 3]);
trickyAverage([3, 4, 5, 6]);
trickyAverage([5, 2, 8, -1]);
