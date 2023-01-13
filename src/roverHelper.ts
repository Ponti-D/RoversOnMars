import { Mars } from "./mars";

export class RoverHelper{
    static initMarsPlateauMaxiCoordinates(maxX:number, maxY:number): Mars {
       let myMars: Mars = new Mars(maxX,maxY);
       return myMars;

    }
}
