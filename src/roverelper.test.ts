import { RoverHelper } from "./roverHelper";
import { MarsPlateau } from "./mars";
import { Rover } from "./rover";

describe("RoverHelper", () => {
  test("RoverHelper can create Mars", () => {
    expect(RoverHelper.initMarsPlateauMaxiCoordinates(5, 5)).toBeInstanceOf(
      MarsPlateau
    );
  });

  test("RoverHelper can create Rover", () => {
    const mars = new MarsPlateau(5, 5);
    let rover = RoverHelper.CreateRover(mars);
    expect(rover).toBeInstanceOf(Rover);
  });

  test("RoverHelper can add rover to Mars count ", () => {
    const mars = new MarsPlateau(5, 5);
    const rover: Rover = {
      id: 1,
      name: "rover1",
      currentGrid: [0, 2],
      currentOrientation: "N",
    };

    mars.RoverOnPlateau.push(rover);
    expect(RoverHelper.GetRoverCount(mars)).toEqual(1);
  });

  test("Setting new orientation for N -> L", () => {
    const rover = new Rover();
    rover.currentOrientation = "N";
    RoverHelper.TurnRover(rover, "L");
    expect(rover.currentOrientation).toEqual("W");
  });

  test("Setting new orientation for N -> R ", () => {
    const rover = new Rover();
    rover.currentOrientation = "N";
    expect(RoverHelper.TurnRover(rover, "R")).toEqual(
      (rover.currentOrientation = "E")
    );
  });

  test("Setting new orientation for W -> L ", () => {
    const rover = new Rover();
    rover.currentOrientation = "W";
    expect(RoverHelper.TurnRover(rover, "L")).toEqual(
      (rover.currentOrientation = "S")
    );
  });

  test("Setting new orientation for W -> R ", () => {
    const rover = new Rover();
    rover.currentOrientation = "W";
    expect(RoverHelper.TurnRover(rover, "R")).toEqual(
      (rover.currentOrientation = "N")
    );
  });
  test("Setting new orientation for S -> L ", () => {
    const rover = new Rover();
    rover.currentOrientation = "S";
    expect(RoverHelper.TurnRover(rover, "L")).toEqual(
      (rover.currentOrientation = "E")
    );
  });

  test("Setting new orientation for S -> R ", () => {
    const rover = new Rover();
    rover.currentOrientation = "S";
    expect(RoverHelper.TurnRover(rover, "R")).toEqual(
      (rover.currentOrientation = "W")
    );
  });

  test("Setting new orientation for E -> L ", () => {
    const rover = new Rover();
    rover.currentOrientation = "E";
    expect(RoverHelper.TurnRover(rover, "L")).toEqual(
      (rover.currentOrientation = "N")
    );
  });

  test("Setting new orientation for E -> R ", () => {
    const rover = new Rover();
    rover.currentOrientation = "E";
    expect(RoverHelper.TurnRover(rover, "R")).toEqual(
      (rover.currentOrientation = "S")
    );
  });

  test("Move rover to a new grid", () => {
    const rover = new Rover();
    rover.currentGrid = [1, 2];
    rover.currentOrientation = "N";
    expect(RoverHelper.MoveRoverByOneGrid(rover)).toEqual([1, 3]);
  });

  test("Move rover to a new location using commands", () => {
    const rover = new Rover();
    rover.currentGrid = [1, 2];
    rover.currentOrientation = "N";
    RoverHelper.NavigateRover(rover, "LMLMLMLMM");

    expect(rover.currentGrid).toEqual([1, 3]);
    expect(rover.currentOrientation).toEqual("N");
  });

  test("Move rover to a new location using commands", () => {
    const rover = new Rover();
    rover.currentGrid = [3, 3];
    rover.currentOrientation = "E";
    debugger;
    RoverHelper.NavigateRover(rover, "MMRMMRMRRM");

    expect(rover.currentGrid).toEqual([5, 1]);
    expect(rover.currentOrientation).toEqual("E");
  });
});
