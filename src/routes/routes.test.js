import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Routes from "./Routes";

const AppRouter = ({ history }) => <Routes customHistory={history} />;

describe("Navigation", () => {
  let history;
  beforeEach(() => {
    history = createMemoryHistory();
  });

  it("Should render Main page", () => {
    const { getByTestId } = render(<AppRouter history={history} />);
    expect(getByTestId("home-page")).toBeTruthy();
  });

  it("Should render Movie page", () => {
    history.push("/movie/my-movie");
    const { getByTestId } = render(<AppRouter history={history} />);
    expect(getByTestId("movie-page")).toBeTruthy();
  });

  it("Should render 404 page when the URL is invalid", () => {
    history.push("/bad-route");
    const { getByText } = render(<AppRouter history={history} />);
    expect(getByText("Not found")).toBeTruthy();
  });
});
