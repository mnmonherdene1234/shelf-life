import ComponentBase from "./ComponentBase.js";

export default class Rectangle extends ComponentBase {
  constructor(x = 0, y = 0, width = 10, height = 10, color = "black") {
    super(x, y);
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    if (this.context instanceof CanvasRenderingContext2D) {
      this.context.fillStyle = this.color;
      this.context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}
