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

let size, gap;

function animate() {
  requestAnimationFrame(animate);
  clearScreen();

  size = 20;
  gap = 4;

  for (let i = 0; i + gap + size <= canvas.width; i += size + gap) {
    for (let j = 0; j + gap + size <= canvas.height; j += size + gap) {
      ctx.fillRect(i, j, size, size);
    }
  }
}
// CODE TO RUN
maxifyCanvas();

animate();
