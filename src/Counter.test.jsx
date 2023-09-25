import React from "react";
import Counter from "./Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe(
  "Counter Component Tests", // Describing the group of tests for the Counter component
  () => {
    it("should display the initial value", () => {
      // Test case: Checking if the counter component displays the initial value (0)
      const { getByTestId } = render(<Counter val={0} />);
      const counterElement = Number(getByTestId("counter").textContent);
      expect(counterElement).toEqual(0); // Expect the displayed value to be 0
    });
  },
  describe("Counter Increment Tests", () => {
    // Describing a sub-group of tests for counter increment functionality
    it("should display the initial value", () => {
      // Test case: Checking if the counter component displays the initial value (0)
      const { getByTestId } = render(<Counter val={0} />);
      const counterElement = Number(getByTestId("counter").textContent);
      expect(counterElement).toEqual(0); // Expect the displayed value to be 0
    });
    it("should increase by 1 when the increase button is clicked", () => {
      // Test case: Checking if the counter increments by 1 when the button is clicked
      const { getByTestId } = render(<Counter val={0} />);
      const increaseButton = getByTestId("increase-button");
      fireEvent.click(increaseButton); // Simulate a click on the increase button
      const counterElement = Number(getByTestId("counter").textContent);
      expect(counterElement).toEqual(1); // Expect the displayed value to be 2 after clicking
    });

    //you can continue adding more tests like decrement, reset, etc.
  })
);
