import { Rover } from "./rover";

describe("Rovers", () => {
  test("should return a new rover", () => {
    let rover = new Rover();
    expect(rover).toBeInstanceOf(Rover);
  });

  test("should return rover cuurent grid", () => {
    let rover = new Rover();
    rover.currentGrid = [2, 2];
    expect(rover.currentGrid).toEqual([2, 2]);
  });

  test("should return rover current orientation", () => {
    let rover = new Rover();
    rover.currentOrientation = "N";
    expect(rover.currentOrientation).toEqual("N");
  });
});
