// import { myConfig } from "../sketch.js";

export class GameObject {
  constructor(x, y) {
    this.rowNumber = x;
    this.columnObjectNumber = y;
    this.coordXPixels = x * this.IMAGE_SIZE;
    this.coordYPixels = y * this.IMAGE_SIZE;
  }

  showObject(img) {
    if (this.coordXPixels == null || this.coordYPixels == null) {
      this.coordXPixels = this.rowNumber * this.IMAGE_SIZE;
      this.coordYPixels = this.columnObjectNumber * this.IMAGE_SIZE;
    }
    image(img, this.coordXPixels, this.coordYPixels);
  }
}
