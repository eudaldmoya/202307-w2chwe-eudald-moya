import Cell from "./Classes/Cell/Cell.js";
import Matrix from "./Classes/Matrix/Matrix.js";

const matrix = new Matrix(4, 4);
console.table(matrix.cellList);

const cell = new Cell(2, 2, true);
console.log(cell);
