import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../globalStyles/theme";
import Button from "./index";

describe("HorizontalList", () => {
  it("Should render button", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>Test</Button>
      </ThemeProvider>
    );
    expect(getByText("Test")).toBeTruthy();
  });

  it("Should click button with a callback", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick}>Test</Button>
      </ThemeProvider>
    );
    const button = getByText("Test");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
