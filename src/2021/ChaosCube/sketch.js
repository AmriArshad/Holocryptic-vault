// Glitchy cubes with hypnotic effect
// 11/02/2021

let t = 0;

function setup() {
  createCanvas(1080, 1080, WEBGL);
  angleMode(DEGREES);
  stroke(255);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(0);

  translate(2 * tan(100 * t), 0, 0);
  for (let i = 1; i < 25; i += 5) {
    rotateX(i * t);
    rotateY(i * t);
    rotateZ(i * t);
    box(i * 20);
  }

  t += 0.01;
}