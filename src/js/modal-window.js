import { findGenresOfMovie } from './ganres';
import img from '../images/film_poster_not_found.jpg';
import {fetchApi} from "./fetch";

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
const modalLess = document.querySelector('#modal-less');
const cardBlock = document.querySelector('.card-block');
const watchedEl = document.querySelector('#addToWatchedBtn');
const deleteEl = document.querySelector('.card-btn-delete');
const queuedEl = document.querySelector('#addToQueuedBtn');
const deleteQEl = document.querySelector('.card-btn-delete-queued');
const readMore = document.querySelector('.read-more');
const textContent = document.querySelector('.text-content');

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
readMore.addEventListener('click', function(){
  modalLess.classList.toggle('active');
  readMore.classList.toggle('active');
  if(modalLess.classList.contains('active')) {
    readMore.innerHTML = "Read less"
  } else {
    readMore.innerHTML = "Read more"
  }
})
function openModal(e) {
  const movie = e.target.closest('.movieCard');
  readMore.innerHTML = "Read more";
  modalLess.classList.remove('active');
  readMore.classList.remove('active');
  if (movie) {
    overlay.classList.remove('is-hidden');
    window.addEventListener('keydown', function mdClose(e) {
      if (e.keyCode !== 27) return;
      modalClose();
      this.removeEventListener('keydown', mdClose);
    });
    const movieData = JSON.parse(decodeURIComponent(movie.dataset.movie));
    if(!movieData.overview || movieData.overview.length <= 0) {
      cardContent.innerHTML = "Description for this movie has not yet been added."
      readMore.style.display = 'none'
    } else if(movieData.overview.length > 151) {
      const arr1 = movieData.overview.slice(0, 150)
      const arr2 = movieData.overview.slice(150)
      readMore.style.display = 'inline'
      cardContent.innerHTML = arr1;
      modalLess.innerHTML = arr2;
    } else {
      cardContent.innerHTML = movieData.overview;
      readMore.style.display = 'none'
    }

    imgCard.src = movieData.poster_path ? 'https://image.tmdb.org/t/p/w500' + movieData.poster_path : img;
    cardTitle.innerHTML = movieData.title;
    cardVote.innerHTML = movieData.vote_average;
    cardVotes.innerHTML = movieData.vote_count;
    cardPopularity.innerHTML = movieData.popularity;
    cardOriginal.innerHTML = movieData.original_title;
    cardGenre.innerHTML = fetchApi.findGenresById(movieData.genre_ids)

    cardBlock.dataset.movie = movie.dataset.movie;/// --- КТО это добавил и зачем?????

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
