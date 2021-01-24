// inspiration: http://paulbourke.net/fractals/peterdejong/
// Experimenting with Peter de Jong attractors
// Reload the page to view a different attractor
// 24/01/2021

let params = [
  [1.9, 2.3, -1.7, 0.7],
  [1.6, -1.9, 1.1, -1.9],
  [-2.7, 0.9, -0.86, -2.2],
  [1.8, -1.7, 0.7, -2.5],
  [1.8, -1.7, 0.7, -1.5],
  [-1.5, 1.6, 2.1, -1.2],
  [-2.7, 1.3, 1.1, 1.1],
  [-1.6, 2.3, -1.3, 1.4],
  [2.3, -1.9, 0.6, -1.7],
  [1.3, 1.4, 1.7, 1.9],
  [1.1, -1.8, 1.7, 2.3],
  [1.6, -1.2, -0.9, 2.2],
  [1.3, 2.9, -1.9, 0.7],
  [1.6, -1.9, 1.1, 2.3],
  [-1.2, 1.2, -1.6, 1.5],
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
    let x1 = sin(a * y) - cos(b * x);
    let y1 = sin(c * x) - cos(d * y);

    // map x1, y1 so that they can be drawn properly
    let X = map(x1, -3, 3, 0, width);
    let Y = map(y1, -3, 3, 0, height);

    point(X, Y);

    // set current x, y to next x,y
    x = x1;
    y = y1;
  }

  if (frameCount == 1500) noLoop();
}