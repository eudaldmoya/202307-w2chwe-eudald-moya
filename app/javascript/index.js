import MatrixHandler from "./Classes/Matrix/MatrixHandler.js";

const matrix = new MatrixHandler(20, 20);
const runGame = () => {
  const newStates = matrix.getNewCellsState();
  matrix.setNewCellsState(newStates);
};

setInterval(runGame, 1000);
