// inspiration: https://youtu.be/R1tfyVyU0hg
// Dynamic terrain with perlin noise
// 5/01/2021

let cols, rows;
let scl = 25;

function setup() {
  createCanvas(1080, 1080, WEBGL);
  angleMode(DEGREES);
  noiseDetail(2, 1);

  cols = width / 2;
  rows = height / 2;
}

function draw() {
  background(0);
  fill(10);

  translate(0, 0, -700);
  rotateX(50);
  rotateZ(-135);

  var start = frameCount / 70;

  let xoff = 0;
  for (let x = -cols; x <= cols; x += scl) {
    let yoff = 0;
    for (let y = -rows; y <= rows; y += scl) {
      let h = map(noise(xoff + start, yoff + start), 0, 1, 10, 300);

      let r = map(x, -cols, cols, 0, 255);
      let g = map(y, -rows, rows, 0, 255);
      let b = map(h, 10, 300, 255, 0);

      push();
      stroke(r, g, b);
      translate(x, y, h);
      box(scl, scl, h);
      pop();

      yoff += 0.1;
    }
    xoff += 0.1;
  }
}