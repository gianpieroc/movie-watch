import ApiBuilder from "./ApiBuilder";
import { MOVIE_ENDPOINT } from "../constants";

export default class Movie extends ApiBuilder {
  constructor(movieId) {
    const routeParams = MOVIE_ENDPOINT + movieId;
    super(routeParams);
  }
}
