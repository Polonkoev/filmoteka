import './arrow-up.js';

import { markupMovies } from './card-markup';
import { clickOnQueuedBtn, clickOnDeleteQueuedBtn } from './queued';

const queuedList = document.querySelector('.queued-list');
const queuedEl = document.querySelector('#addToQueuedBtn');
const deleteQEl = document.querySelector('#removeFromQueuedBtn');
const plug = document.querySelector('.no-movie');

const data = localStorage.getItem('queued');
const dataParsed = JSON.parse(data);


if (!dataParsed || dataParsed.length === 0) {
  plug.style.display = 'block';
} else {
  markupMovies(dataParsed, queuedList);
  plug.style.display = 'none';
}

queuedEl.addEventListener('click', clickOnQueuedBtn);

deleteQEl.addEventListener('click', clickOnDeleteQueuedBtn);

const queueLink = document.querySelector('.queue');
const watchedLink = document.querySelector('.watched');

queueLink.classList.add('btn-active');
watchedLink.classList.remove('btn-active');
