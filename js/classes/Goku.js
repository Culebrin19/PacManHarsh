import { GameObject } from "./GameObject.js";
import { myConfig } from "../sketch.js";
import { Freezer } from "./Freezer.js";
import { Food } from "./Food.js";
import { PowerUp } from "./PowerUp.js";
import { ConfigGameClass } from "./ConfigGameClass.js";

export class Goku extends GameObject {
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
