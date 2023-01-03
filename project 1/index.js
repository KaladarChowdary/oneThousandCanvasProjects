const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const valueList = document.querySelectorAll(".value");
valueList.forEach((element) => {
  element.addEventListener("input", function () {
    rectObj[element.id] = element.value;
  });
});

function makeCanvasSizeOfWindow(cvs) {
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;
}

function getValueFromInputElements() {
  rectObj.x = document.getElementById("x").value;
  rectObj.y = document.getElementById("y").value;
  rectObj.width = document.getElementById("width").value;
  rectObj.height = document.getElementById("height").value;
}

window.addEventListener("resize", function () {
  makeCanvasSizeOfWindow(canvas);
});

makeCanvasSizeOfWindow(canvas);

const rectObj = {
  x: 20,
  y: 20,
  width: 50,
  height: 50,
};

function draw() {
  ctx.beginPath();
  getValueFromInputElements();
  ctx.strokeRect(rectObj.x, rectObj.y, rectObj.width, rectObj.height);
  ctx.stroke();
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  draw();
}

animate();
