// inspiration: http://paulbourke.net/fractals/clifford/
// Experimenting with Clifford Attractors
// Reload page to view a different attractor
// 16/01/2021

let params = [
  [-1.4, 1.6, 1.0, 0.7],
  [1.7, 1.7, 0.6, 1.2],
  [1.5, -1.8, 1.6, 0.9],
  [-1.7, 1.3, -0.1, -1.2],
  [-1.7, 1.8, -1.9, -0.4],
  [-1.8, -2.0, -0.5, -0.9],
  [-2, 1.5, 1.1, 0.9],
  [-1.5, 1.7, 0.5, 1],
  [-2.5, 1.7, 0.5, 1],
  [-1.1, 1.3, 2, 1],
  [1.7, 1.2, -0.5, 1.2],
  [1.7, 1.8, -1.3, 0.7],
  [-1.4, 1.1, -1.3, 1.7],
  [-1.9, 1.2, -1.3, 1.7],
  [-1.9, -1.6, 0.2, -1.7],
];

let a, b, c, d;

let x = 0;
let y = 0;

function setup() {
  createCanvas(1080, 1080);
  background(0);
  stroke(random(255), random(255), random(255), 10);

  // choose random set of parameters
  let selected = random(params);
  a = selected[0];
  b = selected[1];
  c = selected[2];
  d = selected[3];
}

function draw() {

  for (let i = 0; i < 3000; i++) {
    // get next x, y pos
    let x1 = sin(a * y) + c * cos(a * x);
    let y1 = sin(b * x) + d * cos(b * y);

    // map x1, y1 so that they can be drawn properly
    let X = map(x1, -3, 3, 0, width);
    let Y = map(y1, -3, 3, height, 0);

    point(X, Y);

    // set current x, y to next x,y
    x = x1;
    y = y1;
  }

  if (frameCount == 1500) noLoop();
}