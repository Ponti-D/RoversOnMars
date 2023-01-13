export interface IRover {
  id: number;
  name: string;
  currentGrid: [number, number];
  currentOrientation: string;
}
export class Rover implements IRover {
  id: number = 0;
  name: string = "";
  currentGrid: [number, number] = [0, 0];
  currentOrientation: string = "";
}
