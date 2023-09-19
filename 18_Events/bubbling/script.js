// Here is an image inspector, but the buttons are not implemented yet, that will be your task!
//  - the nav buttons (up, down, left, right) move the background by 10px
//  - the zoom buttons increase/decrease the image by 20%
//  - attach only two event listeners to the nav element
//    - one for navigation
//    - one for zooming
const imgInspector = document.querySelector('.img-inspector');
const nav = document.querySelector('nav');

nav.addEventListener('click', (event) => {
  const target = event.target;
  const currentYPosition =
    parseInt(imgInspector.style.backgroundPositionY) || 0;
  const currentXPosition =
    parseInt(imgInspector.style.backgroundPositionX) || 0;
  if (target.matches('[data-direction="up"]')) {
    imgInspector.style.backgroundPositionY = currentYPosition + 10 + 'px';
  } else if (target.matches('[data-direction="down"]')) {
    imgInspector.style.backgroundPositionY = currentYPosition - 10 + 'px';
  } else if (target.matches('[data-direction="left"]')) {
    imgInspector.style.backgroundPositionX = currentXPosition + 10 + 'px';
  } else if (target.matches('[data-direction="right"]')) {
    imgInspector.style.backgroundPositionX = currentXPosition - 10 + 'px';
  }
});

nav.addEventListener('click', (event) => {
  const target = event.target;
  const currentZoomSize = parseInt(imgInspector.style.backgroundSize) || 100;
  if (target.matches('[data-direction="in"]')) {
    imgInspector.style.backgroundSize = currentZoomSize + 20 + '%';
  } else if (target.matches('[data-direction="out"]')) {
    imgInspector.style.backgroundSize = currentZoomSize - 20 + '%';
  }
});
