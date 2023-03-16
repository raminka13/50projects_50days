/* eslint-disable camelcase */
const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } if (vote >= 5) {
    return 'orange';
  }
  return 'red';
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const {
      title, poster_path, vote_average, overview,
    } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    const movieImg = document.createElement('img');
    movieImg.src = IMG_PATH + poster_path;
    movieImg.alt = title;
    movieImg.classList.add('movie-img');
    movieImg.classList.add('loading');
    movieEl.appendChild(movieImg);
    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movie-info');
    movieEl.appendChild(movieInfo);
    const movieTitle = document.createElement('h3');
    movieTitle.innerText = title;
    movieInfo.appendChild(movieTitle);
    const movieRating = document.createElement('span');
    movieRating.classList.add(getClassByRate(vote_average));
    movieRating.innerText = vote_average;
    movieInfo.appendChild(movieRating);
    const movieOverview = document.createElement('div');
    movieOverview.classList.add('overview');
    const movieOverviewTitle = document.createElement('h3');
    movieOverviewTitle.classList.add('overview-title');
    movieOverviewTitle.innerText = title;
    movieOverviewTitle.classList.add(getClassByRate(vote_average));
    movieOverview.appendChild(movieOverviewTitle);
    const movieOverviewText = document.createElement('p');
    movieOverviewText.innerText = overview;
    movieOverview.appendChild(movieOverviewText);
    movieEl.appendChild(movieOverview);
    main.appendChild(movieEl);
  });
}

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  const sortedData = data.results.sort((a, b) => b.vote_average - a.vote_average);

  showMovies(sortedData);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});

window.addEventListener('load', () => {
  const loadings = document.querySelectorAll('.loading');
  loadings.forEach((loading) => {
    loading.classList.remove('loading');
  });
});
// Get initial movies
getMovies(API_URL);

const logo = document.getElementById('logo');

logo.addEventListener('click', () => {
  window.location.reload();
});