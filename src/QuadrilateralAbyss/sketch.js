// Enter the Abyss
// 20/01/2021

let t = 0;

function setup() {
  createCanvas(1080, 1080);
  stroke(255);
  strokeWeight(2);
  noFill();
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0, 50);
  translate(width / 2, height / 2);

  for (let i = 0; i < 20; i++) {
    rotate(i * tan(t));
    rect(0, 0, i * 30);
  }

  t += 0.3;
}