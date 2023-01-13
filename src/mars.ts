export interface IMars {
  minGrid: [number, number];
  maxGrid: [number, number];
  shape?: string;
}

export class Mars implements IMars {
  minGrid: [number, number] = [0, 0];
  maxGrid: [number, number] = [0, 0];
  shape = "Rectangular";

  constructor(maxX: number, maxY: number) {
    this.maxGrid = [maxX, maxY];
  }
}
