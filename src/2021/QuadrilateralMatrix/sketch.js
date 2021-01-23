// Grid of squares that change size based on their position, alongside sine and cosine waves
// 22/01/2021

let scl;
let t = 0;

function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);
  rectMode(CENTER);

  scl = 25;

  stroke(255);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(0, 50);

  for (let i = scl * 3; i < width - scl * 3; i += scl) {
    for (let j = scl * 3; j < height - scl * 3; j += scl) {
      rect(i, j, map(j, scl, height, 40, 5) * sin(t * i * j) * cos(j));
    }
  }
  t += 0.00001;
}