import MatrixHandler from "./Classes/Matrix/MatrixHandler.js";

const matrix = new MatrixHandler(20, 20);
const runGame = () => {
  console.table(matrix.cellList);
  const newStates = matrix.getNewCellsState();
  matrix.setNewCellStates(newStates);
  console.table(matrix.cellList);
};

setInterval(runGame, 1000);
