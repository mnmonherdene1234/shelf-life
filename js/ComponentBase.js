import { game } from "./main.js";

export default class ComponentBase {
  constructor(x = 0, y = 0) {
    this.context = game.context;
    this.x = x;
    this.y = y;
  }

  logic() {}

  draw() {}

  keyDown(_key = "") {}
  keyUp(_key = "") {}
}
