import React from "react";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./mockStore";

export const renderWithProvider = (ui) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
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
