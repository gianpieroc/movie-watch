import React from "react";
import Streaming from "./index";
import { renderWithProviderAndRouter } from "../../testUtils/testRenderer";
import streaming from "../../testUtils/__mocks__/streaming";

describe("home", () => {
  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        ok: true,
        json: () => streaming
      });
  });
  it("Should render Streaming Screen ", async () => {
    const { getByText } = renderWithProviderAndRouter(<Streaming />);
    expect(getByText("Loading...")).toBeTruthy();
  });
});
