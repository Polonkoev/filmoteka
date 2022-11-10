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
const watchedEl = document.querySelector('#addToWatchedBtn');
const deleteEl = document.querySelector('.card-btn-delete');
const queuedEl = document.querySelector('#addToQueuedBtn');
const deleteQEl = document.querySelector('.card-btn-delete-queued');

export {
  movieList,
  overlay,
  closeOverlay,
  overlayBg,
  imgCard,
  cardTitle,
  cardVote,
  cardVotes,
  cardPopularity,
  cardOriginal,
  cardGenre,
  cardContent,
  cardBlock,
  watchedEl,
  queuedEl,
  deleteQEl,
  deleteEl,
  openModal,
  modalClose,
};

movieList.addEventListener('click', openModal);

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

    const dataWatched = localStorage.getItem('watched');
    const dataQueued = localStorage.getItem('queued');
    const dataWatchedParsed = JSON.parse(dataWatched);
    const dataQueuedParsed = JSON.parse(dataQueued);

    if (dataWatchedParsed) {
      const findWatched = dataWatchedParsed.find(el => el.id == movieData.id);
      if (findWatched) {
        watchedEl.style.display = 'none';
        deleteEl.style.display = 'block';
      } else {
        watchedEl.style.display = 'block';
        deleteEl.style.display = 'none';
      }
    }

    if (dataQueuedParsed) {
      const findQueued = dataQueuedParsed.find(el => el.id == movieData.id);
      if (findQueued) {
        queuedEl.style.display = 'none';
        deleteQEl.style.display = 'block';
      } else {
        queuedEl.style.display = 'block';
        deleteQEl.style.display = 'none';
      }
    }
  }
}

closeOverlay.addEventListener('click', modalClose);
overlayBg.addEventListener('click', modalClose);

function modalClose() {
  overlay.classList.add('is-hidden');
}
