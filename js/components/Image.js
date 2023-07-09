import ComponentBase from "./ComponentBase.js";

export default class Image extends ComponentBase {
  constructor(src = "", x = 0, y = 0, width = 50, height = 50) {
    super(x, y);
    this.src = src;
    this.width = width;
    this.height = height;
  }

  draw() {
    const image = document.createElement("img");
    image.src = this.src;
    image.width = this.height;
    image.height = this.height;
    this.context.drawImage(image, this.x, this.y, this.width, this.height);
  }
}
