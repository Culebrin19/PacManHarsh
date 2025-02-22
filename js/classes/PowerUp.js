import { GameObject } from "./GameObject.js";

/**
 * @class Food és una classe filla de GameObject que representa el menjar del joc i "controla" el tema de punts del food.
 */
export class PowerUp extends GameObject {
  constructor(y, x) {
    super(y, x);
    this.active = false;
    this.startTime = 0;
    this.endTime = 0;
    this.MAX_TIME = 10;
  }

  toString() {
    console.log(`PowerUp at row: ${this.coordY} column: ${this.coordX}`);
    return `Food: ${this.pointsFood}`;
  }
}
