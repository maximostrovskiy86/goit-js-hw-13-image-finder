import {BASE_FETCH_URL, API_KEY} from "./const";

export default class ApiService {
  constructor() {
    this.searchQueary = '';
    this.page = 1;
  }

  fetchGetImages() {
    return fetch(`${BASE_FETCH_URL}key=${API_KEY}&q=${this.searchQueary}}t&page=${this.page}&per_page=12&image_type=photo`)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();
        return data.hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1
  }

  get query() {
    return this.searchQueary;
  }

  set query(newQuery) {
    this.searchQueary = newQuery;
  }
}