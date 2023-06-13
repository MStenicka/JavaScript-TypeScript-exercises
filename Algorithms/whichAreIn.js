function inArray(array1, array2) {
  //...
  let results = [];
  for (let wordA2 of array2) {
    for (let wordA1 of array1) {
      if (wordA2.includes(wordA1) && !results.includes(wordA1)) {
        results.push(wordA1);
      }
    }
  }
  console.log(results.sort());
}

a1 = ['arp', 'live', 'strong'];
a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

inArray(a1, a2);
