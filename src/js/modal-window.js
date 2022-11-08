import { findGenresOfMovie } from '../ganres';

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

// --------------------- //
const cardBlock = document.querySelector('.card-block');
const watchedEl = document.querySelector('.card-btn-bg');
const deleteEl = document.querySelector('.card-btn-delete');

// --------------------- //

movieList.addEventListener('click', function (e) {
  const movie = e.target.closest('.movieCard');
  if (movie) {
    overlay.classList.remove('is-hidden');
    window.addEventListener('keydown', function mdClose(e) {
      if (e.keyCode !== 27) return;
      modalClose();
      this.removeEventListener('keydown', mdClose);
    });

    const movieData = JSON.parse(movie.dataset.movie);
    console.log(movieData);
    cardContent.innerHTML = movieData.overview;
    imgCard.src = 'https://image.tmdb.org/t/p/w500' + movieData.poster_path;
    cardTitle.innerHTML = movieData.title;
    cardVote.innerHTML = movieData.vote_average;
    cardVotes.innerHTML = movieData.vote_count;
    cardPopularity.innerHTML = movieData.popularity;
    cardOriginal.innerHTML = movieData.original_title;
    cardGenre.innerHTML = findGenresOfMovie(movieData.genre_ids);

    cardBlock.dataset.movie = movie.dataset.movie;

    const data = localStorage.getItem('watched');
    const dataParsed = JSON.parse(data);

    const find = dataParsed.find(el => el.id == movieData.id);
    console.log('find', find);
    if (find) {
      watchedEl.style.display = 'none';
      deleteEl.style.display = 'block';
    } else {
      watchedEl.style.display = 'block';
      deleteEl.style.display = 'none';
    }
  }
});

closeOverlay.addEventListener('click', modalClose);
overlayBg.addEventListener('click', modalClose);

function modalClose() {
  overlay.classList.add('is-hidden');
}
