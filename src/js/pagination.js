import Pagination from 'tui-pagination';
import { fetchApi } from '../fetch';
import { markupMovies } from '../card_markup';

const galleryEl = document.querySelector('.movieList');

const container = document.getElementById('tui-pagination-container');
const options = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
  page: JSON.parse(localStorage.getItem('page')),
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
};

if (localStorage.getItem('page')) {
  fetchApi.page = JSON.parse(localStorage.getItem('page'));
  fetchApi.fetchMovies().then(handleSucces).catch(handleError);
} else if (!localStorage.getItem('page')) {
  options.page = 1;
  fetchApi.page = 1;
  fetchApi.fetchTrendMovies().then(handleSucces).catch(handleError);
}

const pagination = new Pagination(container, options);

function handleSucces(data) {
  const movies = data.results;
  console.log(data);
  markupMovies(movies);
}

function handleError(error) {
  console.error(error);
}

pagination.on('afterMove', event => {
  galleryEl.innerHTML = '';
  fetchApi.page = event.page;
  fetchApi.fetchMovies().then(handleSucces).catch(handleError);
  localStorage.setItem('page', JSON.stringify(event.page));
});

const searchFormEl = document.querySelector('.search-form');
searchFormEl.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();
  const query = event.target.elements.query.value.trim();
  if (query === '') return;

  fetchApi.page = 1;
  fetchApi.searchQuery = query;
  try {
    const response = await fetchApi.fetchMovies();
    const films = response.results;
    pagination.reset(response.total_results);
    console.log('total-item:', response.total_results);
    localStorage.removeItem('page');
    if (films.length === 0) {
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
