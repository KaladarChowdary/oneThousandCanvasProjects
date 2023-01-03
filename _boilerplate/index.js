const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


// WRITE ALL FUNCTIONS HERE
function maxifyCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function clearScreen(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function animate(){
    requestAnimationFrame(animate);
    clearScreen()
}
// CODE TO RUN
maxifyCanvas();



function ani
