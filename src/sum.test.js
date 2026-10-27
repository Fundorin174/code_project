import { sum } from "./sum";

describe("sum function", () => {
  it("Сумма", () => {
    expect(sum(2, 3)).toEqual(5);
  });
  it("Сумма не правильная", () => {
    expect(sum(2, 3)).not.toEqual(6);
  });
});