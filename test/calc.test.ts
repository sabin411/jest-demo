import { add, mul } from "../src/calc";

describe("test add function", () => {
  it("should return 15 for add(10, 5)", () => {
    const result = add({ x: 10, y: 5 });
    expect(result).toBe(15);
  });

  it("should return 5 for add(2, 3)", () => {
    const result = add({ x: 2, y: 3 });
    expect(result).toBe(5);
  });

  it("should return 6 for mul(2, 3)", () => {
    const result = mul({ x: 2, y: 3 });
    expect(result).toBe(6);
  });
});

describe("test mul function", () => {
  it("should return 15 for mul(3, 5)", () => {
    const result = mul({ x: 3, y: 5 });
    expect(result).toBe(15);
  });
});

describe("Sabin Testing", () => {
  it("Checking if the test passes", () => {
    const result = mul({ x: 4, y: 5 });
    expect(result).toBe(20);
  });
});
