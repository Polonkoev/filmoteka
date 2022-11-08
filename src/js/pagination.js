import Pagination from 'tui-pagination';
import ApiService from '../fetch';
import { markupMovies } from '../card_markup';
// import {Spinner} from 'spin.js';

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

const fetchApi = new ApiService({
  page: 1
});
fetchApi.fetchTrendMovies().then(handleSucces).catch(handleError);

//  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=894a5fcb5eb3af426933275e70f0cd83&page=${pagination.getCurrentPage()}`)
//   .then(response => response.json())
//   .then(json => console.log(json))

function handleSucces(data) {
  const movies = data.results;
  console.log(movies);
  markupMovies(movies);
}

function handleError(error) {
  console.error(error);
}

pagination.on('afterMove', (event) => {
  const galleryEl = document.querySelector('.movieList');
  galleryEl.innerHTML = '';
  const fetchApi = new ApiService({
    page: event.page,
  });
  fetchApi.fetchTrendMovies().then(handleSucces).catch(handleError);
})



// SPINNER //
// var opts = {
//   lines: 12, // The number of lines to draw
//   length: 25, // The length of each line
//   width: 23, // The line thickness
//   radius: 55, // The radius of the inner circle
//   scale: 0.45, // Scales overall size of the spinner
//   corners: 1, // Corner roundness (0..1)
//   speed: 1.2, // Rounds per second
//   rotate: 0, // The rotation offset
//   animation: 'spinner-line-fade-default', // The CSS animation name for the lines
//   direction: -1, // 1: clockwise, -1: counterclockwise
//   color: '#ff6b08', // CSS color or array of colors
//   fadeColor: 'transparent', // CSS color or array of colors
//   top: '50%', // Top position relative to parent
//   left: '50%', // Left position relative to parent
//   shadow: '0 0 1px transparent', // Box-shadow for the lines
//   zIndex: 2000000000, // The z-index (defaults to 2e9)
//   className: 'spinner', // The CSS class to assign to the spinner
//   position: 'absolute', // Element positioning
// };

// // const target = document.getElementById('tui-pagination-container');
// const spinner = new Spinner(opts).spin(container);

// spinner.stop()