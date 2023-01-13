import { MarsPlateau } from "./mars";
import { Orientation, Rover } from "./rover";

let orientationMap = new Map<String, string>([
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

  static MoveRover(rover: Rover): [number, number] | undefined {
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

  static TurnRover(rover: Rover, turn: TurningDirection): string | undefined {
    let currentOrientation = rover.currentOrientation;
    let newORientation: string | undefined = this.getOrientationAfterTurn(
      currentOrientation,
      turn
    );

    return newORientation;
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
  ): string | undefined {
    return orientationMap.get(currentOrientation + turn);
  }
}
