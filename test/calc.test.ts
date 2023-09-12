import { add, mul } from "../src/calc";

describe("test add function", () => {
  it("should return 15 for add(10, 5)", () => {
    expect(add(10, 5)).toBe(15);
  });

  it("should return 5 for add(2, 3)", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should return 6 for mul(2, 3)", () => {
    expect(mul(2, 3)).toBe(6);
  });
});

describe("test mul function", () => {
  it("should return 15 for mul(3, 5)", () => {
    expect(mul(3, 5)).toBe(15);
  });
});

describe("Sabin Testing", () => {
  it("Checking if the test passes", () => {
    expect(mul(4, 5)).toBe(20);
  });
});
