import Cell from "./Classes/Cell/Cell.js";
import Matrix from "./Classes/Matrix/MatrixHandler.js";

const matrix = new Matrix(4, 4);
console.table(matrix.cellList);
console.log(matrix.getNewCellsState());

const cell = new Cell(2, 2, true);
console.log(cell);
