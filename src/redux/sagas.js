import { takeLatest, takeEvery, all } from "redux-saga/effects";
import {
  START_GET_MOVIE_BY_ID,
  START_GET_STREAMING,
  START_GET_LIST,
  GET_ALL_LISTS
} from "./actionTypes";
import { getMovieById } from "./movie/sagas";
import { getListSaga, getAllListsSaga } from "./list/sagas";
import { getStreaming } from "./streaming/sagas";

export default function* rootSaga() {
  yield all([
    takeLatest(GET_ALL_LISTS, getAllListsSaga),
    takeLatest(START_GET_MOVIE_BY_ID, getMovieById),
    takeLatest(START_GET_STREAMING, getStreaming),
    takeEvery(START_GET_LIST, getListSaga)
  ]);
}
