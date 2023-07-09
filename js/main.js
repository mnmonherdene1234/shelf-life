import Game from "./Game.js";
import Image from "./components/Image.js";
import Rectangle from "./components/Rectangle.js";
import Text from "./components/Text.js";
import { playButtonPage } from "./play-button-page.js";

export const game = new Game();
game.canvas.hidden = true;

const rectangle = new Rectangle(100, 100, 50, 50, "red");
game.components.push(rectangle);

const greenRectangle = new Rectangle(10, 10, 25, 25, "green");
game.components.push(greenRectangle);

const helloWorld = new Text("Hello", 100, 100, "red");
game.components.push(helloWorld);

const startButton = new Image("/images/start-button.png", 170, 100, 100, 60);
game.components.push(startButton);

playButtonPage();
