function birthday(s, d, m) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let sum = 0;
    for (let j = i; j < i + m; j++) {
      sum += s[j];
      console.log(sum);
    }
    if (sum == d) {
      count++;
    }
  }
  console.log(count);
}

birthday([1, 2, 1, 3, 2], 3, 2);
