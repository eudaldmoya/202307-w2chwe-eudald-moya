import Cell from "./Cell";

describe("Given a class Cell", () => {
  describe("When instanciating with true", () => {
    test("Then it should return a cell {isAlive: true}", () => {
      const isAlive = true;
      const expectedObject = { isAlive: true };

      const instanciatedObject = new Cell(isAlive);

      expect(instanciatedObject).toEqual(expectedObject);
    });
  });
});
