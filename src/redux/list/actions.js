import * as ActionTypes from "../actionTypes";

export const startGetList = (listType) => ({
  type: ActionTypes.START_GET_LIST,
  payload: listType,
});

export const successGetList = (payload) => ({
  type: ActionTypes.SUCCESS_GET_LIST,
  payload,
});

export const failGetList = (error) => ({
  type: ActionTypes.FAIL_GET_LIST,
  payload: error,
});

export const getAllLists = () => ({
  type: ActionTypes.GET_ALL_LISTS,
});
