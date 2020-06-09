import { call, put, all } from "redux-saga/effects";
import { successGetList, failGetList } from "./actions";
import { getListData } from "../../api";
import { listTypes } from "../../constants";
import { START_GET_LIST } from "../actionTypes";

export function* getListSaga({ payload }) {
  const listType = listTypes[payload];
  try {
    if (!listType) {
      throw new Error("Invalid list type");
    }

    const response = yield call(getListData, listType);
    if (!response || !response.data) {
      throw new Error(response);
    }

    yield put(successGetList({ listType, data: response.data }));
  } catch (error) {
    yield put(
      failGetList({ listType: listType || payload, error: error.message })
    );
  }
}

const allListsPayload = Object.values(listTypes).map((listType) => {
  return put({ type: START_GET_LIST, payload: listType });
});

export function* getAllListsSaga() {
  yield all(allListsPayload);
}
