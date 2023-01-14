//
//
//
//
// Classes are declared here
//
//
//
//
// Event Listeners are declared here
//
//
//
//
// Functions are declared here
function maxifyCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function clearScreen() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function animate() {
  requestAnimationFrame(animate);
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Variables are declared here
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//
//
//
//
// functions are run here

maxifyCanvas();
animate();
