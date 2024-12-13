import { calculatePercentage, generatePack } from "../src/utilities/helpers";

test("calculates integer percentage", () => {
  expect(calculatePercentage(100, 10)).toEqual(10);
  expect(calculatePercentage(5, 5)).toEqual(100);
  expect(calculatePercentage(1000, 105)).toEqual(10);
});

test("generate pack of cards of certain size", () => {
  expect(generatePack("small", "cryingCat")).toHaveLength(12);
  expect(generatePack("medium", "cryingCat")).toHaveLength(24);
  expect(generatePack("large", "cryingCat")).toHaveLength(40);
});
