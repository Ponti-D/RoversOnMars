import { RoverHelper } from "./roverHelper";
import { MarsPlateau } from "./mars";

describe("RoverHelper can create Mars", () => {
    test("RoverHelper can create Mars", () => {
      expect(RoverHelper.initMarsPlateauMaxiCoordinates(5,5)).toBeInstanceOf(MarsPlateau);
    });
    test("RoverHelper can create Mars", () => {
      let mars = RoverHelper.initMarsPlateauMaxiCoordinates(5,5)
      expect(mars.maxGrid).toEqual([5,5]);
    });
});

describe("", () => {

 

});