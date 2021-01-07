// inspiration: https://youtu.be/4uU9lZ-HSqA
// inspiration: https://en.wikipedia.org/wiki/Maurer_rose
// playing around with the Maurer Rose equation
// 7/01/2021

let n = 7;
let d = 100;

function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);
  stroke(255, 50);
  noFill();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  beginShape(TRIANGLE_STRIP);
  for (let a = 0; a <= 360; a++) {
    let k = a * d;
    let r = 400 * sin(n * k);
    let x = r * cos(n);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();

  n += 0.00001;
}