const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// DRAWING fillRect
// ctx.fillStyle = "rgb(0, 0, 0)";
// ctx.fillRect(100, 100, 50, 30);

// ctx.fillStyle = "rgb(0, 0, 0)";
// ctx.fillRect(50, 50, 50, 30);

// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.fillRect(200, 200, 70, 70);

// ctx.fillStyle = "rgb(0, 255, 0)";
// ctx.fillRect(220, 220, 70, 70);

// ctx.fillStyle = "rgb(0, 0, 255)";
// ctx.fillRect(240, 240, 70, 70);

// ctx.fillStyle = "rgba(0, 0, 0,0)";
// ctx.fillRect(270, 270, 30, 30);

// Drawing strokeRect
// ctx.strokeStyle = "green";
// ctx.strokeRect(500, 50, 50, 40);
// ctx.strokeStyle = "blue";
// ctx.strokeRect(500, 100, 50, 40);
// ctx.strokeStyle = "red";
// ctx.strokeRect(500, 150, 50, 40);
// ctx.strokeStyle = "yellow";
// ctx.strokeRect(500, 200, 50, 40);
// ctx.strokeStyle = "orange";
// ctx.strokeRect(500, 250, 50, 40);
// ctx.strokeStyle = "cyan";
// ctx.strokeRect(500, 300, 50, 40);
// ctx.strokeStyle = "green";
// ctx.strokeStyle = "cyan";

// Drawing clearRect
// ctx.clearRect(220, 220, 40, 40);

// Drawing circle

ctx.beginPath();
ctx.arc(500, 200, 50, 1.8 * Math.PI, 1.6 * Math.PI, true);
ctx.stroke();
