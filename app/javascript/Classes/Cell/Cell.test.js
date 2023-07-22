import Cell from "./Cell";

describe("Given a class Cell", () => {
  describe("When instanciating with 2, 2, true", () => {
    test("Then it should return a cell {}", () => {
      const iPosition = 2;
      const jPosition = 3;
      const isAlive = true;
      const expectedObject = { iPosition: 2, jPosition: 3, isAlive: true };

      const instanciatedObject = new Cell(iPosition, jPosition, isAlive);

      expect(instanciatedObject).toEqual(expectedObject);
    });
  });
});
