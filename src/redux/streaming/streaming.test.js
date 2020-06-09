import configureMockStore from "../../testUtils/mockStore";
import { triggeredActions } from "../../testUtils/actionWatcherMiddleware";
import { startGetStreaming } from "./actions";
import { FAIL_GET_STREAMING, SUCCESS_GET_STREAMING } from "../actionTypes";
import streamingData from "../../testUtils/__mocks__/streaming";
import { streamingDataSelector, streamingErrorSelector } from "./selectors";

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
          data: streamingData.data
        })
      });
  });

  afterEach(() => {
    triggeredActions.clear();
  });

  it("should get streaming", async () => {
    const { waitForAction, getAction } = triggeredActions;

    mockStore.dispatch(startGetStreaming());

    await waitForAction(SUCCESS_GET_STREAMING);
    const successPostStreamingAction = getAction(SUCCESS_GET_STREAMING);

    expect(streamingDataSelector(mockStore.getState())).toBe(
      streamingData.data
    );
    const expectedUrl =
      "https://prod-stpeter-pmd.limelight.cdn.rakuten.tv/8/3/0/830b8d2e2b552ad51e72ef927f6116b1-mc-0-137-0-0_SD_TRAILER_PAR_1_1/830b8d2e2b552ad51e72ef927f6116b1-mc-0-137-0-0_SD_TRAILER_PAR_1_1.mp4?e=1591408848&h=98bd9b4c6862da3945aa836b8face28e";
    expect(successPostStreamingAction.type).toBe(SUCCESS_GET_STREAMING);
    expect(successPostStreamingAction.payload.stream_infos[0].url).toBe(
      expectedUrl
    );
  });

  it("should fail getting streaming", async () => {
    global.fetch = () => Promise.reject("ERROR");
    const { waitForAction, getAction } = triggeredActions;

    mockStore.dispatch(startGetStreaming());

    await waitForAction(FAIL_GET_STREAMING);
    const failPostStreamingAction = getAction(FAIL_GET_STREAMING);

    expect(streamingErrorSelector(mockStore.getState())).toBe("ERROR");
    expect(failPostStreamingAction.type).toBe(FAIL_GET_STREAMING);
    expect(failPostStreamingAction.payload).toBe("ERROR");
  });
});
