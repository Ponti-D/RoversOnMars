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

  test("Setting new orientation for N -> L", () => {
    const rover = new Rover();
    rover.currentOrientation="N";
    expect(RoverHelper.TurnRover(rover, "L" )).toEqual(rover.currentOrientation="W");
    
  });
  test("Setting new orientation for N -> R ", () => {
    const rover = new Rover();
    rover.currentOrientation="N";
    expect(RoverHelper.TurnRover(rover, "R" )).toEqual(rover.currentOrientation="E");
    
  });

  test("Setting new orientation for W -> L ", () => {
    debugger
    const rover = new Rover();
    rover.currentOrientation="W";
    expect(RoverHelper.TurnRover(rover, "L" )).toEqual(rover.currentOrientation="S");
    
  });

  test("Setting new orientation for W -> R ", () => {
    const rover = new Rover();
    rover.currentOrientation="W";
    expect(RoverHelper.TurnRover(rover, "R" )).toEqual(rover.currentOrientation="N");
    
  });
  test("Setting new orientation for S -> L ", () => {
    const rover = new Rover();
    rover.currentOrientation="S";
    expect(RoverHelper.TurnRover(rover, "L" )).toEqual(rover.currentOrientation="E");
    
  });

  test("Setting new orientation for S -> R ", () => {
   debugger;
    const rover = new Rover();
    rover.currentOrientation="S";
    console.log(rover.currentOrientation);
    expect(RoverHelper.TurnRover(rover, "R" )).toEqual(rover.currentOrientation="W");
    
  });

  test("Setting new orientation for E -> L ", () => {
    const rover = new Rover();
    rover.currentOrientation="E";
    expect(RoverHelper.TurnRover(rover, "L" )).toEqual(rover.currentOrientation="N");  
  });

  test("Setting new orientation for E -> R ", () => {
    const rover = new Rover();
    rover.currentOrientation="E";
    expect(RoverHelper.TurnRover(rover, "R" )).toEqual(rover.currentOrientation="S");  
  });

  test("Move rover to a new location", () => {
    const rover = new Rover();
    rover.currentGrid=[1,2];
    rover.currentOrientation="N";   
    expect(RoverHelper.MoveRover(rover)).toEqual([1,3]);
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

