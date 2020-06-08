import * as ActionTypes from "../actionTypes";

export const startGetMovieById = (movieId) => ({
  type: ActionTypes.START_GET_MOVIE_BY_ID,
  payload: movieId
});

export const successGetMovieById = (payload) => ({
  type: ActionTypes.SUCCESS_GET_MOVIE_BY_ID,
  payload
});

export const failGetMovieById = (error) => ({
  type: ActionTypes.FAIL_GET_MOVIE_BY_ID,
  payload: error
});

export const clearMovie = () => ({
  type: ActionTypes.CLEAR_MOVIE
});
