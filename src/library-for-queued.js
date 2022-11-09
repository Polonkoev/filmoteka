import './arrowup.js';

import './arrowup.js';

import { markupMovies } from './card_markup';
import * as modal from './js/modal-window.js';
import { clickOnQueuedBtn, clickOnDeleteQueuedBtn } from './queued';
import { clickOnWatchedBtn, clickOnDeleteWatchedBtn } from './watched';

const queuedList = document.querySelector('.queued-list');
const queuedEl = document.querySelector('#addToQueuedBtn');
const deleteQEl = document.querySelector('#removeFromQueuedBtn');

const data = localStorage.getItem('queued');
const dataParsed = JSON.parse(data);

console.log(dataParsed);

if (dataParsed) {
  markupMovies(dataParsed, queuedList);
}

queuedEl.addEventListener('click', clickOnQueuedBtn);

deleteQEl.addEventListener('click', clickOnDeleteQueuedBtn);

const queueLink = document.querySelector('.queue');
const watchedLink = document.querySelector('.watched');

queueLink.classList.add('btn-active');
watchedLink.classList.remove('btn-active');
