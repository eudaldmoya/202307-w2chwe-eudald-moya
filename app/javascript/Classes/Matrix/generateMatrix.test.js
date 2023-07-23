import { default as MatrixHandler } from "./MatrixHandler";

describe("Given a MatrixHandler class", () => {
  describe("When it receives 3, 3", () => {
    test("Then it should return an array with 9 objects", () => {
      const rows = 3;
      const columns = 3;
      const expectedLength = 3;

      const generatedMatrix = new MatrixHandler(rows, columns);
      const { cellList } = generatedMatrix;

      expect(cellList).toHaveLength(expectedLength);
    });
  });

  describe("When it receives 60, 60", () => {
    test("Then it should throw error with message 'Matrix must be 50x50 or less'", () => {
      const rows = 60;
      const columns = 60;
      const expectedTextError = "Matrix must be 50x50 or less";

      expect(() => {
        const matrix = new MatrixHandler(rows, columns);
      }).toThrow(new Error(expectedTextError));
    });
  });

  describe("When it receives 2, 2", () => {
    test("Then it should throw error with message 'Matrix must be at least 3x3'", () => {
      const rows = 2;
      const columns = 2;
      const expectedTextError = "Matrix must be at least 3x3";

      expect(() => {
        const matrix = new MatrixHandler(rows, columns);
      }).toThrow(new Error(expectedTextError));
    });
  });
});
