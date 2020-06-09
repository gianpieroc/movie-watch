import React from "react";
import Card from "./";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import render from "../../testUtils/testRenderer";
import movie from "../../testUtils/__mocks__/movie";

describe("Card", () => {
  it("Should render movie card", () => {
    const movieData = movie.data;
    const { getByAltText, getByTestId } = render(
      <Router history={createBrowserHistory()}>
        <Card movie={movieData} />
      </Router>
    );
    expect(getByTestId("card-movie")).toBeTruthy();
    expect(
      getByAltText("artwork-vaiana-6a382ace-59d3-4f4f-a76c-4eb3a8497a98")
    ).toBeTruthy();
  });
  it("Should not render movie card", () => {
    const movieData = null;
    const { queryByTestId } = render(
      <Router history={createBrowserHistory()}>
        <Card movie={movieData} />
      </Router>
    );
    expect(queryByTestId("card-movie")).toBeFalsy();
  });
});
