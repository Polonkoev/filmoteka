import ApiService from './fetch';

const fetchApi = new ApiService();
fetchApi.fetchTrendMovies().then(handleSucces).catch(handleError);

function handleSucces(data) {
  const movies = data.results;
  console.log(movies);
  markupMovies(movies);
}

function handleError(error) {
  console.error(error);
}
