import Cell from "./Classes/Cell/Cell.js";
import MatrixHandler from "./Classes/Matrix/MatrixHandler.js";

const matrix = new MatrixHandler(4, 4);
console.table(matrix.cellList);
console.log(matrix.getNewCellsState());

const cell = new Cell(2, 2, true);
console.log(cell);
