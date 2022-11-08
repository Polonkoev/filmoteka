const watchedEl = document.querySelector('.card-btn-bg');
const deleteEl = document.querySelector('.card-btn-delete');

watchedEl.addEventListener('click', clickOnWatchedBtn);

function clickOnWatchedBtn(e) {
  const movie = e.target.closest('.card-block');
  const movieData = movie.dataset.movie;
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
    } else {
      array = [dataParsed];
    }
    array.push(JSON.parse(movieData));
    localStorage.setItem('watched', JSON.stringify(array));
  } else {
    const parsedMovie = JSON.parse(movieData);
    array = [parsedMovie];
    console.log(array);
    localStorage.setItem('watched', JSON.stringify(array));
  }
}

deleteEl.addEventListener('click', clickOnDeleteWatchedBtn);

function clickOnDeleteWatchedBtn(e) {
  const movie = e.target.closest('.card-block');
  const movieData = movie.dataset.movie;
  const data = localStorage.getItem('watched');
  const dataParsed = JSON.parse(data);
  watchedEl.style.display = 'block';
  deleteEl.style.display = 'none';

  const filtered = dataParsed.filter(el => el.id != JSON.parse(movieData).id);
  localStorage.setItem('watched', JSON.stringify(filtered));

  //   const newdData = localStorage.getItem('watched');
  //   const newDataParsed = JSON.parse(newdData);

  //   watchedList.innerHTML = '';
  //   markupMovies(newDataParsed);
}
