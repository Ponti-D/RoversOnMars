import { RoverHelper } from "./roverHelper";
import { MarsPlateau } from "./mars";
import { Rover } from "./rover";

describe("RoverHelper", () => {
  test("RoverHelper can create Mars", () => {
    expect(RoverHelper.initMarsPlateauMaxiCoordinates(5, 5)).toBeInstanceOf(MarsPlateau);
  });

  test("RoverHelper can create Rover", () => {
    const mars = new MarsPlateau(5, 5);
    let rover = RoverHelper.CreateRover(mars)
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

  test("Setting new orientation after turning", () => {
    const rover = new Rover();
    rover.currentOrientation="N";
    expect(RoverHelper.TurnRover(rover, "L" )).toEqual(rover.currentOrientation="W");
    
  });

  test("A rover allowed to move ", () => {
    const mars = new MarsPlateau(5, 5);     
    expect(RoverHelper.CheckIfRoverCanMove(mars)).toEqual(true);
  });

  test("A rover is not allowed to move ", () => {
    const mars = new MarsPlateau(5, 5); 
    expect(RoverHelper.CheckIfRoverCanMove(mars)).toEqual(false);
  });


});

