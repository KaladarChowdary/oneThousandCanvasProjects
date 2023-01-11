import {
  clearCanvas,
  maxifyCanvas,
  findDistance,
  randInRange,
} from "./functions.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

maxifyCanvas(canvas);

// Circle class, lot of explicit features to modify
class Circle {
  // Takes position of circle and radius and velocity in x and y directions
  constructor(x, y, r, dx, dy, color = "black") {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }

  //   Draw with x,y and radius
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  //   Updating x and y with velocity and drawing and changing velocity when collision happens
  update() {
    this.updateXandY();
    this.draw();
    if (this.HCollision()) this.dx = -this.dx;
    if (this.VCollision()) this.dy = -this.dy;
  }

  updateXandY() {
    this.x += this.dx;
    this.y += this.dy;
  }

  // Detect when circle edge collides horizontally with canvas
  HCollision() {
    return this.x + this.r >= canvas.width || this.x - this.r <= 0;
  }
  //   Detect when circle edges collides with canvas edge vertically
  VCollision() {
    return this.y + this.r >= canvas.height || this.y - this.r <= 0;
  }

  collided(circle2) {
    return (
      findDistance(this.x, this.y, circle2.x, circle2.y) <= this.r + circle2.r
    );
  }
}

// Circle Array
const carr = [];

// Initialize Circles
let x, y, r, dx, dy;
r = 10;
for (let i = 0; i < 300; i++) {
  x = randInRange(r, canvas.width - r);
  y = randInRange(r, canvas.height - r);
  dx = randInRange(-2, 2);
  dy = randInRange(-2, 2);
  carr.push(new Circle(x, y, r, dx, dy));
}

function animate() {
  requestAnimationFrame(animate);
  clearCanvas(canvas, ctx);

  carr.forEach((circle) => {
    circle.color = "green";

    carr.forEach((circle2) => {
      if (circle !== circle2) {
        if (circle.collided(circle2)) {
          circle.color = "red";
          circle2.color = "red";

          // let temp = circle2.dx;
          // circle2.dx = circle.dx;
          // circle.dx = temp;

          // let temp2 = circle2.dy;
          // circle2.dy = circle.dy;
          // circle.dy = temp2;
        }
      }
    });

    circle.update();
  });
}

// CODE TO RUN
maxifyCanvas(canvas);
animate();
