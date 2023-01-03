const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function maxCanvaSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createRect() {
  return {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 40,
    height: 40,
  };
}

const mouse = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", function (evt) {
  mouse.x = evt.clientX;
  mouse.y = evt.clientY;
});

function Opacity() {
  if (mouse.x < rectObj.x) {
    return mouse.x / rectObj.x;
  } else if (mouse.x > rectObj.x + rectObj.width) {
    return (
      (canvas.width - mouse.x) / (canvas.width - (rectObj.x + rectObj.width))
    );
  } else {
    return 1;
  }
}

//
maxCanvaSize();
const rectObj = createRect();

let a;
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  a = Opacity();

  ctx.fillStyle = `rgba(${3}, ${175}, ${9}, ${a})`;
  ctx.fillRect(rectObj.x, rectObj.y, rectObj.width, rectObj.height);
}

animate();
