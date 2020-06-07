import React from "react";
import NavBar from "./NavBar";
import renderWithProvider from "../../testUtils/testRenderer";

describe("NavBar", () => {
  it("Should render logo", () => {
    const { getByTestId } = renderWithProvider(<NavBar />);
    expect(getByTestId("rakuten-logo")).toBeTruthy();
  });

  it("Should render movie id", () => {
    const movie = { data: { title: "001" } };
    const { getByText } = renderWithProvider(<NavBar />, { movie });
    expect(getByText(/001/i)).toBeTruthy();
  });
});
