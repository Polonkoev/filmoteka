import Pagination from 'tui-pagination';
import { fetchApi, reloadPage } from './fetch';
import { markupMovies } from './card-markup';

const container = document.getElementById('tui-pagination-container');

const options = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
  page: Number(localStorage.getItem('page') || 1),
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
};
export let pagination;
if (container) {
  pagination = new Pagination(container, options);

  pagination.on('afterMove', event => {
    const galleryEl = document.querySelector('.movieList');
    galleryEl.innerHTML = '';
    fetchApi.page = event.page;
    fetchApi.fetchMovies().then(handleSucces).catch(handleError);
  });

  fetchApi.fetchMovies().then(handleSucces).catch(handleError);
}

function handleSucces(data) {
  const movies = data.results;
  markupMovies(movies);
}

function handleError(error) {
  console.error(error);
}

export function resetPagination() {
  pagination.reset();
}

const currentPage = document.querySelector('.tui-pagination');
if (currentPage) currentPage.addEventListener('click', onPageClick);

function onPageClick(event) {
  const page = event.target.textContent;
  localStorage.setItem('page', page);
  options.page = event.target.textContent;
}
