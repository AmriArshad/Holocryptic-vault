// collab with isotope.a
// 28/11/21

let t = 0;

function setup() {
  createCanvas(1080, 1080);
  stroke(255);
  strokeWeight(2);
  noFill();
  angleMode(DEGREES);
}

function draw() {
  background(0, 75);
  translate(width / 2, height / 2);

  for (let i = 0; i < 30; i++) {
    rotate(i * sin(t) * cos(t));
    myTriangle(0, i * 15);
  }

  t += 0.1;
}

const myTriangle = (center, radius) => {
  beginShape();
  vertex(center + radius * cos(0), radius * sin(0));
  vertex(center + radius * cos(120), radius * sin(120));
  vertex(center + radius * cos(240), radius * sin(240));
  endShape(CLOSE)
}