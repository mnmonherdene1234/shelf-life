import { game } from "./main.js";

const button = document.createElement("button");
button.innerHTML = "PLAY";
button.style.position = "absolute";
button.style.top = "50%";
button.style.left = "50%";
button.style.transform = "translate(-50%, -50%)";
button.style.padding = "20px 30px";
button.style.fontSize = "2rem";
button.style.backgroundColor = "white";
button.style.border = "1px solid black";
button.style.borderRadius = "1rem";
button.style.transition = "0.3s";

button.addEventListener("mouseenter", () => {
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.style.scale = "1.05";
});

document.body.style.backgroundImage = "url('/images/start-button.png')";
document.body.style.backgroundColor = "black";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.minHeight = "100vh";

export function playButtonPage() {
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

  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      game.canvas.hidden = true;
    }
  });
}
