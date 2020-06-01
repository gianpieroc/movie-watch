import * as ActionTypes from "../actionTypes";

export const startGetStreaming = () => ({
  type: ActionTypes.START_GET_STREAMING
});

export const successGetStreaming = (error) => ({
  type: ActionTypes.SUCCESS_GET_STREAMING,
  payload: error
});

export const failGetStreaming = (payload) => ({
  type: ActionTypes.FAIL_GET_STREAMING,
  payload
});
