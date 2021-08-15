// Star Array
// 15/8/2021

let scl;
let t = 0;

function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);

  scl = 40;

  stroke(255);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(0, 50);

  translate(width / 2, -200);
  rotate(45);

  for (let i = scl * 5; i < width - scl * 5; i += scl) {
    for (let j = scl * 5; j < height - scl * 5; j += scl) {
      let y = j;
      let x = i;
      rect(x, y, map(i + j, scl * 5, width - scl * 5, 25, 5) + 15 * sin(i * j * t));
    }
  }

  t += 0.000005;
}