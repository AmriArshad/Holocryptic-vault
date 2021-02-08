// Playing around with spheres to create the effect of a repeating supernova
// 9/02/2021

let t = -15;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  stroke(255);
  noFill();
}

function draw() {
  background(0);

  rotateZ(t);
  for (let i = 1; i < 20; i+=5) {
    rotateX(i*tan(t)/2);
    sphere(i * 50 * tan(t) + 100);
  }
  
  t += 0.25;
}