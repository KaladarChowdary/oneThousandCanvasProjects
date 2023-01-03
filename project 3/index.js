const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// WRITE ALL FUNCTIONS HERE
function maxifyCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function clearScreen() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function changeWithWindow() {
  window.addEventListener("resize", maxifyCanvas);
}

function animate() {
  requestAnimationFrame(animate);
  clearScreen();

  for (let i = 0; i + 6 <= canvas.width; i += 6) {
    for (let j = 0; j + 6 <= canvas.height; j += 6) {
      ctx.fillRect(i, j, 5, 5);
    }
  }
}
// CODE TO RUN
maxifyCanvas();

animate();
