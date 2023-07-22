class Cell {
  isAlive;
  iPosition;
  jPosition;

  constructor(iPosition, jPosition, isAlive = false) {
    this.iPosition = iPosition;
    this.jPosition = jPosition;
    this.isAlive = isAlive;
  }
}

export default Cell;
