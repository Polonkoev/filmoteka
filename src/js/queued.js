import { markupMovies } from './card-markup';

const queuedEl = document.querySelector('#addToQueuedBtn');
const deleteQEl = document.querySelector('#removeFromQueuedBtn');
const queuedList = document.querySelector('.queued-list');

queuedEl.addEventListener('click', clickOnQueuedBtn);

export function clickOnQueuedBtn(e) {
  const movie = e.target.closest('.card-block');
  const movieData = decodeURIComponent(movie.dataset.movie);
  const data = localStorage.getItem('queued');
  const dataParsed = JSON.parse(data);
  queuedEl.style.display = 'none';
  deleteQEl.style.display = 'block';

  let array;
  if (data) {
    const find = dataParsed.find(el => el.id == JSON.parse(movieData).id);
    if (find) {
      return;
    }
    if (Array.isArray(dataParsed)) {
      array = dataParsed;
      array.push(JSON.parse(movieData));
      localStorage.setItem('queued', JSON.stringify(array));
    }
  } else {
    const parsedMovie = JSON.parse(movieData);
    array = [parsedMovie];
    localStorage.setItem('queued', JSON.stringify(array));
  }

  if (queuedList) {
    const newdData = localStorage.getItem('queued');
    const newDataParsed = JSON.parse(newdData);
    queuedList.innerHTML = '';
    markupMovies(newDataParsed, queuedList);
    const plug = document.querySelectorAll('.no-movie');
    plug.forEach(el => (el.style.display = 'none'));
  }
}

deleteQEl.addEventListener('click', clickOnDeleteQueuedBtn);

export function clickOnDeleteQueuedBtn(e) {
  const movie = e.target.closest('.card-block');
  const movieData = decodeURIComponent(movie.dataset.movie);
  const data = localStorage.getItem('queued');
  const dataParsed = JSON.parse(data);
  queuedEl.style.display = 'block';
  deleteQEl.style.display = 'none';

  const filtered = dataParsed.filter(el => el.id != JSON.parse(movieData).id);
  localStorage.setItem('queued', JSON.stringify(filtered));

  if (queuedList) {
    const newdData = localStorage.getItem('queued');
    const newDataParsed = JSON.parse(newdData);
    queuedList.innerHTML = '';
    markupMovies(newDataParsed, queuedList);

    if (newDataParsed.length === 0) {
      const plug = document.querySelectorAll('.no-movie');
      plug.forEach(el => (el.style.display = 'block'));
    }
  }
}
