import { Mars } from "./mars";

describe("Mars", () => {
    let mars = new Mars(5,5);
    it("should return a new mars", () => {
      expect(mars).toBeInstanceOf(Mars);
    })
});