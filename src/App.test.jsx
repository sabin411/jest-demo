import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe(App, () => {
  it("checking if the component renders the document", () => {
    render(<App />);
    const element = screen.getByText("Hello, World!");
    //test fails if the text is different
    expect(element).toBeInTheDocument();
  });
});
