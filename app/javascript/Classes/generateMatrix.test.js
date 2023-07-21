import generateMatrix from "../generateMatrix";

describe("Given a generateMatrix function", () => {
  describe("When it receives 2, 2", () => {
    test("Then it should return an array with 4 objects", () => {
      const rows = 2;
      const columns = 2;
      const expectedArray = [
        { i: 1, j: 1 },
        { i: 1, j: 2 },
        { i: 2, j: 1 },
        { i: 2, j: 2 },
      ];

      const generatedMatrix = generateMatrix(rows, columns);

      expect(generatedMatrix).toStrictEqual(expectedArray);
    });
  });
});
