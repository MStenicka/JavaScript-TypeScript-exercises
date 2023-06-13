function findUniq(arr) {
  // do magic
  const counter = {};
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (counter[number]) {
      counter[number]++;
    } else {
      counter[number] = 1;
    }
  }
  for (const number in counter) {
    if (counter[number] === 1) {
      console.log(parseFloat(number));
    }
  }
}

findUniq([1, 1, 1, 2, 1, 1]);
findUniq([0, 0, 0.55, 0, 0]);
