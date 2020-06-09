import { call, put } from "redux-saga/effects";
import { successGetMovieById, failGetMovieById } from "./actions";
import { getMovieData } from "../../api";

export function* getMovieById({ payload }) {
  try {
    const response = yield call(getMovieData, payload);
    if (!response || !response.data) {
      throw new Error(response);
    }
    yield put(successGetMovieById(response.data));
  } catch (error) {
    yield put(failGetMovieById(error.message || error));
  }
}
