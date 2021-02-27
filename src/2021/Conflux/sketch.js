// Experimenting with trig functions
// 27/02/2021

let t = 0;

function setup() {
  createCanvas(1080, 1080);
  stroke(255);
  noFill();
}

function draw() {
  background(0, 50);
  translate(width / 2, 0);

  for (let i = 0; i < height; i += 5) {
    let x = 150 * sin(i + t) * tan(i);
    let y = i + 5 * tan(i + t);
    ellipse(x, y, 5);
  }

  t += 0.005;
}