// import { myConfig } from "../sketch.js";
import { ConfigGameClass } from "./ConfigGameClass.js";

const configGame = new ConfigGameClass();


export class GameObject {
  constructor(x, y) {
    this.rowNumber = x;
    this.columnObjectNumber = y;
    this.coordXPixels = x * configGame.getImageSize();
    this.coordYPixels = y * configGame.getImageSize();
  }

  showObject(img) {
    if (this.coordXPixels == null || this.coordYPixels == null) {
      this.coordXPixels = this.rowNumber * configGame.getImageSize();
      this.coordYPixels = this.columnObjectNumber * configGame.getImageSize();
    }
    image(img, this.coordXPixels, this.coordYPixels);
  }
}
