// inspiration: https://youtu.be/4uU9lZ-HSqA
// inspiration: https://en.wikipedia.org/wiki/Maurer_rose
// 4x4 grid of Maurer Rose patterns
// 8/01/2021

let scl, size;
let n = 3;
let d = 27;

function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);
  
  // distance between each rose
  scl = floor(width / 5);
  size = scl / 3;

  stroke(255, 90);
  noFill();
}

function draw() {
  background(0);
  
  // position each rose according to grid
  for (let i = 0; i < width; i += scl) {
    for (let j = 0; j < height; j += scl) {
      push()
      translate(i, j);

      // draw Maurer Rose
      beginShape();
      for (let a = 0; a <= 50; a += 0.3) {
        let k = a * i * d;
        let r = size * sin(j * n * k);
        let x = r * cos(k);
        let y = r * sin(k);
        vertex(x, y);
      }
      endShape();

      pop();
    }
  }

  n += 0.000000001;
  d += 0.000000001;
}