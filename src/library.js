import './arrowup.js';

import './arrowup.js';

import { markupMovies } from './card_markup';
import * as modal from './js/modal-window.js';
import { clickOnWatchedBtn, clickOnDeleteWatchedBtn } from './watched';
import { clickOnQueuedBtn, clickOnDeleteQueuedBtn } from './queued';

const watchedList = document.querySelector('.watched-list');
const watchedEl = document.querySelector('#addToWatchedBtn');
const deleteEl = document.querySelector('.card-btn-delete');
const plug = document.querySelector('.no-movie');

const data = localStorage.getItem('watched');
const dataParsed = JSON.parse(data);

if (!dataParsed || dataParsed.length === 0) {
  plug.style.display = 'block';
} else {
  markupMovies(dataParsed, watchedList);
  plug.style.display = 'none';
}

watchedEl.addEventListener('click', clickOnWatchedBtn);

deleteEl.addEventListener('click', clickOnDeleteWatchedBtn);
