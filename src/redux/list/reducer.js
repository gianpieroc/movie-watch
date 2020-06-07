import * as ActionTypes from "../actionTypes";
import { listTypes } from "../../constants";

const reducerContainer = { error: null, isLoading: false, data: null };

const listTypesReducer = Object.values(listTypes).reduce(
  (typesAcum, listType) => ({
    ...typesAcum,
    [listType]: reducerContainer
  }),
  {}
);

export const initialState = {
  ...listTypesReducer
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.START_GET_LIST:
      return {
        ...state,
        [action.payload]: {
          error: null,
          isLoading: true
        }
      };
    case ActionTypes.FAIL_GET_LIST:
      return {
        ...state,
        [action.payload.listType]: {
          error: action.payload.error,
          isLoading: false
        }
      };
    case ActionTypes.SUCCESS_GET_LIST:
      return {
        ...state,
        [action.payload.listType]: {
          data: action.payload.data,
          error: null,
          isLoading: false
        }
      };
    default:
      return state;
  }
};
