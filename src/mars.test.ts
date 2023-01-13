import { MarsPlateau } from "./mars";

describe("Mars", () => {
  
  test("should return a new mars", () => {
    let mars = new MarsPlateau(0, 0);
    expect(mars).toBeInstanceOf(MarsPlateau);
  });
  
  test("check mars max size", () => {
    let mars = new MarsPlateau(5, 5);
    expect(mars.maxGrid).toEqual([5, 5]);
  });


});
