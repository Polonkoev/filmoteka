import Pagination from 'tui-pagination';
import { fetchApi } from '../fetch';
import { markupMovies } from '../card_markup';

const container = document.getElementById('tui-pagination-container');
const options = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
  page: 1,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
};
const pagination = new Pagination(container, options);

fetchApi.fetchMovies().then(handleSucces).catch(handleError);

function handleSucces(data) {
  const movies = data.results;
  console.log(movies);
  markupMovies(movies);
}

function handleError(error) {
  console.error(error);
}

pagination.on('afterMove', event => {
  const galleryEl = document.querySelector('.movieList');
  galleryEl.innerHTML = '';
  fetchApi.page = event.page;
  fetchApi.fetchMovies().then(handleSucces).catch(handleError);
});

export function resetPagination() {
  pagination.reset();
}
