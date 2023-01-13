import { MarsPlateau } from "./mars";
import { Rover } from "./rover";

describe("Mars", () => {
  test("should return a new mars", () => {
    let mars = new MarsPlateau(0, 0);
    expect(mars).toBeInstanceOf(MarsPlateau);
  });

  test("check mars max size", () => {
    let mars = new MarsPlateau(5, 5);
    expect(mars.maxGrid).toEqual([5, 5]);
  });

  test("check mars has rover numbers", () => {
    const roverCount: Rover[] = [
      {
        id: 1,
        name: "rover1",
        currentGrid: [0, 2],
        currentOrientation: "N",
      },
      {
        id: 2,
        name: "rover2",
        currentGrid: [0, 0],
        currentOrientation: "N",
      },
    ];
    let mars = new MarsPlateau(5, 5);
    mars.RoverOnPlateau = roverCount;

    expect(mars.RoverOnPlateau.length).toEqual(2);
  });

});
