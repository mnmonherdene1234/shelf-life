import Game from "./Game.js";
import { playButtonPage } from "./play-button-page.js";

export const game = new Game();
game.canvas.hidden = true;

playButtonPage();
