// A chaotic sine wave structure
// 24/02/2021

const edges = 4;
let t = 0;

function setup() {
  createCanvas(1080, 1080, WEBGL);
  angleMode(DEGREES);
  noFill();
  stroke(255);
}

function draw() {
  background(0);

  rotateX(60);
  rotateZ(2 * t);

  for (let i = 0; i < 30; i += 1) {

    beginShape();
    for (let j = 0; j < 360; j += 360 / edges) {
      let rad = i * 13;
      let x = rad * cos(j) + tan(10 * t);
      let y = rad * sin(j);
      let z = 150 * cos(10 * t + i * 15);

      vertex(x, y, z);
      vertex(-x, -y, -z);
    }
    endShape(CLOSE);
  }
  t += 0.1;
}