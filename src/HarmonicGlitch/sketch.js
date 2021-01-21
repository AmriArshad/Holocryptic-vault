// Glitchy circles
// 21/01/2021

let t = 0;

function setup() {
  createCanvas(1080, 1080);
  stroke(255);
  strokeWeight(3);
  noFill();
  angleMode(DEGREES);
}

function draw() {
  background(0, 50);
  translate(width / 2, height / 2);

  for (let i = 1; i < 10; i++) {
    ellipse(50 * sin(i * t) + tan(i * t), 0, i * 100);
  }

  t += 0.3;
}