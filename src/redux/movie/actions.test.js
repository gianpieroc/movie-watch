import * as ActionTypes from "../actionTypes";
import {
  startGetMovieById,
  successGetMovieById,
  failGetMovieById
} from "./actions";

describe("movie actions", () => {
  it("should show payload in startGetMovieById", () => {
    expect(startGetMovieById("movieId").type).toBe(
      ActionTypes.START_GET_MOVIE_BY_ID
    );
    expect(startGetMovieById("movieId").payload).toBe("movieId");
  });

  it("should show payload in successGetMovieById", () => {
    expect(successGetMovieById("success").type).toBe(
      ActionTypes.SUCCESS_GET_MOVIE_BY_ID
    );
    expect(successGetMovieById("success").payload).toBe("success");
  });

  it("should show payload in failGetMovieById", () => {
    expect(failGetMovieById("fail").type).toBe(
      ActionTypes.FAIL_GET_MOVIE_BY_ID
    );
    expect(failGetMovieById("fail").payload).toBe("fail");
  });
});
