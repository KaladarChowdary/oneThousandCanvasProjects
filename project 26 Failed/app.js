const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const mouse = { x: undefined, y: undefined };
let x, y, length, i, j, gap;
length = 50;
gap = 1;
let arr = [[]];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Event Listeners
window.addEventListener("resize", function (evt) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  arr = [[]];
  i = 0;
  j = 0;
  for (y = 0; y < canvas.height; y += length + gap) {
    for (x = 0; x < canvas.width; x += length + gap) {
      arr.at(-1).push(new Rectangle(x, y, length, i, j));
      j++;
    }
    i++;
    j = 0;
    arr.push([]);
  }
});

window.addEventListener("mousemove", function (evt) {
  mouse.x = evt.pageX;
  mouse.y = evt.pageY;
});

window.addEventListener("dblclick", function (evt) {
  for (let row of arr) {
    for (let item of row) {
      if (
        evt.pageX < item.x ||
        evt.pageX > item.x + item.length ||
        evt.pageY < item.y ||
        evt.pageY > item.y + item.length
      ) {
      } else {
        item.selected = true;
        console.log([item.i, item.j]);
        console.log(getNeighbor(item.i, item.j));
      }
    }
  }
});

// RECTANGLE
class Rectangle {
  constructor(
    x = canvas.width / 2,
    y = canvas.height / 2,
    length = 10,
    i,
    j,
    color = "black"
  ) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.color = color;

    this.selected = false;
    this.first = true;

    this.i = i;
    this.j = j;

    this.neighbor = getNeighbor(i, j);
    this.index = 0;
  }

  draw() {
    this.index++;
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.length, this.length);
  }

  update(arr) {
    if (this.index % 800 === 0) {
      for (let [x, y] of this.neighbor) {
        if (arr[x][y]) {
          if (arr[x][y].selected) {
            this.color = "red";
            this.selected = true;
          }
        }
      }
    }

    this.draw();
  }

  mouseOver() {
    if (mouse.x === undefined || mouse.y === undefined) return false;
    if (mouse.x < this.x || mouse.x > this.x + this.length) {
      return false;
    }
    if (mouse.y < this.y || mouse.y > this.y + this.length) {
      return false;
    }

    return true;
  }
}

// PURE FUNCTIONS
function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function randRange(min, max) {
  return min + Math.random() * (max - min);
}

function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function randItem(arr) {
  return arr[randInt(0, arr.length - 1)];
}

function getNeighbor(x1, y1) {
  let arr = [];
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (x1 + i < 0 || y1 + j < 0) continue;
      arr.push([x1 + i, y1 + j]);
    }
  }
  return arr;
}

// objects to used in animate

arr = [[]];
i = 0;
j = 0;
for (y = 0; y < canvas.height; y += length + gap) {
  for (x = 0; x < canvas.width; x += length + gap) {
    arr.at(-1).push(new Rectangle(x, y, length, i, j));
    j++;
  }
  i++;
  j = 0;
  arr.push([]);
}

// Animate: SHOULD ALWAYS BE THE LAST
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let row of arr) {
    for (let box of row) {
      box.update(arr);
    }
  }
}

animate();
