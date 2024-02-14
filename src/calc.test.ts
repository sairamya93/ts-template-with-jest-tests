import { add } from "../src/calc";
import { maxValue } from "../src/calc";

describe("test add function", () => {
  it("should return 15 for add(10,5)", () => {
    expect(add(10, 5)).toBe(15);
  });
  it("should return 5 for add(2,3)", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("test max value from the list of numbers", () => {
  let inputNos=[2,5,30,20]
  let expectedResult=30
  test("should return 30 for the list 2,5,30,20",() => {
    expect(maxValue(inputNos)).toBe(expectedResult);
  }
)
})

