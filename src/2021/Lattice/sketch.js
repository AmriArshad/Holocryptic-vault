// Experimenting with tangent waves
// 30/01/2021

let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();
}

function draw() {
  background(0, 50);
  translate(width / 2, 0);

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < height; j += 1) {
      ellipse(50 * tan(i + j + t) * tan(i + t) + 1 / (50 * cos(i * t * j)), j, 5);
    }
  }

  t += 0.001;
}