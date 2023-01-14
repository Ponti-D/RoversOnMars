import { MarsPlateau } from "./mars";
import { Orientation, Rover } from "./rover";

let orientationMap = new Map<String, Orientation>([
  ["NL", "W"],
  ["NR", "E"],
  ["WL", "S"],
  ["WR", "N"],
  ["SL", "E"],
  ["SR", "W"],
  ["EL", "N"],
  ["ER", "S"],
]);

type Left = "L";
type Right = "R";

export type TurningDirection = Left | Right;

export class RoverHelper {
  static initMarsPlateauMaxiCoordinates(
    maxX: number,
    maxY: number
  ): MarsPlateau {
    let myMars: MarsPlateau = new MarsPlateau(maxX, maxY);
    myMars.RoverOnPlateau = [];
    return myMars;
  }

  static CreateRover(mars: MarsPlateau): Rover | null {
    let rover: Rover = new Rover();

    return rover;
  }

  static NavigateRover(rover: Rover, commands: string): Rover {
    if (rover === null || rover === undefined)
      throw new Error("rover is required");
    if (commands === null || commands === undefined)
      throw new Error("commands is required");

    let commandArray = commands.split("");

    commandArray.forEach((command) => {
      let letter: TurningDirection | string = command;

      switch (letter) {
        case "L":
        case "R":
          this.TurnRover(rover, letter);
          break;
        case "M":
          this.MoveRoverByOneGrid(rover);
          break;
        default:
          break;
      }
    });
    return rover;
  }

  static MoveRoverByOneGrid(rover: Rover): [number, number] | undefined {
    if (rover === null || rover === undefined)
    throw new Error("rover is required");
    const orientation: Orientation = rover.currentOrientation;
    let [x, y] = [...rover.currentGrid];

    switch (orientation) {
      case "W":
        return (rover.currentGrid = [x - 1, y]);

      case "E":
        return (rover.currentGrid = [x + 1, y]);

      case "N":
        return (rover.currentGrid = [x, y + 1]);

      case "S":
        return (rover.currentGrid = [x, y - 1]);

      default:
        return rover.currentGrid;
    }
  }

  static TurnRover(
    rover: Rover,
    turn: TurningDirection
  ): Orientation | undefined {
    rover.currentOrientation = this.getOrientationAfterTurn(
      rover.currentOrientation,
      turn
    );
    return rover.currentOrientation;
  }

  static GetRoverCount(mars: MarsPlateau): number {
    return mars.RoverOnPlateau.length;
  }

  static CheckIfRoverCanMove(mars: MarsPlateau) {
    return null;
  }

  private static getOrientationAfterTurn(
    currentOrientation: Orientation,
    turn: TurningDirection
  ): Orientation | undefined {
    return orientationMap.get(currentOrientation + turn);
  }
}
