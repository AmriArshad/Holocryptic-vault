// Abstract illusions with parametric equations
// 20/03/2021

let t = 0;
const lines = 200;

function setup() {
  createCanvas(1080, 1080);
  stroke(255);
  strokeWeight(1);
  noFill();
}

function draw() {
  background(0, 100);
  translate(width / 2, height / 2);

  for (let i = 0; i < lines; i++) {
    let x1 = sin(t + i / 10) * 350;
    let y1 = cos(t + i / 20) * 350;
    let x2 = sin(t + i / 20) * 350;
    let y2 = cos(t + i / 10) * 350;
    line(x1, y1, x2, y2);
  }
  t += 0.007;
}