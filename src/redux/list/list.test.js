import configureMockStore from "../../testUtils/mockStore";
import { triggeredActions } from "../../testUtils/actionWatcherMiddleware";
import { listTypes } from "../../constants";
import { startGetList, getAllLists } from "./actions";
import { SUCCESS_GET_LIST, FAIL_GET_LIST } from "../actionTypes";
import list from "../../testUtils/__mocks__/list";
import { listTypeDataSelector, errorListSelector } from "./selectors";

describe("redux list", () => {
  let mockStore;

  beforeAll(() => {
    mockStore = configureMockStore();
    global.fetch = () =>
      Promise.resolve({
        ok: true,
        json: () => ({
          data: list.data
        })
      });
  });

  afterEach(() => {
    triggeredActions.clear();
  });

  it("should get List", async () => {
    const { waitForAction, getAction } = triggeredActions;

    mockStore.dispatch(startGetList("estrenos-espanoles"));

    await waitForAction(SUCCESS_GET_LIST);

    const successGetListAction = getAction(SUCCESS_GET_LIST);

    expect(
      listTypeDataSelector(mockStore.getState(), "estrenos-espanoles")
    ).toBe(list.data);
    expect(successGetListAction.type).toBe(SUCCESS_GET_LIST);
    expect(successGetListAction.payload.listType).toBe("estrenos-espanoles");
    expect(successGetListAction.payload.data).toBe(list.data);
  });

  it("should throw invalid type error", async () => {
    const { waitForAction, getAction } = triggeredActions;

    mockStore.dispatch(startGetList("lista-no-existente"));

    await waitForAction(FAIL_GET_LIST);

    const failGetListAction = getAction(FAIL_GET_LIST);

    expect(errorListSelector(mockStore.getState(), "lista-no-existente")).toBe(
      "Invalid list type"
    );
    expect(failGetListAction.type).toBe(FAIL_GET_LIST);
    expect(failGetListAction.payload.error).toBe("Invalid list type");
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
