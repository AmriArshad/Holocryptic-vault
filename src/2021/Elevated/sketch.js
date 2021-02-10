// Ascending pillars
// 10/01/2021

let t = 0;
let cols, rows;
let scl = 150;

function setup() {
  createCanvas(1080, 1080, WEBGL);
  angleMode(DEGREES);
  stroke(255);
  strokeWeight(2);
  noFill();

  cols = width / 3;
  rows = height / 3;
}

function draw() {
  background(0);

  translate(0, 125, -700);
  rotateX(50);
  rotateZ(-135);

  for (let x = -cols; x <= cols; x += scl) {
    for (let y = -rows; y <= rows; y += scl) {
      let d = dist(x, y, width / 2, height / 2);
      let offset = map(d, 0, dist(0, 0, 300, 300), -180, 180);
      let a = t + offset;
      let h = floor(map(tan(a), -1, 1, 0, 300));

      push();
      translate(x, y, h);
      box(scl, scl, h);
      pop();

    }
  }
  t++;
}