function threeSum(array) {
  const n = array.length;
  let smallestNumbers = [];
  let sortedArray = [...array];
  sortedArray = sortedArray.sort((a, b) => a - b);
  let indexes = [];
  smallestNumbers = sortedArray.splice(0, 3);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < smallestNumbers.length; j++) {
      if (array[i] === smallestNumbers[j]) {
        if (!indexes.includes(i)) {
          indexes.push(i);
        }
      }
    }
  }
  console.log(indexes);
}

threeSum([3, 2, 5, 6, 1, 9, 11, 0]);
threeSum([4, 3, 1, 1, 1]);
