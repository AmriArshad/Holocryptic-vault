// inspiration: https://thecodingtrain.com/CodingChallenges/077-recursion.html
// 22/12/2020

let size;
let angle = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  size = height/3;
  background(10);
}

function draw() {
  stroke(200, 100);
  noFill();

  translate(map(sin(angle), -1, 1, 200, width - 200), height / 2);
  rotate(angle);
  drawPoint(0, 0, size);

  angle += 0.01;

  if (frameCount == 1800){
    noLoop();
  }
}

function drawPoint(x, y, d) {
  point(x, y);
  if (d > 15) {
    let newD = d * 0.5;
    // Sierpinski Triangle
    drawPoint(x + newD, y, newD);
    drawPoint(x - newD, y, newD);
    drawPoint(x, y + newD, newD);
  }
}