export class DiceSet {
  private dice: number[] = [];
  readonly numberOfDies: number = 6;

  roll() {
    this.dice = [];

    for (let i = 0; i < this.numberOfDies; i++) {
      this.reroll(i);
    }

    return this.dice;
  }

  reroll(index?: number) {
    if (index !== undefined) {
      this.dice[index] = 1 + Math.floor(Math.random() * 6);
      return;
    }

    for (let i = 0; i < this.numberOfDies; i++) {
      this.reroll(i);
    }
  }

  getCurrent(): number[];
  getCurrent(index: number): number;
  getCurrent(index?: number) {
    if (index !== undefined) {
      return this.dice[index];
    }

    return this.dice;
  }
}
