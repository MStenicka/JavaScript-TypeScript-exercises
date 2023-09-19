// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

const createCandiesButton = document.querySelector('.create-candies');
const buyLollypopsButton = document.querySelector('.buy-lollypops');
const candyMachineButton = document.querySelector('.candy-machine');

const candiesElement = document.querySelector('.candies');
const lollypopsElement = document.querySelector('.lollypops');
const speedElement = document.querySelector('.speed');

let candies = 0;
let lollypops = 0;
let speed = 0;
let booster = 1;
let secondsCounter = 0;

// - Clicking the ‘Create candies’ button gives you 1 candy.
createCandiesButton.addEventListener('click', () => {
  candies = candies + 1 * booster;
  candiesElement.textContent = candies;
});

// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
buyLollypopsButton.addEventListener('click', () => {
  if (candies >= 100) {
    candies -= 100;
    lollypops++;
    //   - Use the 🍭 emoji to display the lollipops you haves
    lollypopsElement.textContent += '🍭';
  }
});

// - Display the candy production rate in the `Candies / Second` row
setInterval(() => {
  secondsCounter++;
  speed = candies / secondsCounter;
  speedElement.textContent = Math.floor(speed);
}, 1000);

// - If you press the "make candy rain" button, the candy generation should speed up 10x
candyMachineButton.addEventListener('click', () => {
  booster *= 10;
  console.log(booster);
});
