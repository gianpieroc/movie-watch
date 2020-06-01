import { rakutenQueryParams, API_URL } from "../constants";
import fetchApi from "../utils/fetchApi";

export default class ApiBuilder {
  url = API_URL;
  queryParams = "";
  options = {};

  constructor(routeParams, options) {
    this.url = this.url + routeParams;
    this.queryParams = rakutenQueryParams;
    this.options = options;
  }

  get url() {
    return this.url;
  }

  appendQueryParams() {
    this.url = this.url + this.queryParams;
  }

  async retrieve() {
    this.appendQueryParams(this.queryParams);
    const result = await fetchApi(this.url, this.options);
    return result;
  }
}
