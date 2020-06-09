import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button from "./index";

describe("HorizontalList", () => {
  it("Should render button", () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText("Test")).toBeTruthy();
  });

  it("Should click button with a callback", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Test</Button>);
    const button = getByText("Test");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
