// inspiration: https://youtu.be/bqRvLR3PLf0
// Playing around with Spirographs
// 6/01/2021

let rad1 = 150;
let rad2 = 150;

let a1 = 0;
let a2 = 0;

let a1Inc, a2Inc, prevX, prevY, r1, r2, g1, g2, b1, b2;

function setup() {
  createCanvas(1080, 1080);
  background(10);
  angleMode(DEGREES);

  // generate random values for radii, increments and rgb
  rad1 = random(100, 250);
  rad2 = random(150, 200);

  a2Inc = random(0.1, 5);
  a1Inc = random(0.1, 5);

  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);
}

function draw() {
  translate(width / 2, height / 2);

  rotate(45);
  for (let i = 0; i < 2; i++) {
    // use for loop to draw faster
    for (let i = 0; i < 100; i++) {
      // draw smaller circle based off larger circle
      let x = rad1 * cos(tan(a1)) + rad2 * cos(a2);
      let y = rad1 * sin(tan(a1)) + rad2 * sin(a2);

      let r = map(sin(frameCount), -1, 1, r1, r2);
      let g = map(cos(frameCount), -1, 1, g1, g2);
      let b = map(sin(frameCount), -1, 1, b1, b2);
      let alpha = map(dist(width / 2, height / 2, x, y), 0, width, 255, 0);

      stroke(r, g, b, alpha);

      line(prevX, prevY, x, y);

      prevX = x;
      prevY = y;

      a1 += a1Inc;
      a2 += a2Inc;
    }
    rotate(180);
  }

  if (frameCount > 300) {
    noLoop();
  }
}