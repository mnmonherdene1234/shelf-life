import ComponentBase from "./ComponentBase.js";

export default class Text extends ComponentBase {
  constructor(text = "", x = 0, y = 0, color = "black", font = "30px Arial") {
    super(x, y);
    this.text = text;
    this.font = font;
    this.color = color;
  }

  draw() {
    this.context.font = this.font;
    this.context.fillStyle = this.color;
    this.context.fillText(this.text, this.x, this.y);
  }
}
