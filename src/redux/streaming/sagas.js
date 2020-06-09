import { call, put } from "redux-saga/effects";
import { successGetStreaming, failGetStreaming } from "./actions";
import { getStreamingData } from "../../api";

export function* getStreaming({ payload }) {
  try {
    const movieId = payload;
    const response = yield call(getStreamingData, movieId);

    if (!response || !response.data) {
      throw new Error(response || "INTERNAL ERROR");
    }

    yield put(successGetStreaming(response.data));
  } catch (error) {
    yield put(failGetStreaming(error));
  }
}
