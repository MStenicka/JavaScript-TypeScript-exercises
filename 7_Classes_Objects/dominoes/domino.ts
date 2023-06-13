class Domino {
  private sides: [number, number];

  constructor(left: number, right: number) {
    this.sides = [left, right];
  }

  getSides() {
    return this.sides;
  }

  getLeft() {
    return this.sides[0];
  }

  getRight() {
    return this.sides[1];
  }
}

export { Domino };
