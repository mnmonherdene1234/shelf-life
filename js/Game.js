import { background1Sound } from "./sounds.js";

export default class Game {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = 1280;
    this.canvas.height = 720;
    this.speed = 16;
    this.isRunning = true;
    this.components = [];
    document.body.append(this.canvas);
    this.setupEventListeners();
  }

  async start() {
    background1Sound.play();

    try {
      await this.update();
    } catch (error) {
      console.error("An error occurred during the game loop:", error);
    }
  }

  async update() {
    while (this.isRunning) {
      await this.gameLoop();
    }
  }

  async gameLoop() {
    // Perform game logic
    this.updateGameState();

    // Render the game objects on the canvas
    this.render();

    // Add a delay between frames to control the game's frame rate
    await new Promise((resolve) => setTimeout(resolve, this.speed));
  }

  updateGameState() {
    // Update the game state
    for (const component of this.components) {
      if (typeof component?.logic === "function") {
        component.logic();
      }
    }
  }

  render() {
    // Render the game objects on the canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const component of this.components) {
      if (typeof component?.draw === "function") {
        component.draw();
      }
    }
  }

  setupEventListeners() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    document.addEventListener("keyup", this.handleKeyUp.bind(this));
    this.canvas.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(event = new MouseEvent()) {
    console.log(event.x);
  }

  handleKeyDown(event = new KeyboardEvent()) {
    for (const component of this.components) {
      if (typeof component?.keyDown === "function") {
        component.keyDown(event.key);
      }
    }
  }

  handleKeyUp(event = new KeyboardEvent()) {
    for (const component of this.components) {
      if (typeof component?.keyUp === "function") {
        component.keyUp(event.key);
      }
    }
  }
}
