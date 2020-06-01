import { call, put } from "redux-saga/effects";
import { successGetStreaming, failGetStreaming } from "./actions";
import { getStreamingData } from "../../api";

export function* getStreaming() {
  try {
    const response = yield call(getStreamingData);

    if (!response || !response.data) {
      throw new Error(response);
    }

    yield put(successGetStreaming(response.data));
  } catch (error) {
    console.error(error.message);
    yield put(failGetStreaming(error));
  }
}
