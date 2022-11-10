import { markupMovies } from './card-markup';

const watchedEl = document.querySelector('#addToWatchedBtn');
const deleteEl = document.querySelector('.card-btn-delete');
const watchedList = document.querySelector('.watched-list');

watchedEl.addEventListener('click', clickOnWatchedBtn);

export function clickOnWatchedBtn(e) {
  const movie = e.target.closest('.card-block');
  const movieData = decodeURIComponent(movie.dataset.movie);
  const data = localStorage.getItem('watched');
  const dataParsed = JSON.parse(data);
  watchedEl.style.display = 'none';
  deleteEl.style.display = 'block';

  let array;
  if (data) {
    const find = dataParsed.find(el => el.id == JSON.parse(movieData).id);
    if (find) {
      return;
    }
    if (Array.isArray(dataParsed)) {
      array = dataParsed;
      array.push(JSON.parse(movieData));
      localStorage.setItem('watched', JSON.stringify(array));
    }
  } else {
    const parsedMovie = JSON.parse(movieData);
    array = [parsedMovie];
    localStorage.setItem('watched', JSON.stringify(array));
  }

  if (watchedList) {
    const newdData = localStorage.getItem('watched');
    const newDataParsed = JSON.parse(newdData);
    watchedList.innerHTML = '';
    markupMovies(newDataParsed, watchedList);

    const plug = document.querySelectorAll('.no-movie');
    plug.forEach(el => (el.style.display = 'none'));
  }
}

deleteEl.addEventListener('click', clickOnDeleteWatchedBtn);

export function clickOnDeleteWatchedBtn(e) {
  const movie = e.target.closest('.card-block');
  const movieData = decodeURIComponent(movie.dataset.movie);
  const data = localStorage.getItem('watched');
  const dataParsed = JSON.parse(data);
  watchedEl.style.display = 'block';
  deleteEl.style.display = 'none';

  const filtered = dataParsed.filter(el => el.id != JSON.parse(movieData).id);
  localStorage.setItem('watched', JSON.stringify(filtered));

  if (watchedList) {
    const newdData = localStorage.getItem('watched');
    const newDataParsed = JSON.parse(newdData);
    watchedList.innerHTML = '';
    markupMovies(newDataParsed, watchedList);

    if (newDataParsed.length === 0) {
      const plug = document.querySelectorAll('.no-movie');
      plug.forEach(el => (el.style.display = 'block'));
    }
  }
}
