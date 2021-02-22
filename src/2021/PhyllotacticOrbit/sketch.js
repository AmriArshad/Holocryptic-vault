// Manipulating Phyllotaxis for a 3D effect
// 23/02/2021

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
  background(0, 70);
  translate(width / 2, height / 2);

  rotate(t / 5);

  for (let i = 0; i < n; i += 2) {
    let angle = i * a;
    let r = c * sqrt(i); // radius (distance from centre of the canvas to a floret)
    let x = r * cos(angle) + tan(t / 2) / 10;
    let y = r * sin(angle) * sin(x * t / 150);

    ellipse(x, y, 5);
  }

  if (n < 1000) {
    n += 3;
  }
  t++;
}