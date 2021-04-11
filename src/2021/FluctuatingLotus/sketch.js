// 10/04/2021
// A continuously changing lotus made with parametric equations

let t = 0;
const lines = 200;

function setup() {
  createCanvas(1080, 1080);
  stroke(255, 10);
  noFill();
}

function draw() {
  background(0, 75);
  translate(width / 2, height / 2);

  beginShape();
  for (let i = 0; i < lines; i += 0.05) {
    let x1 = sin(t + i / 10) * 300 * sin(t + i / 20);
    let y1 = cos(t + i / 10) * 300;
    let x2 = sin(-t + i / 20) * 300;
    let y2 = cos(-t + i / 10) * 300 * cos(t + i / 10);

    vertex(x1, y1);
    vertex(x2, y2);
  }
  endShape();

  t += 0.003;
}