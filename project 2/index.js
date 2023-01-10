const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function makeCanvasFull() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

makeCanvasFull();

class Rectangle {
  constructor(x, y, width, height, opacity) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.opacity = opacity;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = `rgba(${0}, ${0}, ${255}, ${1})`;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

let rectObj = new Rectangle(canvas.width / 2, canvas.height / 2, 50, 50, 1);

function animate() {
  requestAnimationFrame(animate);

  rectObj.draw();
}

animate();
