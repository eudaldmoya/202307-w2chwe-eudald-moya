import MatrixHandler from "./Classes/Matrix/MatrixHandler.js";

const matrix = new MatrixHandler(20, 20);
const runGame = () => {
  const newStates = matrix.getNewCellStates();
  matrix.setNewCellStates(newStates);
};

setInterval(runGame, 1000);
