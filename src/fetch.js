import axios from 'axios';

export default class ApiService {
  constructor(opt) {
    this.searchQuery = '';
    this.page = opt.page;
    this.key = 'api_key=894a5fcb5eb3af426933275e70f0cd83';
  }
  // трендовые фильмы //
  async fetchTrendMovies() {
    try {
      const url = `https://api.themoviedb.org/3/trending/movie/day?${this.key}&page=${this.page}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  //поиск по ключевому слову //
  async fetchByKeyWord() {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?${this.key}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
