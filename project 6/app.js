const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
  constructor(x, y, r, dx, dy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    this.draw();

    if (this.x + this.r >= canvas.width || this.x - this.r <= 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r >= canvas.height || this.y - this.r <= 0) {
      this.dy = -this.dy;
    }
  }
}

let x, y, r, dx, dy;
r = 50;
x = r + Math.random() * (canvas.width - 2 * r);
y = r + Math.random() * (canvas.height - 2 * r);
dx = 10 * (0.5 - Math.random());
dy = 10 * (0.5 - Math.random());

let cobj = new Circle(x, y, r, 2, dy);

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  cobj.update();
}

animate();

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
