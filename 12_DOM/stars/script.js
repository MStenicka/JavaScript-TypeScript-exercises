'use strict';
// 1. Add ten stars (random coordinates)
const world = document.querySelector('.world');

for (let i = 0; i < 10; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  world.appendChild(star);
}

// 2. On click anywhere on section.world, add a star beneath the cursor.
world.addEventListener('click', (event) => {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = event.clientX + 'px';
  star.style.top = event.clientY + 'px';
  world.appendChild(star);
});

// 3. On random interval, a star should fall. That means you should pick a random star on random interval and give it fallen class, until all stars are fallen.
const stars = document.querySelectorAll('.star');

function fallStar() {
  const i = Math.floor(Math.random() * stars.length);
  const star = stars[i];
  star.classList.add('fallen');
  if (stars.length > 1) {
    setTimeout(fallStar, Math.random() * 2000);
  }
}

setTimeout(fallStar, Math.random() * 2000);

// 4. Make trees grow on click!

const trees = document.querySelectorAll('.tree');

trees.forEach((tree) => {
  tree.addEventListener('click', () => {
    const span = document.createElement('span');
    tree.insertBefore(span, tree.firstChild);
  });
});
