import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`${({ theme }) => `
  body {
      margin: 0;
      min-height: 100%;
      font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
        "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: ${theme.backgroundColor};
      color: ${theme.onBackgroundColor}
`}
`;
