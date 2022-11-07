import Pagination from 'tui-pagination';
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

 fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=9a9abe516901ea117e86ba92a0d908e2&page=${pagination.getCurrentPage()}`)
  .then(response => response.json())
  .then(json => console.log(json))

pagination.on('afterMove', (event) => {
  const currentPage = event.page;
  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=9a9abe516901ea117e86ba92a0d908e2&page=${currentPage}`)
  .then(response => response.json())
  .then(json => console.log(json))
  console.log('currentPage:', currentPage);
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