// Drawing infinity with squares
// 19/01/2021

let t = 0;
let size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  strokeWeight(1);
  noFill();
  rectMode(CENTER);
  size = width / 3;
}

function draw() {
  background(0, 50);
  translate(width / 2, height / 2);

  for (let i = 0; i < 20; i++) {
    let x1 = sin(t + i) * size;
    let y1 = cos(t + i) * size * sin(t + i);

    rect(x1, y1, size / 25);
  }
  t += 0.01;
}