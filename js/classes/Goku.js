import { GameObject } from "./GameObject.js";
// import { myConfig } from "../sketch.js";
import { Freezer } from "./Freezer.js";
import { Food } from "./Food.js";
import { PowerUp } from "./PowerUp.js";
import { ConfigGameClass } from "./ConfigGameClass.js";

/**
 * @class Goku
 * @extends GameObject
 * Representa el personatge principal del joc (Goku)
 */
export class Goku extends GameObject {

  /**
 * @constructor
 * @param {number} y - Coordenada Y inicial del personatge
 * @param {number} x - Coordenada X inicial del personatge
 */
  constructor(y, x) {
    super(y, x);
    this.config = new ConfigGameClass();
    this.direction = 1;
    // this.speedPacman = 32;
    this.speedPacman = this.config.getSpeedPacman();
    this.score = 0;
    this.pacmanLive = this.config.getLivesPacman();
    this.IMAGE_SIZE = this.config.getImageSize();
    this.WIDTH_CANVAS = this.config.getWidthCanvas();
    this.HEIGHT_CANVAS = this.config.getHeightCanvas();
    // this.pacmanLive = myConfig.getLivesPacman();
    // this.IMAGE_SIZE = myConfig.getimageSize();
    // this.WIDTH_CANVAS = myConfig.getWidthCanvas();
    // this.HEIGHT_CANVAS = myConfig.getHeightCanvas();
    this.powerUpActive = false;
    this.doblePunts = false;
  }

  /**
 * Mou el personatge cap a la dreta
 * @param {Food[]} arrFood - Array d'objectes de menjar
 * @param {GameObject[]} arrRocks - Array d'objectes de roques
 * @param {Freezer[]} arrFreezer - Array d'objectes Freezer
 * @param {PowerUp[]} arrPowerUp - Array d'objectes Power-Up
 */
  moveRight(arrFood, arrRocks, arrFreezer, arrPowerUp) {
    const temp = this.coordXPixels + this.speedPacman;
    if (temp >= this.WIDTH_CANVAS - this.IMAGE_SIZE || this.testCollideRock(arrRocks, temp, this.coordYPixels)) {
      console.log("Error, no es pot moure a la dreta");
    } else {
      this.direction = 1;
      this.coordXPixels = temp;
      this.eatFood(arrFood, arrFreezer, arrPowerUp);
    }
  }

  /**
 * Mou el personatge cap a l'esquerra
 * @param {Food[]} arrFood - Array d'objectes de menjar
 * @param {GameObject[]} arrRocks - Array d'objectes de roques
 * @param {Freezer[]} arrFreezer - Array d'objectes Freezer
 * @param {PowerUp[]} arrPowerUp - Array d'objectes Power-Up
 */
  moveLeft(arrFood, arrRocks, arrFreezer, arrPowerUp) {
    const temp = this.coordXPixels - this.speedPacman;
    if (temp < 0 || this.testCollideRock(arrRocks, temp, this.coordYPixels)) {
      console.log("Error, no es pot moure a l'esquerra");
    } else {
      this.direction = 3;
      this.coordXPixels = temp;
      this.eatFood(arrFood, arrFreezer, arrPowerUp);
    }
  }

  /**
 * Mou el personatge cap amunt
 * @param {Food[]} arrFood - Array d'objectes de menjar
 * @param {GameObject[]} arrRocks - Array d'objectes de roques
 * @param {Freezer[]} arrFreezer - Array d'objectes Freezer
 * @param {PowerUp[]} arrPowerUp - Array d'objectes Power-Up
 */
  moveUp(arrFood, arrRocks, arrFreezer, arrPowerUp) {
    const temp = this.coordYPixels - this.speedPacman;
    if (temp < 0 || this.testCollideRock(arrRocks, this.coordXPixels, temp)) {
      console.log("Error, no es pot moure a dalt");
    } else {
      this.direction = 2;
      this.coordYPixels = temp;
      this.eatFood(arrFood, arrFreezer, arrPowerUp);
    }
  }

  /**
 * Mou el personatge cap avall
 * @param {Food[]} arrFood - Array d'objectes de menjar
 * @param {GameObject[]} arrRocks - Array d'objectes de roques
 * @param {Freezer[]} arrFreezer - Array d'objectes Freezer
 * @param {PowerUp[]} arrPowerUp - Array d'objectes Power-Up
 */
  moveDown(arrFood, arrRocks, arrFreezer, arrPowerUp) {
    const temp = this.coordYPixels + this.speedPacman;
    if (temp >= this.HEIGHT_CANVAS - this.IMAGE_SIZE || this.testCollideRock(arrRocks, this.coordXPixels, temp)) {
      console.log("Error, no es pot moure a baix");
    } else {
      this.direction = 4;
      this.coordYPixels = temp;
      this.eatFood(arrFood, arrFreezer, arrPowerUp);
    }
  }

  /**
 * Comprova si el personatge col·lisiona
 * @param {GameObject[]} arrRocks - Array d'objectes de roques
 * @param {number} newX - Nova coordenada X
 * @param {number} newY - Nova coordenada Y
 * @returns {boolean} - Retorna true si hi ha col·lisió, si no false
 */
  testCollideRock(arrRocks, newX, newY) {
    for (const roca of arrRocks) {
      if (newX === roca.coordXPixels && newY === roca.coordYPixels) {
        console.log("Has colisionat amb una roca");
        this.pacmanLive--;
        alert(`Has xocat amb una roca, has perdut una vida, et queden ${this.pacmanLive} vides`);

        if (this.pacmanLive <= 0) {
          if (confirm("Has perdut totes les vides, vols tornar a jugar?")) {
            window.location.reload();
          } else {
            noLoop();
          }
        }
        return true;
      }
    }
    return false;
  }

  /**
 * Comprova si el personatge menja menjar, Freezer o un Power-Up
 * @param {Food[]} arrFood - Array d'objectes de menjar
 * @param {Freezer[]} arrFreezer - Array d'objectes Freezer
 * @param {PowerUp[]} arrPowerUp - Array d'objectes Power-Up
 */
  eatFood(arrFood, arrFreezer, arrPowerUp) {
    let puntsExtra = this.doblePunts ? 2 : 1;

    for (let i = 0; i < arrFood.length; i++) {
      if (this.coordXPixels === arrFood[i].coordXPixels && this.coordYPixels === arrFood[i].coordYPixels) {
        console.log("Has menjat food");
        this.score += arrFood[i].pointsFood * puntsExtra;
        arrFood.splice(i, 1);
        console.log(`Puntuació actual: ${this.score}`);
        return;
      }
    }

    for (let i = 0; i < arrFreezer.length; i++) {
      if (this.coordXPixels === arrFreezer[i].coordXPixels && this.coordYPixels === arrFreezer[i].coordYPixels) {
        console.log("Has menjat Freezer");
        this.score += arrFreezer[i].pointsCherry * puntsExtra;
        arrFreezer.splice(i, 1);
        console.log(`Puntuació actual: ${this.score}`);
        return;
      }
    }

    for (let i = 0; i < arrPowerUp.length; i++) {
      if (this.coordXPixels === arrPowerUp[i].coordXPixels && this.coordYPixels === arrPowerUp[i].coordYPixels) {
        console.log("Has recollit un Power-Up");
        this.activatePowerUp();
        arrPowerUp.splice(i, 1);
        return;
      }
    }
  }

    /**
   * Activa el Power-Up que duplica els punts durant 10 segons
   */
  activatePowerUp() {
    this.doblePunts = true;
    console.log("Doble de punts activat");
    document.getElementById("powerUpMessage").style.display = "block";

    setTimeout(() => {
      this.doblePunts = false;
      console.log("Doble de punts desactivat");
      document.getElementById("powerUpMessage").style.display = "none";
    }, 10000);
  }
}
