import * as ActionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.START_GET_STREAMING:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ActionTypes.FAIL_GET_STREAMING:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ActionTypes.SUCCESS_GET_STREAMING:
      return {
        ...state,
        data: action.payload,
        error: null,
        isLoading: false
      };
    default:
      return state;
  }
};
