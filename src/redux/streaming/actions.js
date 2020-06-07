import * as ActionTypes from "../actionTypes";

export const startGetStreaming = (movieId) => ({
  type: ActionTypes.START_GET_STREAMING,
  payload: movieId
});

export const successGetStreaming = (payload) => ({
  type: ActionTypes.SUCCESS_GET_STREAMING,
  payload
});

export const failGetStreaming = (error) => ({
  type: ActionTypes.FAIL_GET_STREAMING,
  payload: error
});
