// Visualising a sine wave + tangent waves
// 18/02/2021

let t = 0;

function setup() {
  createCanvas(1080, 1080);
  stroke(255);
  noFill();
}

function draw() {
  background(0, 50);
  translate(width / 2, 0);

  for (let y = 0; y < height; y++) {
    ellipse(width / 2 * sin(y * t / 100) / 10 - tan(y + t / 2), y, 5);
  }

  t += 0.005;
  t %= 3; // snap back to reality
}