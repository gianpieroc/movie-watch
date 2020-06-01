import * as ActionTypes from "../actionTypes";
import {
  startGetList,
  successGetList,
  failGetList,
  getAllLists
} from "./actions";

describe("list actions", () => {
  it("should show payload in startGetList", () => {
    expect(startGetList("myList").type).toBe(ActionTypes.START_GET_LIST);
    expect(startGetList("myList").payload).toBe("myList");
  });

  it("should show payload in successGetList", () => {
    expect(successGetList("success").type).toBe(ActionTypes.SUCCESS_GET_LIST);
    expect(successGetList("success").payload).toBe("success");
  });

  it("should show payload in failGetList", () => {
    expect(failGetList("fail").type).toBe(ActionTypes.FAIL_GET_LIST);
    expect(failGetList("fail").payload).toBe("fail");
  });

  it("should show payload in getAllLists", () => {
    expect(getAllLists().type).toBe(ActionTypes.GET_ALL_LISTS);
  });
});
