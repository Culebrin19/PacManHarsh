import { GameObject } from "./GameObject.js";
import { IMAGE_SIZE, WIDTH_CANVAS, HEIGHT_CANVAS, LIVES_PACMAN } from "../sketch.js";
import { Freezer } from "./Freezer.js";
import { Food } from "./Food.js";

export class Goku extends GameObject {
  constructor(y, x) {
    super(y, x);
    this.direction = 1;
    this.speedPacman = 32;
    this.score = 0;
    this.pacmanLive = LIVES_PACMAN; // acabar de veure com fer que restin
    this.widthCanvasPacman = 128;
    this.pacmanDiametre = 32;
  }

  /**
   * @function moveRight mou el pacman cap a la dreta i comprova si colisiona amb una roca o si es menja un food.
   * Té els següents parametres:
   * @param arrFood
   * @param arrRocks
   * @param arrFreezer
   */
  moveRight(arrFood, arrRocks, arrFreezer) {
    const temp = this.coordXPixels + this.speedPacman;
    if (temp >= WIDTH_CANVAS - IMAGE_SIZE || this.testCollideRock(arrRocks, temp, this.coordYPixels)) {
      console.log("Error, no es pot moure a la dreta");
    } else {
      this.direction = 1;
      this.coordXPixels = temp;
      this.eatFood(arrFood, arrFreezer);
    }
  }

  /**
   * @function moveLeft mou el pacman cap a l'esquerra i comprova si colisiona amb una roca o si es menja un food.
   * Té els següents parametres:
   * @param arrFood
   * @param arrRocks
   * @param arrFreezer
   */
  moveLeft(arrFood, arrRocks, arrFreezer) {
    const temp = this.coordXPixels - this.speedPacman;
    if (temp < 0 || this.testCollideRock(arrRocks, temp, this.coordYPixels)) {
      console.log("Error, no es pot moure a l'esquerra");
    } else {
      this.direction = 3;
      this.coordXPixels = temp;
      this.eatFood(arrFood, arrFreezer);
    }
  }

  /**
   * @function moveUp mou el pacman cap a dalt i comprova si colisiona amb una roca o si es menja un food.
   * Té els següents parametres:
   * @param arrFood
   * @param arrRocks
   * @param arrFreezer
   */
  moveUp(arrFood, arrRocks, arrFreezer) {
    const temp = this.coordYPixels - this.speedPacman;
    if (temp < 0 || this.testCollideRock(arrRocks, this.coordXPixels, temp)) {
      console.log("Error, no es pot moure a dalt");
    } else {
      this.direction = 2;
      this.coordYPixels = temp;
      this.eatFood(arrFood, arrFreezer);
    }
  }

  /**
   * @function moveDown mou el pacman cap a baix i comprova si colisiona amb una roca o si es menja un food.
   * Té els següents parametres:
   * @param arrFood
   * @param arrRocks
   * @param arrFreezer
   */
  moveDown(arrFood, arrRocks, arrFreezer) {
    const temp = this.coordYPixels + this.speedPacman;
    if (temp >= WIDTH_CANVAS - IMAGE_SIZE || this.testCollideRock(arrRocks, this.coordXPixels, temp)) {
      console.log("Error, no es pot moure a baix");
    } else {
      this.direction = 4;
      this.coordYPixels = temp;
      this.eatFood(arrFood, arrFreezer);
    }
  }

  /**
   * @function testCollideRock comprova si el pacman colisiona amb una roca.
   * En el cas de que si, mostra un missatge per consola de que ha colissionat amb una roca i el mou a la posicio inicial.
   * Apart d'això, li resta una vida.
   * Té els següents parametres:
   * @param arrRocks
   * @param newX
   * @param newY
   * @returns {boolean}
   */
  testCollideRock(arrRocks, newX, newY) {
    for (const roca of arrRocks) {
      if (newX === roca.coordXPixels && newY === roca.coordYPixels) {
        console.log("Has colisionat amb una roca");
        alert("Has xocat amb una roca, has perdut una vida");
        this.coordYPixels = 160;
        this.coordXPixels = 256;
        return true;
      }
    }
    return false;
  }

  // testCollideFood(arrFood) {
  //   for (let i = 0; i < arrFood.length; i++) {
  //     if (this.coordXPixels === arrFood[i].coordXPixels && this.coordYPixels === arrFood[i].coordYPixels) {
  //       console.log("Has menjat food");
  //       arrFood.splice(i, 1);
  //     }
  //   }
  // }

  /**
   * @function eatFood comprova si el pacman ha menjat un food o una cirera.
   * En el cas de que sigui un food, mostra un missatge per consola de que ha menjat un food/cirera i suma la puntuació.
   * Té els següents parametres:
   * @param arrFood
   * @param arrFreezer
   */
  eatFood(arrFood, arrFreezer) {
    for (let i = 0; i < arrFood.length; i++) {
      if (this.coordXPixels === arrFood[i].coordXPixels && this.coordYPixels === arrFood[i].coordYPixels) {
        console.log("Has menjat food");
        this.score += arrFood[i].pointsFood;
        arrFood.splice(i, 1);
        console.log(`Puntuació actual: ${this.score}`);
        break;
      }
    }

    for (let i = 0; i < arrFreezer.length; i++) {
      if (this.coordXPixels === arrFreezer[i].coordXPixels && this.coordYPixels === arrFreezer[i].coordYPixels) {
        console.log("Has menjat una cirera");
        this.score += arrFreezer[i].pointsCherry;
        arrFreezer.splice(i, 1);
        console.log(`Puntuació actual: ${this.score}`);
        break;
      }
    }

    // for (let i = 0; i < arrPowerUp.length; i++) {
    //   if (this.coordXPixels === arrPowerUp[i].coordXPixels && this.coordYPixels === arrPowerUp[i].coordYPixels) {
    //     console.log("Has menjat una cirera");
    //     this.score += arrPowerUp[i].pointsCherry;
    //     arrPowerUp.splice(i, 1);
    //     console.log(`Puntuació actual: ${this.score}`);
    //     break;
    //   }
    // }

    // ficar la posicio de quin powerup es amb la que xoca
  }
}
