const galleryEl = document.querySelector('.movieList')
import { findGenresOfMovie } from './ganres';
import img from './images/film_poster_not_found.jpg';

export function markupMovies(movies) {
  const markup = movies
    .map(({ poster_path, title, genre_ids, release_date, id }) => {
      const date = new Date(release_date).getFullYear();
      if (poster_path) {
        return `
            <li class="movieCard" id="${id}">
            <img class="movieCard__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy" />
            <div class="card_wrap">
            <p class="movieCard__title">${title.toUpperCase()} <br />
            <span class="movieCard__info">${findGenresOfMovie(
              genre_ids
            )} | ${date}</span>
            </p>
            </div>
            </li>`;
      }
      return `
        <div class ="movieCard" id="${id}">
        <img class ="movieCard__img" src="${img} alt="${title.toUpperCase()}" />
        <p class ="movieCard__title">${title} <br/>
        <span class ="movieCard__info">${findGenresOfMovie(
          genre_ids
        )} | ${date}</span>
        </p>
        </div>`;
    })
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);
}
