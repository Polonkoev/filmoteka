const galleryEl = document.querySelector('.movieList');
import { findGenresOfMovie } from './ganres';
import img from '../images/film_poster_not_found.jpg';

export function markupMovies(movies) {
  const markup = movies
    .map(data => {
      const { poster_path, title, genre_ids, release_date, id } = data;
      const movieData = encodeURIComponent(JSON.stringify(data))
      const date = new Date(release_date).getFullYear();
      if (poster_path) {
        return `
            <li class="movieCard" id="${id}" data-movie=\"${movieData}\">
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
        <li class="movieCard" id="${id}" data-movie=\"${movieData}\">
        <img class ="movieCard__img" src="${img}" alt="${title.toUpperCase()}" />
        <div class="card_wrap">
        <p class ="movieCard__title">${title.toUpperCase()} <br/>
        <p class ="movieCard__info"><span>${findGenresOfMovie(
          genre_ids
        )} | ${date}</span>
        </p>
        </div></li>`;
    })
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);
}
