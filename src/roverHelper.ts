import { MarsPlateau } from "./mars";
import { Orientation, Rover } from "./rover";

let orientationMap = new Map<String, string>([
    ["NL", "W"],
    ["NR", "E"],
    ["WL", "S"],
    ["WR", "N"],
    ["SL", "E"],
    ["SW", "W"],
    ["EL", "N"],
    ["ER", "S"],
]
);

type NorthLeft = "W";
type NorthRight = "E";
type WestLeft = "S";
type WestRight = "N";
type SouthLeft = "E";
type SouthRight = "W";
type EastLeft = "N";
type EastRight = "S";

type Left = "L";
type Right = "R";

export type OrientationHelper = NorthLeft | NorthRight | WestLeft | WestRight | SouthLeft | SouthRight | EastLeft | EastRight;
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

    static MoveRover(rover: Rover, moveCommands: string): boolean {
    
          

      return false;
    }

    static TurnRover(rover: Rover, turn: TurningDirection): string | undefined{
      let currentOrientation = rover.currentOrientation;
      let newORientation: string | undefined = this.getOrientationAfterMove(currentOrientation,turn);
      
      
      return newORientation ;
    }

    static GetRoverCount(mars: MarsPlateau): number {
        return mars.RoverOnPlateau.length;
    }


    static CheckIfRoverCanMove(mars: MarsPlateau) {

        return null;
    }

    private static getOrientationAfterMove(currentOrientation: Orientation, turn: TurningDirection ) : string | undefined {
        let o: string | undefined   = orientationMap.get(currentOrientation+turn);
        
        return o;
    }

}
