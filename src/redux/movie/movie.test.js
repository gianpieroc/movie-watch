import configureMockStore from "../../testUtils/mockStore";
import { triggeredActions } from "../../testUtils/actionWatcherMiddleware";
import { startGetMovieById } from "./actions";
import { SUCCESS_GET_MOVIE_BY_ID, FAIL_GET_MOVIE_BY_ID } from "../actionTypes";
import { movieErrorSelector, movieDataSelector } from "./selectors";
import movie from "../../testUtils/__mocks__/movie";

describe("redux movie", () => {
  let mockStore;
  beforeAll(() => {
    mockStore = configureMockStore();
    global.fetch = () =>
      Promise.resolve({
        ok: true,
        json: () => ({
          data: movie.data
        })
      });
  });

  afterEach(() => {
    triggeredActions.clear();
  });

  it("should get movie", async () => {
    const { waitForAction, getAction } = triggeredActions;

    mockStore.dispatch(startGetMovieById("id-0001"));

    await waitForAction(SUCCESS_GET_MOVIE_BY_ID);
    const successGetMovieAction = getAction(SUCCESS_GET_MOVIE_BY_ID);

    expect(movieDataSelector(mockStore.getState())).toBe(movie.data);
    expect(successGetMovieAction.type).toBe(SUCCESS_GET_MOVIE_BY_ID);
    expect(successGetMovieAction.payload).toBe(movie.data);
  });

  it("should fail getting movie", async () => {
    global.fetch = () => Promise.reject("ERROR");
    const { waitForAction, getAction } = triggeredActions;

    mockStore.dispatch(startGetMovieById());

    await waitForAction(FAIL_GET_MOVIE_BY_ID);
    const failGetMovieAction = getAction(FAIL_GET_MOVIE_BY_ID);

    expect(movieErrorSelector(mockStore.getState())).toBe("ERROR");
    expect(failGetMovieAction.type).toBe(FAIL_GET_MOVIE_BY_ID);
    expect(failGetMovieAction.payload).toBe("ERROR");
  });

  it("should fail getting movie", async () => {
    global.fetch = () => Promise.resolve();
    const { waitForAction, getAction } = triggeredActions;

    mockStore.dispatch(startGetMovieById());

    await waitForAction(FAIL_GET_MOVIE_BY_ID);
    const failGetMovieAction = getAction(FAIL_GET_MOVIE_BY_ID);

    const error =
      "Error: Failed connecting to https://gizmo.rakuten.tv/v3/movies/undefined?classification_id=5&device_identifier=web&locale=es&market_code=es";
    expect(movieErrorSelector(mockStore.getState())).toBe(error);
    expect(failGetMovieAction.type).toBe(FAIL_GET_MOVIE_BY_ID);
    expect(failGetMovieAction.payload).toBe(error);
  });
});
