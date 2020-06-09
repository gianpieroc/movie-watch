import React from "react";
import Home from "./index";
import { renderWithProviderAndRouter } from "../../testUtils/testRenderer";
import { waitFor } from "@testing-library/react";
import list from "../../testUtils/__mocks__/list";
import { listTypes } from "../../constants";

describe("home", () => {
  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        ok: true,
        json: () => list
      });
  });
  it("Should render Home Screen with lists", async () => {
    const { getByTestId, queryAllByTestId } = renderWithProviderAndRouter(
      <Home />
    );

    const expectedLength = 6;
    const totalExpectedLength = list.data.contents.data.length;
    const expectedListAmount = Object.keys(listTypes).length;
    const totalCards = totalExpectedLength * expectedListAmount;
    await waitFor(() => {
      expect(queryAllByTestId("list-container")).toHaveLength(expectedLength);
    });
    expect(getByTestId("home-page")).toBeTruthy();
    expect(queryAllByTestId("card-movie")).toHaveLength(totalCards);
  });
});
