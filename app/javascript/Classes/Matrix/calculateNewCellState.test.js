import MatrixHandler from "./MatrixHandler";

describe("Given the MatrixHandler.calculateNewCellState", () => {
  describe("When it receives 0, 1", () => {
    test("Then it should return true or false", () => {
      const rows = 4;
      const columns = 4;
      const row = 1;
      const column = 1;
      const matrix = new MatrixHandler(rows, columns);

      const newCellState = matrix.calculateNewCellState(row, column);

      expect(newCellState).toBeOneOf([true, false]);
    });
  });
});
