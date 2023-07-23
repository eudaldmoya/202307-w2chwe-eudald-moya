import MatrixHandler from "./MatrixHandler";

describe("Given the MatrixHandler.setNeighboursList method", () => {
  describe("When it receives 0, 0", () => {
    test("Then first cell should have 5 undefined neighbours", () => {
      const matrix = new MatrixHandler(4, 4);
      const expectedUndefinedNeighbours = 5;

      const neighbours = matrix.setNeighboursList(0, 0);
      const amountOfNeighbours = neighbours.filter(
        (neighbour) => neighbour === "undefined"
      ).length;

      expect(amountOfNeighbours).toBe(expectedUndefinedNeighbours);
    });
  });

  describe("When it receives 0, 1", () => {
    test("Then it should have 3 undefined neighbours", () => {
      const matrix = new MatrixHandler(4, 4);
      const expectedNeighbours = 3;

      const neighbours = matrix.setNeighboursList(0, 1);
      const amountOfNeighbours = neighbours.filter(
        (neighbour) => neighbour === "undefined"
      ).length;

      expect(amountOfNeighbours).toBe(expectedNeighbours);
    });
  });

  describe("When it receives 1, 1", () => {
    test("Then it should have 0 undefined neighbours", () => {
      const matrix = new MatrixHandler(4, 4);
      const expectedNeighbours = 0;

      const neighbours = matrix.setNeighboursList(1, 1);
      const amountOfNeighbours = neighbours.filter(
        (neighbour) => neighbour === "undefined"
      ).length;

      expect(amountOfNeighbours).toBe(expectedNeighbours);
    });
  });
});
