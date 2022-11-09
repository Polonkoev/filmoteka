import './arrowup.js';

import './arrowup.js';

import { markupMovies } from './card_markup';
import * as modal from './js/modal-window.js';
import { clickOnWatchedBtn, clickOnDeleteWatchedBtn } from './watched';
import { clickOnQueuedBtn, clickOnDeleteQueuedBtn } from './queued';

const watchedList = document.querySelector('.watched-list');
const watchedEl = document.querySelector('#addToWatchedBtn');
const deleteEl = document.querySelector('.card-btn-delete');

const data = localStorage.getItem('watched');
const dataParsed = JSON.parse(data);

if (dataParsed) {
  markupMovies(dataParsed, watchedList);
}

watchedEl.addEventListener('click', clickOnWatchedBtn);

deleteEl.addEventListener('click', clickOnDeleteWatchedBtn);
