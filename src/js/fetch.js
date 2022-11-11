import axios from 'axios';

const refreshTrands = document.querySelector('.logo');
const homeBtn = document.getElementById('home');




function refreshTrandsFoo (){
  localStorage.removeItem('page')
  localStorage.removeItem('searchQuery')
  sessionStorage.removeItem('page')
  sessionStorage.removeItem('searchQuery')
  fetchMovies()
}

refreshTrands.addEventListener('click', refreshTrandsFoo);
if (homeBtn) homeBtn.addEventListener('click', refreshTrandsFoo);

export default class ApiService {
  constructor(opt) {
    this.searchQuery = opt.searchQuery;
    this.page = opt.page;
    this.key = 'api_key=894a5fcb5eb3af426933275e70f0cd83';
    this.genres = [];

    this.fetchGenres();
  }
  findGenresById(ids) {
    const arr = ids.flatMap(id => this.genres.filter(item => item.id === id));
    const movieGenres = arr.map(el => el.name);
    if (movieGenres.length === 0) {
      return ['Genres not yet filled'];
    }
    return movieGenres.join(', ');
  }
  fetchGenres() {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?${this.key}&language=en-US`
      )
      .then(res => {
        this.genres = res.data.genres;
      })
      .catch(error => console.log(error));
  }

  async fetchMovies() {
    sessionStorage.setItem('searchQuery', this.searchQuery);
    sessionStorage.setItem('page', this.page);

    if (this.searchQuery === '') {
      return await this.fetchTrendMovies();
    } else {
      return await this.fetchByKeyWord();
    }
  }

  // трендовые фильмы //
  async fetchTrendMovies() {
    try {
      const url = `https://api.themoviedb.org/3/trending/movie/day?${this.key}&page=${this.page}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  //поиск по ключевому слову //
  async fetchByKeyWord() {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?${this.key}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export const fetchApi = new ApiService({
  page: Number(localStorage.getItem('page') || 1),
  searchQuery: localStorage.getItem('searchQuery') || '',
});
