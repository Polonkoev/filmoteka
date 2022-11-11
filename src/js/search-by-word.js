import { fetchApi } from './fetch';
import { markupMovies } from './card-markup';
import { resetPagination } from './pagination';
import Notiflix from 'notiflix';
import img from '../images/no_film_found.jpg';
const galleryEl = document.querySelector('.movieList');
const searchFormEl = document.querySelector('.search-form');

if (searchFormEl) searchFormEl.addEventListener('submit', onSearch);


function renderNoFilm(){
  localStorage.removeItem('page');
      localStorage.removeItem('searchQuery');
      sessionStorage.removeItem('page');
      sessionStorage.removeItem('searchQuery');
      galleryEl.innerHTML = '';
      galleryEl.insertAdjacentHTML('afterbegin', `<img class="movieCard__img" src="${img}" alt="no fim found">`)
}


async function onSearch(event) {
  event.preventDefault();
  const query = event.target.elements.query.value.trim();

  if (query === '') return;

  fetchApi.page = 1;
  fetchApi.searchQuery = query;

  resetPagination();

  try {
    const response = await fetchApi.fetchMovies();
    const films = response.results;

    if (films.length === 0) {
      Notiflix.Notify.init({ width: '550px', position: 'right-top' });
      Notiflix.Notify.failure('Sorry, there is no movie with that name');
      searchFormEl.reset();
      renderNoFilm();
      return;
    }

    
    galleryEl.innerHTML = '';
    markupMovies(films);

    searchFormEl.reset();
  } catch (error) {
    console.error(error);
  }
}
