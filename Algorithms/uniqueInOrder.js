var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  let split = iterable;
  let results = [];
  console.log(iterable.length);
  let i = 0;
  do {
    if (split[i] !== split[i + 1]) {
      results.push(split[i]);
    }
    i++;
  } while (i < split.length);

  return results;
};

console.log(uniqueInOrder('AAAABBBCCDAABBCC'));
console.log(uniqueInOrder(['AA', 'AA', 'BB', 'BCCD', 'AABBCC']));
