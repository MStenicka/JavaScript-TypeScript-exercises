//https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
  // Write your code here
  let maxCandle = Math.max(...candles);
  let count = 0;
  for (let candle of candles) {
    if (candle == maxCandle) {
      count++;
    }
  }
  return count;
}
