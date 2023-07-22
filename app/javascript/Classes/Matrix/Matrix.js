import Cell from "../Cell/Cell.js";

class Matrix {
  rows;
  columns;
  cellList;

  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.cellList = this.generateMatrix();
  }

  generateMatrix() {
    if (this.rows < 3 || this.columns < 3) {
      throw new Error("Matrix must be at least 3x3");
    }

    if (this.rows > 50 || this.columns > 50) {
      throw new Error("Matrix must be 50x50 or less");
    }

    const cellRows = [];
    for (let i = 1; i <= this.rows; i++) {
      const cellColumns = [];
      for (let j = 1; j <= this.columns; j++) {
        const cell = new Cell(i, j, false);
        cellColumns.push(cell);
      }

      cellRows.push(cellColumns);
    }

    return cellRows;
  }

  getNewCellsState() {
    const newStatesList = [];
    for (let i = 1; i <= this.cellList.length; i++) {
      for (let j = 1; j <= this.cellList[0].length; j++) {
        newStatesList.push(this.calculateNewCellState(i, j));
      }
    }
  }
}

export default Matrix;
