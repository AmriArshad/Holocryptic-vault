// inspiration: https://www.pinterest.nz/pin/74942781290539236/
// Celestial Entity
// 5/12/21

const r = 425;
let yoff = 0;
let t = 0;

function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);
  rectMode(CENTER);
  strokeWeight(7);
  noFill();
}

function draw() {
  background(0, 100);
  translate(width / 2, height / 2);

  // outer square
  stroke(255);
  rotate(45);
  rect(0, 0, map(sin(t), -1, 1, 450, 500));

  // inner black square
  stroke(0);
  fill(0);
  rect(0, 0, 450);

  // white square
  fill(255);
  rect(0, 0, 300);

  // black square
  rotate(45);
  stroke(0);
  fill(0);
  rect(0, 0, 300);

  // white square
  stroke(255);
  noFill();
  rect(0, 0, 250);

  push();
  strokeWeight(1.5);
  stroke(255);
  let xoff = 0;
  for (var a = 0; a < 360; a += 0.1) {
    let offset = map(noise(xoff, yoff, xoff * 5), 0, 1, 0, 2);
    let x = r * cos(a);
    let y = r * sin(a);
    line(x / offset, y / offset, x / offset, y / offset);
    xoff += 1;
  }
  pop();

  yoff += 0.005;

  t += 1;
}