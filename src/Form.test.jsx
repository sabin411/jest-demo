import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "./Form";
import "@testing-library/jest-dom";

describe("Login Form component", () => {
  it("validates email and password length", () => {
    const { getByPlaceholderText, getByText } = render(<Form />);

    // Get email and password input fields
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");

    // Get submit button
    const submitButton = getByText("Submit");

    // Valid email and password
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);
    expect(getByText("Form is valid")).toBeInTheDocument();
  });
});
