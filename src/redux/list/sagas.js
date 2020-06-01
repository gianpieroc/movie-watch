import { call, put, all } from "redux-saga/effects";
import { successGetList, failGetList } from "./actions";
import { getListData } from "../../api";
import { listTypes } from "../../constants";
import { START_GET_LIST } from "../actionTypes";

export function* getListSaga({ payload }) {
  try {
    if (!listTypes[payload]) {
      throw new Error("Invalid list type");
    }

    const response = yield call(getListData, payload);
    if (!response || !response.data) {
      throw new Error(response);
    }

    yield put(successGetList({ listType: payload, data: response.data }));
  } catch (error) {
    yield put(failGetList(error.message));
  }
}

const allListsPayload = Object.values(listTypes).map((listType) => {
  return put({ type: START_GET_LIST, payload: listType });
});

export function* getAllListsSaga() {
  yield all(allListsPayload);
}
