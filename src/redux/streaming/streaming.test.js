import configureMockStore from "../../testUtils/mockStore";
import { triggeredActions } from "../../testUtils/actionWatcherMiddleware";
import { startGetStreaming } from "./actions";
import { SUCCESS_GET_STREAMING } from "../actionTypes";

describe("redux streaming", () => {
  let mockStore;

  beforeEach(() => {
    mockStore = configureMockStore();
  });

  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        ok: true,
        json: () => ({
          data: "streaming"
        })
      });
  });

  afterEach(() => {
    triggeredActions.clear();
  });

  it("should get movie", async () => {
    const { waitForAction, getAction } = triggeredActions;

    mockStore.dispatch(startGetStreaming());

    await waitForAction(SUCCESS_GET_STREAMING);
    const successGetListAction = getAction(SUCCESS_GET_STREAMING);

    expect(successGetListAction.type).toBe(SUCCESS_GET_STREAMING);
    expect(successGetListAction.payload).toBe("streaming");
  });
});
