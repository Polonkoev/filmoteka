import { fetchApi } from './fetch';
import { markupMovies } from './card_markup';
import { resetPagination } from './js/pagination';

const searchFormEl = document.querySelector('.search-form');
const searchAlertEl = document.querySelector('.search-alert')
console.log(searchFormEl);
searchFormEl.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();
  console.log(event);
  searchAlertEl.classList.add('visually-hidden');
  const query = event.target.elements.query.value.trim();

  if (query === '') return;

  fetchApi.page = 1;
  fetchApi.searchQuery = query;

  resetPagination();

  try {
    const response = await fetchApi.fetchMovies();
    const films = response.results;

    if (films.length === 0) {
      searchAlertEl.classList.remove('visually-hidden');
      return;
    }

    const galleryEl = document.querySelector('.movieList');
    galleryEl.innerHTML = '';
    markupMovies(films);

    searchFormEl.reset();
  } catch (error) {
    console.log(error);
  }
}
