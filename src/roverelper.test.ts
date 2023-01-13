import { RoverHelper } from "./roverHelper";
import { Mars } from "./mars";

describe("RoverHelper can create Mars", () => {
    let mars = new Mars(5,5);
    it("RoverHelper can create Mars", () => {
      expect(RoverHelper.initMarsPlateauMaxiCoordinates(5,5)).toBeInstanceOf(Mars);
    })
});