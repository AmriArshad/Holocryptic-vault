// Manipulation of the Maurer Rose
// 22/02/2021

let n = 2;
let d = 10;

function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);
  stroke(255);
  noFill();
}

function draw() {
  background(0, 50);
  translate(width / 2, height / 2);

  beginShape();
  for (let a = 0; a <= 360; a += 1) {
    let k = a * d;
    let r = 500 * sin(n * k);
    let x = r * cos(k) * tan(k);
    let y = r * tan(k);
    vertex(x, y);
  }
  endShape();

  n += 0.00003;
  d += 0.0003;
}