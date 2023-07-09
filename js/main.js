import Game from "./Game.js";
import Rectangle from "./Rectangle.js";
import Text from "./Text.js";

export const game = new Game();
game.canvas.hidden = true;

const rectangle = new Rectangle(100, 100, 50, 50, "red");
game.components.push(rectangle);

const greenRectangle = new Rectangle(10, 10, 25, 25, "green");
game.components.push(greenRectangle);

const helloWorld = new Text("Hello", 100, 100, "red");
game.components.push(helloWorld);

const button = document.createElement("button");
button.innerHTML = "PLAY";

button.addEventListener("click", () => {
  game.canvas.hidden = false;

  if (game.canvas.requestFullscreen) {
    game.canvas.requestFullscreen();
  } else if (game.canvas.mozRequestFullScreen) {
    game.canvas.mozRequestFullScreen(); // Firefox
  } else if (game.canvas.webkitRequestFullscreen) {
    game.canvas.webkitRequestFullscreen(); // Chrome, Safari, and Opera
  } else if (game.canvas.msRequestFullscreen) {
    game.canvas.msRequestFullscreen(); // Internet Explorer and Edge
  }
});

document.body.append(button);
