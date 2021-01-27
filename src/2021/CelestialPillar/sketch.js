// Inspired by the celestial pillars of terraria
// /01/2021

let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();
}

function draw() {
  background(0, 50);
  translate(width / 2, 0);

  for (let j = 0; j < height; j++) {
    ellipse(150 * sin(j + t) + tan(j + t), j, 5);
  }

  t += 0.001;
}