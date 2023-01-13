import { MarsPlateau } from "./mars";

export class RoverHelper{
    static initMarsPlateauMaxiCoordinates(maxX:number, maxY:number): MarsPlateau {
       let myMars: MarsPlateau = new MarsPlateau(maxX,maxY);
       return myMars;
    }
}

