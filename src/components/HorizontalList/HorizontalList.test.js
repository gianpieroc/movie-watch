import React from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import render from "../../testUtils/testRenderer";
import list from "../../testUtils/__mocks__/list";
import HorizontalList from "./";

describe("HorizontalList", () => {
  it("Should not render", () => {
    const { queryByTestId } = render(
      <Router history={createBrowserHistory()}>
        <HorizontalList />
      </Router>
    );
    expect(queryByTestId("list-container-name")).toBeNull();
  });

  it("Should render list", () => {
    const { data: listData } = list;
    const { queryAllByTestId, getByTestId } = render(
      <Router history={createBrowserHistory()}>
        <HorizontalList list={listData} />
      </Router>
    );
    expect(getByTestId("list")).toBeTruthy();
    expect(getByTestId("list-container-name")).toBeTruthy();
    expect(queryAllByTestId("card-movie")).toHaveLength(18);
  });

  it("should not render left arrow at start", () => {
    const { data: listData } = list;
    const { queryByTestId } = render(
      <Router history={createBrowserHistory()}>
        <HorizontalList list={listData} />
      </Router>
    );
    expect(queryByTestId("horizontal-list-left-arrow")).toBeFalsy();
    expect(queryByTestId("horizontal-list-right-arrow")).toBeTruthy();
  });
});
