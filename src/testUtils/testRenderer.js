import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { GlobalStyle } from "../App.styled";
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

export default renderWithProvider;
