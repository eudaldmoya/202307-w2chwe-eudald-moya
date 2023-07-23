import MatrixHandler from "./MatrixHandler";

describe("Given the MatrixHandler.setNeighboursList method", () => {
  describe("When it receives 0, 0", () => {
    test("Then it should return an array with length 8", () => {
      const matrix = new MatrixHandler(4, 4);
      const expectedNeighbours = 5;

      const neighbours = matrix.setNeighboursList(0, 0);
      const amountOfNeighbours = neighbours.filter(
        (neighbour) => neighbour === "undefined"
      ).length;

      expect(amountOfNeighbours).toBe(expectedNeighbours);
    });
  });
});
