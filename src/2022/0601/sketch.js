// Genuary day 5: Destroy a square.
// Unstable Square
// 06/01/22

let r1, r2, g1, g2, b1, b2;
const length = 200;
const size = 500;
let iterations = 5000;

// set to true for animation
const animation = false;

function setup() {
  createCanvas(1080, 1080);
  background(0);
  rectMode(CENTER);
  frameRate(30);

  pickColours();
  if (!animation) drawLines();
}

function draw() {
  if (animation) {
    background(0);
    drawLines();
    iterations -= 50;
  }
}

const pickColours = () => {
  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);
}

const drawLines = () => {
  for (let i = 0; i < iterations; i++) {
    const x = random(width / 2 - size / 2, width / 2 + size / 2);
    const y = random(height / 2 - size / 2, height / 2 + size / 2);

    // calculate colour and alpha
    const r = map(x, 0, width, r1, r2);
    const g = map(y, 0, width, g1, g2);
    const b = map(x, 0, width, b1, b2);
    strokeWeight(2);
    stroke(r, g, b);

    line(x - length, y + length, x + length, y - length);
    line(x - length, y - length, x + length, y + length);
  }
}

function mouseClicked() {
  if (!animation) {
    background(0);
    pickColours();
    drawLines();
  }
}