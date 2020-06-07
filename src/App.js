import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import theme from "./globalStyles/theme";
import store from "./redux/store";
import Routes from "./routes";
import { GlobalStyle } from "./App.styled";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
