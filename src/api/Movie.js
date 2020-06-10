import ApiGateway from "./Api";
import { MOVIE_ENDPOINT } from "../constants";

export default class Movie extends ApiGateway {
  constructor(movieId) {
    const routeParams = MOVIE_ENDPOINT + movieId;
    super(routeParams);
  }
}
