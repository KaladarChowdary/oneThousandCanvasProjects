const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Circle {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.draw();
  }
}

const Cobj = new Circle(10, 10, 10, "rgba(255, 0, 0, 0.2)");

window.addEventListener("dblclick", function (evt) {});

const mouse = { x: undefined, y: undefined };
window.addEventListener("mousemove", function (evt) {
  mouse.x = evt.pageX;
  mouse.y = evt.pageY;
});

const c1 = new Circle(100, 100, 5, "red");
const c2 = new Circle(500, 100, 5, "red");

function getDistence(x, y, x1, y1) {
  return Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2));
}

function givePath(x, y, targetX, targetY, arrPath = []) {
  arrPath.push([x, y]);
  if (getDistence(x, y, targetX, targetY) > 1) {
    if (x < targetX) {
      x = Math.min(targetX, x + 2);
    }
    if (y < targetY) {
      y = Math.min(targetY, y + 2);
    }

    if (x > targetX) {
      x = Math.max(targetX, x - 2);
    }
    if (y > targetY) {
      y = Math.max(targetY, y - 2);
    }

    return givePath(x, y, targetX, targetY, arrPath);
  } else {
    arrPath.push([targetX, targetY]);
    return arrPath;
  }
}

class Line {
  constructor(x = 0, y = 0, x1 = 0, y1 = 0) {
    this.x = x;
    this.y = y;
    this.x1 = x1;
    this.y1 = y1;
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x1, this.y1);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.stroke();
  }
}

let p = givePath(100, 100, 500, 100);
let ix = p[0][0];
let iy = p[0][1];
let l = new Line(ix, iy, ix, iy);
let index = 0;
ctx.beginPath();
ctx.moveTo(p[0][0], p[0][1]);

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < index; i++) {
    l = new Line(ix, iy, p[i][0], p[i][1]);
  }

  if (index < p.length - 1) {
    index++;
  }

  Cobj.x = mouse.x;
  Cobj.y = mouse.y;
  Cobj.update();
  c1.update();
  c2.update();
  l.draw();
}
animate();
