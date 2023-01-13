import { Rover } from "./rover";

export interface IMars {
  minGrid: [number, number];
  maxGrid: [number, number];
  RoverOnPlateau: Rover[];
  shape?: string;
}

export class MarsPlateau implements IMars {
  minGrid: [number, number] = [0, 0];
  maxGrid: [number, number] = [0, 0];
  shape = "Rectangular";
  RoverOnPlateau: Rover[]=[];

  constructor(maxX: number, maxY: number) {
    this.maxGrid = [maxX, maxY];
  }

 
}
