import { describe, test, expect } from "@jest/globals";
import { divide } from "../src/calculator.js";

describe("divide", () => {
  test("divides two valid numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("throws TypeError when an argument is not a number", () => {
    expect(() => divide("10", 2)).toThrow(TypeError);
  });

  test("throws TypeError when an argument is NaN", () => {
    expect(() => divide(NaN, 2)).toThrow(TypeError);
  });

  test("throws RangeError when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow(RangeError);
  });

  test("throws TypeError when an argument is missing", () => {
    expect(() => divide(10)).toThrow(TypeError);
  });
});
