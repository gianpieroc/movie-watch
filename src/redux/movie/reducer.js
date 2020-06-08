import * as ActionTypes from "../actionTypes";

const initialState = {
  error: null,
  isLoading: false,
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.START_GET_MOVIE_BY_ID:
      return {
        ...state,
        data: null,
        error: null,
        isLoading: true
      };
    case ActionTypes.SUCCESS_GET_MOVIE_BY_ID:
      return {
        ...state,
        data: action.payload,
        error: null,
        isLoading: false
      };
    case ActionTypes.FAIL_GET_MOVIE_BY_ID:
      return {
        ...state,
        data: null,
        error: action.payload,
        isLoading: false
      };
    case ActionTypes.CLEAR_MOVIE:
      return { ...initialState };
    default:
      return state;
  }
};
