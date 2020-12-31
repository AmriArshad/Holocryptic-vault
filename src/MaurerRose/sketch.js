// inspiration: https://youtu.be/4uU9lZ-HSqA
// inspiration: https://en.wikipedia.org/wiki/Maurer_rose
// A Maurer Rose implemnetation with an increasing number of petals
// 31/12/2020

let n = 2;
let d = 39;

function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);
}

function draw() {
  background(30);
  stroke(200, 150);
  noFill();
  translate(width / 2, height / 2);

  rotate(180);

  beginShape();
  for (let a = 0; a <= 360; a += 0.5) {
    let k = a * d;
    let r = 500 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();

  n += 0.00001;
  d += 0.0001;
}