import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { GlobalStyle } from "../App.styled";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import theme from "../globalStyles/theme";
import { Provider } from "react-redux";
import configureMockStore from "./mockStore";

export const renderWithProvider = (ui, state) => {
  const store = configureMockStore(state);
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
  Wrapper.propTypes = {
    children: PropTypes.node
  };
  return {
    ...render(ui, { wrapper: Wrapper }),
    store
  };
};

export const renderWithProviderAndRouter = (ui, state) => {
  const history = createBrowserHistory();
  const store = configureMockStore(state);
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <Router history={history}>{children}</Router>
        <Provider store={store}></Provider>
      </ThemeProvider>
    </Provider>
  );
  Wrapper.propTypes = {
    children: PropTypes.node
  };
  return {
    ...render(ui, { wrapper: Wrapper }),
    store,
    history
  };
};

export default renderWithProvider;
