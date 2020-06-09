import React from "react";
import Movie from "./index";
import { renderWithProviderAndRouter } from "../../testUtils/testRenderer";
import { waitFor } from "@testing-library/react";
import movie from "../../testUtils/__mocks__/movie";

describe("movie", () => {
  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        ok: true,
        json: () => movie
      });
  });
  it("Should render Movie Screen", async () => {
    const {
      getByTestId,
      getByText,
      queryAllByTestId
    } = renderWithProviderAndRouter(<Movie />);

    await waitFor(() => expect(getByTestId("movie-page-content")).toBeTruthy());
    expect(getByText(/TP/)).toBeTruthy();
    expect(getByText(/2016/)).toBeTruthy();
    expect(getByText(/Moana/)).toBeTruthy();
    expect(getByText(/Estados Unidos/)).toBeTruthy();
    expect(queryAllByTestId("movie-actor")).toHaveLength(2);
    expect(queryAllByTestId("movie-genre")).toHaveLength(2);
  });
});
