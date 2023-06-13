function sortThePile(pileOfTowels, weeklyUsedTowels) {
  // Your code here
  const n = pileOfTowels.length;
  for (let i = 0; i < weeklyUsedTowels.length; i++) {
    const t = weeklyUsedTowels[i];
    console.log('week: ' + (i + 1));
    const remainingTowels = pileOfTowels.slice(0, n - t);
    const basket = pileOfTowels
      .slice(n - t, n)
      .sort((a, b) => (a === 'blue' ? 1 : -1));
    console.log('remaining towels: ' + remainingTowels);
    console.log('basket: ' + basket);
    pileOfTowels = [...remainingTowels, ...basket];
    console.log('pile of towels: ' + pileOfTowels);
    console.log('');
  }
  return pileOfTowels;
}

sortThePile(['blue', 'red', 'blue', 'red', 'blue'], [2, 1, 5, 2]);
