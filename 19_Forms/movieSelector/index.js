const genreList = document.getElementById('genre-list');
const movieList = document.getElementById('movie-list');
const selectedMovieDiv = document.getElementById('selected-movie');
const movieDetailsTable = document.getElementById('movie-details-table');

let movies;

async function fetchMovies() {
  try {
    const response = await fetch('https://api.tvmaze.com/shows');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
}

function populateGenresDropdown(movies) {
  const genres = movies.reduce((acc, movie) => {
    const movieGenres = movie.genres || [];
    return acc.concat(movieGenres);
  }, []);

  // Sort and remove duplicates from genres
  const uniqueGenres = [...new Set(genres)].sort();

  uniqueGenres.forEach((genre) => {
    genreList.innerHTML += `<option value="${genre}">${genre}</option>`;
  });
}

function populateMoviesDropdown(movies, selectedGenre) {
  movieList.innerHTML = '<option value="">Select a movie</option>';

  if (selectedGenre === 'all') {
    movies.forEach((movie) => {
      movieList.innerHTML += `<option value="${movie.name}">${movie.name}</option>`;
    });
  } else {
    movies.forEach((movie) => {
      if (movie.genres.includes(selectedGenre)) {
        movieList.innerHTML += `<option value="${movie.name}">${movie.name}</option>`;
      }
    });
  }
}

async function getMovieDetails(movieId) {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${movieId}`);
    return await response.json();
  } catch (error) {
    return console.error('Error fetching movie details:', error);
  }
}

async function displaySelectedMovie() {
  const selectedMovieName = movieList.value;
  if (!selectedMovieName) {
    selectedMovieDiv.innerHTML = 'Select a movie';
    movieDetailsTable.innerHTML = '';
    const movieImage = document.getElementById('movie-image');
    movieImage.src = '';
    return;
  }

  const selectedMovie = movies.find(
    (movie) => movie.name === selectedMovieName,
  );

  if (selectedMovie) {
    selectedMovieDiv.innerHTML = `Selected Movie: ${selectedMovie.name}`;
    movieDetailsTable.innerHTML = '';

    const { rating, language, summary, url, runtime, image } = selectedMovie;

    if (rating && rating.average) {
      movieDetailsTable.innerHTML += `<tr><td>Rating</td><td>${rating.average}</td></tr>`;
    }

    if (language) {
      movieDetailsTable.innerHTML += `<tr><td>Language</td><td>${language}</td></tr>`;
    }

    if (url) {
      movieDetailsTable.innerHTML += `<tr><td>TVMaze</td><td><a href="${url}" target="_blank">${url}</a></td></tr>`;
    }

    if (runtime) {
      movieDetailsTable.innerHTML += `<tr><td>Runtime</td><td>${runtime} minutes</td></tr>`;
    }

    if (summary) {
      movieDetailsTable.innerHTML += `<tr><td>Summary</td><td>${summary}</td></tr>`;
    }

    if (image && image.medium) {
      const movieImage = document.getElementById('movie-image');
      movieImage.src = image.medium;
    }
  }
}

async function setup() {
  movies = await fetchMovies();
  populateGenresDropdown(movies);

  genreList.addEventListener('change', () => {
    const selectedGenre = genreList.value;
    populateMoviesDropdown(movies, selectedGenre);
    displaySelectedMovie();
  });

  movieList.addEventListener('change', displaySelectedMovie);
}

setup();
