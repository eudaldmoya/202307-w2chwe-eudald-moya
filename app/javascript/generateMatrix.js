const generateMatrix = (rows, columns) => {
  if (rows < 3 || columns < 3) {
    throw new Error("Matrix must be at least 3x3");
  }

  if (rows > 50 || columns > 50) {
    throw new Error("Matrix must be 50x50 or less");
  }

  const itemsList = [];
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      itemsList.push({ i, j });
    }
  }

  return itemsList;
};

export default generateMatrix;
