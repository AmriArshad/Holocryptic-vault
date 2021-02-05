// inspiration: http://paulbourke.net/fractals/juan2/
// Abstract spaceships with Juan Attractors
// Reload the page to view a different attractor
// 02/02/2021

let params = [
  [1.6, -1.9, 1.5, -1.9],
  [1.8, -1.7, 0.7, -2.5],
  [1.2, 2.9, 1.9, 1.5],
  [-1.5, 1.6, 2.1, -1.2],
  [2.3, -1.9, 0.6, -1.7],
  [1.6, -1.2, -0.9, 2.2],
  [1.2, 1.5, -0.8, 1.8],
  [2.2, 1.3, -0.2, -1.7],
  [2.3, -1.1, 1.5, 1.9]
];

let a, b, c, d;

let x = 0.1;
let y = 0.1;

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
    let x1 = pow(cos(a * x), 2) - pow(sin(b * y), 2);
    let y1 = 2 * cos(c * x) * sin(d * y);

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