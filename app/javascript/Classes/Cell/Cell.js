class Cell {
  isAlive;
  Iposition;
  Jposition;

  constructor(Iposition, Jposition, isAlive = false) {
    this.Iposition = Iposition;
    this.Jposition = Jposition;
    this.isAlive = isAlive;
  }
}

export default Cell;
