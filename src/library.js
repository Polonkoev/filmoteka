import './arrowup.js';

import './arrowup.js';
import { findGenresOfMovie } from './ganres';

const movieList = document.querySelector('.movieList');
const overlay = document.querySelector('.overlay');
const closeOverlay = document.querySelector('.modal-close');
const overlayBg = document.querySelector('.overlay-bg');
const imgCard = document.querySelector('.cinema-card img');
const cardTitle = document.querySelector('.card-title');
const cardVote = document.querySelector('#modal-vote');
const cardVotes = document.querySelector('#modal-votes');
const cardPopularity = document.querySelector('#modal-popularity');
const cardOriginal = document.querySelector('#modal-original');
const cardGenre = document.querySelector('#modal-genre');
const cardContent = document.querySelector('#modal-content');
const cardBlock = document.querySelector('.card-block');

import img from './images/film_poster_not_found.jpg';

const watchedList = document.querySelector('.watched-list');
const watchedEl = document.querySelector('.card-btn-bg');
const deleteEl = document.querySelector('.card-btn-delete');

const data = localStorage.getItem('watched');
const dataParsed = JSON.parse(data);

console.log('dataParsed', dataParsed);

markupMovies(dataParsed);

function markupMovies(dataParsed) {
  const markup = dataParsed
    .map(data => {
      const { poster_path, title, genre_ids, release_date, id } = data;
      const movieData = JSON.stringify(data);
      const date = new Date(release_date).getFullYear();
      if (poster_path) {
        return `
            <li class="movieCard" id="${id}" data-movie='${movieData}'>
            <img class="movieCard__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy" />
            <div class="card_wrap">
            <p class="movieCard__title">${title.toUpperCase()} <br />
            <span class="movieCard__info">${findGenresOfMovie(
              genre_ids
            )} | ${date}</span>
            </p>
            </div>
            </li>`;
      }
      return `
        <div class ="movieCard" id="${id}">
        <img class ="movieCard__img" src="${img} alt="${title.toUpperCase()}" />
        <p class ="movieCard__title">${title} <br/>
            <span class="movieCard__info">${findGenresOfMovie(
              genre_ids
            )} | ${date}</span>
        </p>
        </div>`;
    })
    .join('');
  watchedList.insertAdjacentHTML('beforeend', markup);
}

watchedList.addEventListener('click', openModal);

function openModal(e) {
  const movie = e.target.closest('.movieCard');
  if (movie) {
    overlay.classList.remove('is-hidden');
    window.addEventListener('keydown', function mdClose(e) {
      if (e.keyCode !== 27) return;
      modalClose();
      this.removeEventListener('keydown', mdClose);
    });

    const movieData = JSON.parse(movie.dataset.movie);
    cardContent.innerHTML = movieData.overview;
    imgCard.src = 'https://image.tmdb.org/t/p/w500' + movieData.poster_path;
    cardTitle.innerHTML = movieData.title;
    cardVote.innerHTML = movieData.vote_average;
    cardVotes.innerHTML = movieData.vote_count;
    cardPopularity.innerHTML = movieData.popularity;
    cardOriginal.innerHTML = movieData.original_title;
    cardGenre.innerHTML = findGenresOfMovie(movieData.genre_ids);
    cardBlock.dataset.movie = movie.dataset.movie;
  }
  watchedEl.style.display = 'none';
  deleteEl.style.display = 'block';
}

closeOverlay.addEventListener('click', modalClose);
overlayBg.addEventListener('click', modalClose);

function modalClose() {
  overlay.classList.add('is-hidden');
}

watchedEl.addEventListener('click', clickOnWatchedBtn);

function clickOnWatchedBtn(e) {
  const movie = e.target.closest('.card-block');
  const movieData = movie.dataset.movie;
  const data = localStorage.getItem('watched');
  const dataParsed = JSON.parse(data);
  watchedEl.style.display = 'none';
  deleteEl.style.display = 'block';

  let array;
  if (data) {
    const find = dataParsed.find(el => el.id == JSON.parse(movieData).id);
    if (find) {
      return;
    }
    if (Array.isArray(dataParsed)) {
      array = dataParsed;
    } else {
      array = [dataParsed];
    }
    array.push(JSON.parse(movieData));
    localStorage.setItem('watched', JSON.stringify(array));
  } else {
    const parsedMovie = JSON.parse(movieData);
    array = [parsedMovie];
    console.log(array);
    localStorage.setItem('watched', JSON.stringify(array));
  }

  const newdData = localStorage.getItem('watched');
  const newDataParsed = JSON.parse(newdData);

  watchedList.innerHTML = '';
  markupMovies(newDataParsed);
}

deleteEl.addEventListener('click', clickOnDeleteWatchedBtn);

function clickOnDeleteWatchedBtn(e) {
  const movie = e.target.closest('.card-block');
  const movieData = movie.dataset.movie;
  const data = localStorage.getItem('watched');
  const dataParsed = JSON.parse(data);
  watchedEl.style.display = 'block';
  deleteEl.style.display = 'none';

  const filtered = dataParsed.filter(el => el.id != JSON.parse(movieData).id);
  localStorage.setItem('watched', JSON.stringify(filtered));

  const newdData = localStorage.getItem('watched');
  const newDataParsed = JSON.parse(newdData);

  watchedList.innerHTML = '';
  markupMovies(newDataParsed);
}
