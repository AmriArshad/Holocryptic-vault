// 17/04/2021
// Simulating terrain with perlin noise

let cols, rows;
const scl = 75;

function setup() {
  createCanvas(1080, 1080, WEBGL);
  angleMode(DEGREES);
  noiseDetail(2, 1);

  cols = width;
  rows = height;

  stroke(255);
  fill(10);
}

function draw() {
  background(0);

  translate(0, 0, -700);
  rotateX(60);
  rotateZ(-135);
  rotateZ(frameCount * 0.07);

  translate(0, 0, -150);

  var start = frameCount / 250;

  let xoff = 0;
  for (let x = -cols; x <= cols; x += scl) {
    let yoff = 0;
    for (let y = -rows; y <= rows; y += scl) {
      let h = map(noise(xoff + start, yoff + start), 0, 1, 10, 350);

      push();
      translate(x, y, h);
      box(scl, scl, h);
      pop();

      yoff += 0.1;
    }
    xoff += 0.1;
  }
}