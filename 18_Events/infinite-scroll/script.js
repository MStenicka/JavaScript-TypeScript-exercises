// Render random amount of <div> elements into the body.
function randomNumber() {
  return Math.floor(Math.random() * 10 + 5);
}

// Random hex color
function randomColor() {
  return '#' + Math.random().toString(16).substr(-6);
}

let bottom = document.body.offsetHeight;
console.log(bottom);

// Random amount of divs with random background color
const container = document.querySelector('#container');
for (let i = 0; i < randomNumber(); i++) {
  const div = document.createElement('div');
  div.style.backgroundColor = randomColor();
  container.appendChild(div);
  bottom = document.body.offsetHeight;
}
console.log(bottom);

// Scroll-threshold
const scrollThreshold = 300;

window.onscroll = function () {
  if (window.innerHeight + window.scrollY >= bottom - scrollThreshold) {
    // Add 10 new divs
    for (let i = 0; i < 10; i++) {
      const div = document.createElement('div');
      div.classList.add('newDiv');
      div.style.backgroundColor = randomColor();
      container.appendChild(div);
      bottom = document.body.offsetHeight;
    }
    console.log(bottom);
  }
};
