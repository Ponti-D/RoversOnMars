import { Mars } from "./mars";

describe("Mars", () => {
  let mars = new Mars(5, 5);
  
  it("should return a new mars", () => {
    expect(mars).toBeInstanceOf(Mars);
  });

  it("check mars max size", () => {
    expect(mars.maxGrid).toEqual([5, 5]);
  });

  it("check mars current grid", () => {
    expect(mars.currentGrid).toEqual([4,4]);
  });

});
