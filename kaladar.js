const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(cvs) {
    cvs.beginPath();
    cvs.strokeRect(this.x, this.y, this.width, this.height);
    cvs.stroke();
  }

  update(cvs) {
    this.draw(cvs);
  }
}

const rectObj = new Rectangle(20, 20, 50, 50);

function animate() {
  requestAnimationFrame(animate);
  clearCanvas(ctx);
}

makeCanvasSizeOfWindow(canvas);
animate();

// ----------------------------------------------------------

function makeCanvasSizeOfWindow(cvs) {
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;
}

function clearCanvas(cvs) {
  cvs.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", function () {
  makeCanvasSizeOfWindow(canvas);
});

const mouse = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", function (evt) {
  mouse.x = evt.clientX;
  mouse.y = evt.clientY;
});
