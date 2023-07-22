import generateMatrix from "../generateMatrix";

describe("Given a generateMatrix function", () => {
  describe("When it receives 3, 3", () => {
    test("Then it should return an array with 9 objects", () => {
      const rows = 3;
      const columns = 3;
      const expectedArray = [
        { i: 1, j: 1 },
        { i: 1, j: 2 },
        { i: 1, j: 3 },
        { i: 2, j: 1 },
        { i: 2, j: 2 },
        { i: 2, j: 3 },
        { i: 3, j: 1 },
        { i: 3, j: 2 },
        { i: 3, j: 3 },
      ];

      const generatedMatrix = generateMatrix(rows, columns);

      expect(generatedMatrix).toStrictEqual(expectedArray);
    });
  });

  describe("When it receives 60, 60", () => {
    test("Then it should throw error with message 'Matrix must be 50x50 or less'", () => {
      const rows = 60;
      const columns = 60;
      const expectedTextError = "Matrix must be 50x50 or less";

      expect(() => {
        generateMatrix(rows, columns);
      }).toThrow(new Error(expectedTextError));
    });
  });
});
