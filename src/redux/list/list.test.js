import mockStore from "../../testUtils/mockStore";
import { triggeredActions } from "../../testUtils/actionWatcherMiddleware";
import { listTypes } from "../../constants";
import { startGetList, getAllLists } from "./actions";
import { SUCCESS_GET_LIST, FAIL_GET_LIST } from "../actionTypes";

describe("redux list", () => {
  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        ok: true,
        json: () => ({
          data: "data"
        })
      });
  });

  afterEach(() => {
    triggeredActions.clear();
  });

  it("should get List", async () => {
    const { waitForAction, getAction } = triggeredActions;

    mockStore.dispatch(startGetList("populares-en-taquilla"));

    await waitForAction(SUCCESS_GET_LIST);
    const successGetListAction = getAction(SUCCESS_GET_LIST);

    expect(successGetListAction.type).toBe(SUCCESS_GET_LIST);
    expect(successGetListAction.payload.listType).toBe("populares-en-taquilla");
    expect(successGetListAction.payload.data).toBe("data");
  });

  it("should throw invalid type error", async () => {
    const { waitForAction, getAction } = triggeredActions;

    mockStore.dispatch(startGetList("lista-no-existente"));

    await waitForAction(FAIL_GET_LIST);

    const failGetListAction = getAction(FAIL_GET_LIST);

    expect(failGetListAction.type).toBe(FAIL_GET_LIST);
    expect(failGetListAction.payload).toBe("Invalid list type");
  });

  it("should execute all lists", async () => {
    const { waitForAction, getActions } = triggeredActions;

    mockStore.dispatch(getAllLists());

    await waitForAction(SUCCESS_GET_LIST);

    const actions = getActions();
    const successActionsExpected = Object.keys(listTypes).length;
    const successActionsExecuted = actions.filter(
      (action) => action.type === SUCCESS_GET_LIST
    ).length;

    expect(successActionsExpected).toBe(successActionsExecuted);
  });
});
