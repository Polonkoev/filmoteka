// import { fetchApi } from './fetch';
// import { markupMovies } from './card_markup';
// import { resetPagination } from './js/pagination';

// const searchFormEl = document.querySelector('.search-form');
// console.log(searchFormEl);
// searchFormEl.addEventListener('submit', onSearch);

// async function onSearch(event) {
//   event.preventDefault();
//   console.log(event);
//   const query = event.target.elements.query.value.trim();
//   if (query === '') return;

//   fetchApi.page = 1;
//   fetchApi.searchQuery = query;

//   resetPagination(40);

//   try {
//     const response = await fetchApi.fetchMovies();
//     const films = response.results;

//     if (films.length === 0) {
//       return;
//     }

//     const galleryEl = document.querySelector('.movieList');
//     galleryEl.innerHTML = '';
//     markupMovies(films);

//     searchFormEl.reset();
//   } catch (error) {
//     console.log(error);
//   }
// }
