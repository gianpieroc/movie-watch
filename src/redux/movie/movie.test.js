import configureMockStore from "../../testUtils/mockStore";
import { triggeredActions } from "../../testUtils/actionWatcherMiddleware";
import { startGetMovieById } from "./actions";
import { SUCCESS_GET_MOVIE_BY_ID } from "../actionTypes";

describe("redux movie", () => {
  let mockStore;
  beforeAll(() => {
    mockStore = configureMockStore();
    global.fetch = () =>
      Promise.resolve({
        ok: true,
        json: () => ({
          data: "movie"
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
    const successGetListAction = getAction(SUCCESS_GET_MOVIE_BY_ID);

    expect(successGetListAction.type).toBe(SUCCESS_GET_MOVIE_BY_ID);
    expect(successGetListAction.payload).toBe("movie");
  });
});
