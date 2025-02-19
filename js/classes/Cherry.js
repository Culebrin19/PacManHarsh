import { Food } from "./Food.js";

/**
 * @class Cherry és una classe filla de Food que representa les cireres del joc i "controla" el tema de punts de les cireres.
 */
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
