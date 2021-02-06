// Experimenting with 3D objects
// 7/02/2021

let t = 0;

function setup() {
  createCanvas(1080, 1080, WEBGL);
  angleMode(DEGREES);
  stroke(255);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(0);

  rotateX(t);
  for (let i = 1; i < 20; i++) {
    rotateZ(i*tan(t));
    box(i * 23 * sin(t));
  }
  
  t += 0.3;
}