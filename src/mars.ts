export interface IMars {
  minGrid: [number, number];
  maxGrid: [number, number];
  currentGrid: [number, number];
  currentOrientation: string;
  shape?: string;
}

export class Mars implements IMars {
  minGrid: [number, number] = [0, 0];
  maxGrid: [number, number] = [0, 0];
  shape = "Rectangular";

  constructor(maxX: number, maxY: number) {
    this.maxGrid = [maxX, maxY];
  }
  currentGrid: [number, number] = [0, 0];
  currentOrientation: string = "";
}