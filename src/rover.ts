type North = "N";
type South = "S";
type East = "E";
type West = "W";

export type Orientation = North | South | West | East |"" ;

export interface IRover {
  id: number;
  name: string;
  currentGrid: [number, number];
  currentOrientation?: Orientation;
}
export class Rover implements IRover {
   id: number = 0;
   name: string = "";
   currentGrid: [number, number] = [0, 0];
   currentOrientation: Orientation= "";
  
}
