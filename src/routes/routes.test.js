import React from "react";
import PropTypes from "prop-types";
import { createMemoryHistory } from "history";
import renderWithProvider from "../testUtils/testRenderer";
import Routes from "../testUtils/TestRouter";

const AppRouter = ({ history }) => <Routes customHistory={history} />;

AppRouter.propTypes = {
  history: PropTypes.shape({})
};

describe("Navigation", () => {
  let history;
  beforeEach(() => {
    history = createMemoryHistory();
  });

  it("Should render Main page", () => {
    const { getByTestId } = renderWithProvider(<AppRouter history={history} />);
    expect(getByTestId("home-page")).toBeTruthy();
  });

  it("Should render Movie page", async () => {
    history.push("/movie/my-movie");
    const { getByTestId } = renderWithProvider(<AppRouter history={history} />);

    expect(getByTestId("movie-page")).toBeTruthy();
  });

  it("Should render Streaming page", async () => {
    history.push("/streaming/my-movie");
    const { getByTestId } = renderWithProvider(<AppRouter history={history} />);

    expect(getByTestId("streaming-page")).toBeTruthy();
  });

  it("Should render 404 page when the URL is invalid", () => {
    history.push("/bad-route");
    const { getByText } = renderWithProvider(<AppRouter history={history} />);
    expect(getByText("Not found")).toBeTruthy();
  });
});
