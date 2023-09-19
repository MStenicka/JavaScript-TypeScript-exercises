const container = document.getElementById('container');
const fetchButton = document.getElementById('fetch-joke-button');

fetchButton.addEventListener('click', fetchJoke);

function fetchJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let joke = data.joke;
      container.innerHTML = joke;
    })
    .catch((error) => {
      container.innerHTML = 'Something went wrong.';
    });
}
