import { Food } from "./Food.js";

export class Cherry extends Food {
  constructor(y, x) {
    super(y, x);
    this.pointsCherry = 20;
  }

  toString() {
    console.log(`Cherry at row: ${this.coordY} column: ${this.coordX}`);
    return `Cherry: ${this.pointsCherry}`;
  }
}
