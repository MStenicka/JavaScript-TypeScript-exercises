'use strict';

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

function secondsInADay(): void {
  let currentHours: number = 14;
  let currentMinutes: number = 34;
  let currentSeconds: number = 42;

  const secondsInHour: number = 60 * 60;
  const secondsInMinute: number = 60;
  const secondsInDay: number = 24 * secondsInHour;

  const elapsedSeconds =
    currentHours * secondsInHour +
    currentMinutes * secondsInMinute +
    currentSeconds;
  const remainingSeconds = secondsInDay - elapsedSeconds;

  console.log(remainingSeconds);
}

secondsInADay();

export { secondsInADay };
