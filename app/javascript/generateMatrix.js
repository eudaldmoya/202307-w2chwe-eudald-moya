const generateMatrix = (rows, columns) => {
  const itemsList = [];
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      itemsList.push({ i, j });
    }
  }

  return itemsList;
};

export default generateMatrix;
