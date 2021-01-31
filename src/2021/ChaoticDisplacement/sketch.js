// Grid of circles that move around chaotically
// 31/01/2021

let scl;
let t = 0;

function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);

  scl = 60;

  stroke(255);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(0, 50);

  translate(width / 2, -165)
  rotate(45);

  for (let i = scl * 3; i < width - scl * 3; i += scl) {
    for (let j = scl * 3; j < height - scl * 3; j += scl) {
      let x = i + tan(t * i * j);
      let y = j;
      ellipse(x, y, map(j, scl * 3, width, 30, 5) + 10 * sin(i * j * t));
    }
  }

  t += 0.00001;
}