// Experimenting with Phyllotaxis
// 20/02/2021

let n = 0; // ordering of a floret
let c = 15; // scaling parameter
let a; // divergence angle between two successive florets
let t = 0;

function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);
  a = 180 * (3 - sqrt(5)); // golden angle
  fill(255);
}

function draw() {
  background(0, 50);
  translate(width / 2, height / 2);

  for (let i = 0; i < n; i++) {
    let angle = i * a;
    let r = c * sqrt(i); // radius (distance from centre of the canvas to a floret)
    let x = r * cos(angle) + tan(t);
    let y = r * sin(angle);

    ellipse(x, y, 5);
  }

  if (n < 1000) {
    n += 3;
  }
  a += 0.001;
  t += 1.5;
}