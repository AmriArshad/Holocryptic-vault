// Genuary Day 3: Space
// Hypocycloid Star
// 04/01/22

const r = 225;
let yoff = 0;

function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);
  rectMode(CENTER);
  strokeWeight(1.5);
  stroke(255, 10);
  noFill();
}

function draw() {
  background(0, 100);
  translate(width / 2, height / 2);

  let xoff = 0;
  for (var a = 0; a < 360; a += 0.1) {
    let offset = map(noise(xoff, yoff, xoff * 5), 0, 1, 0, 2);
    let x = r * cos(a);
    let y = r * sin(a);
    line(x * offset, y % offset, x % offset, y * offset);
    line(x * offset, y / offset, x / offset, y * offset);
    xoff += 0.1;
  }

  yoff += 0.005;
}