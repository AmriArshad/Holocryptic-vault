// inspiration: https://youtu.be/LaarVR1AOvs
// 
// 18/01/2021

let t = 0;
const lines = 20;

function setup() {
  createCanvas(1080, 1080);
  stroke(255, 150);
  noFill();
}

function draw() {
  background(0, 100);
  translate(width / 2, height / 2);

  for (let i = 0; i < lines; i++) {
    strokeWeight(5);
    let x1 = sin(t + i / 10) * 300 * cos(t + i / 20);
    let y1 = cos(t + i / 10) * 300;
    let x2 = sin(t + i / 10) * 300;
    let y2 = cos(-t + i / 10) * 300;
    line(x1, y1, x2, y2);
    line(-x1, -y1, -x2, -y2);

    strokeWeight(1);
    ellipse(x1, y1, 15);
    ellipse(x2, y2, 15);
    ellipse(-x1, -y1, 15);
    ellipse(-x2, -y2, 15);
  }
  t += 0.02;
}