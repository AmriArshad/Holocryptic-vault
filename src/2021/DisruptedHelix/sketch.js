// A glitchy quintuple helix created using perlin noise and tangent waves
// 31/01/2021

let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();
}

function draw() {
  background(0, 50);
  translate(0, height / 2);

  for (let i = 0; i < width; i += 5) {
    ellipse(i + noise(t * i) * 5 * tan(t), 150 * cos(i + t), 5);
  }

  t += 0.01;
}