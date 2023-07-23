import Cell from "../Cell/Cell.js";

class MatrixHandler {
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
        const cell = new Cell(Math.random() < 0.4);
        cellColumns.push(cell);
      }

      cellRows.push(cellColumns);
    }

    return cellRows;
  }

  getNewCellsState() {
    const newStatesList = [];
    for (let i = 0; i < this.cellList.length; i++) {
      for (let j = 0; j < this.cellList[0].length; j++) {
        newStatesList.push(this.calculateNewCellState(i, j));
      }
    }

    return newStatesList;
  }

  calculateNewCellState(i, j) {
    const neighbours = this.setNeighboursList(i, j);
    let amountOfNeighboursAlive = 0;
    neighbours.forEach((neighbour) => {
      if (neighbour === true) {
        amountOfNeighboursAlive++;
      }
    });
    if (
      this.cellList[i][j].isAlive === false &&
      amountOfNeighboursAlive === 3
    ) {
      return true;
    }

    if (this.cellList[i][j].isAlive) {
      if (amountOfNeighboursAlive === 2 || amountOfNeighboursAlive === 3) {
        return true;
      }

      return false;
    }

    return false;
  }

  setNeighboursList(i, j) {
    const neighbours = [
      typeof this.cellList[i - 1] === "undefined" ||
      typeof this.cellList[i - 1][j - 1] === "undefined"
        ? "undefined"
        : this.cellList[i - 1][j - 1].isAlive,
      typeof this.cellList[i - 1] === "undefined" ||
      typeof this.cellList[i - 1][j] === "undefined"
        ? "undefined"
        : this.cellList[i - 1][j].isAlive,
      typeof this.cellList[i - 1] === "undefined" ||
      typeof this.cellList[i - 1][j + 1] === "undefined"
        ? "undefined"
        : this.cellList[i - 1][j + 1].isAlive,
      typeof this.cellList[i] === "undefined" ||
      typeof this.cellList[i][j - 1] === "undefined"
        ? "undefined"
        : this.cellList[i][j - 1].isAlive,
      typeof this.cellList[i] === "undefined" ||
      typeof this.cellList[i][j + 1] === "undefined"
        ? "undefined"
        : this.cellList[i][j + 1].isAlive,
      typeof this.cellList[i + 1] === "undefined" ||
      typeof this.cellList[i + 1][j - 1] === "undefined"
        ? "undefined"
        : this.cellList[i + 1][j - 1].isAlive,
      typeof this.cellList[i + 1] === "undefined" ||
      typeof this.cellList[i + 1][j] === "undefined"
        ? "undefined"
        : this.cellList[i + 1][j].isAlive,
      typeof this.cellList[i + 1] === "undefined" ||
      typeof this.cellList[i + 1][j + 1] === "undefined"
        ? "undefined"
        : this.cellList[i + 1][j + 1].isAlive,
    ];
    return neighbours;
  }
}

export default MatrixHandler;
