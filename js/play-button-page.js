import { game } from "./main.js";
import { background1Sound } from "./sounds.js";

const button = document.createElement("button");
button.innerHTML = "PLAY";
button.style.position = "absolute";
button.style.top = "60%";
button.style.left = "50%";
button.style.transform = "translate(-50%, -50%)";
button.style.padding = "20px 30px";
button.style.fontSize = "2rem";
button.style.border = "1px solid black";
button.style.borderRadius = "1rem";
button.style.transition = "0.3s";
button.style.backgroundColor = "red";
button.style.color = "white";

document.body.style.backgroundImage = "url('/images/background.png')";
document.body.style.backgroundColor = "black";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.minHeight = "100vh";

export function playButtonPage() {
  button.addEventListener("click", () => {
    game.canvas.hidden = false;
    game.start();
    game.isRunning = true;

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

  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      game.canvas.hidden = true;
      game.isRunning = false;
      background1Sound.pause();
    }
  });
}
