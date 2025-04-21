import { GameObject } from "./GameObject.js";
import { myConfig } from "../sketch.js";
import { Freezer } from "./Freezer.js";
import { Food } from "./Food.js";
import { PowerUp } from "./PowerUp.js";

export class Goku extends GameObject {
  constructor(y, x) {
    super(y, x);
    this.direction = 1;
    this.speedPacman = 32;
    this.score = 0;
    this.pacmanLive = myConfig.getLivesPacman(); // Reemplazo de LIVES_PACMAN
    this.IMAGE_SIZE = myConfig.getimageSize();
    this.WIDTH_CANVAS = myConfig.getWidthCanvas();
    this.HEIGHT_CANVAS = myConfig.getHeightCanvas();
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
    const allItems = [...arrFood, ...arrFreezer, ...arrPowerUp];
    
    for (let i = 0; i < allItems.length; i++) {
      if (this.coordXPixels === allItems[i].coordXPixels && this.coordYPixels === allItems[i].coordYPixels) {
        if (allItems[i] instanceof Food) {
          console.log("Has menjat food");
          this.score += allItems[i].pointsFood * puntsExtra;
        } else if (allItems[i] instanceof Freezer) {
          console.log("Has menjat Freezer");
          this.score += allItems[i].pointsCherry * puntsExtra;
        } else if (allItems[i] instanceof PowerUp) {
          console.log("Has recollit un Power-Up");
          this.activatePowerUp();
        }

        allItems.splice(i, 1);
        console.log(`Puntuació actual: ${this.score}`);
        break;
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
