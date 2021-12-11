// Arrow Containment
// 11/12/2021

const r = 275;
let yoff = 0;
let t = 0;

function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(0, 100);
  translate(width / 2, height / 2);

  // outer circle
  noFill();
  stroke(255);
  strokeWeight(3);
  circle(0, 0, 350);

  // line
  strokeWeight(3);
  line(0, -300, 0, 400);

  // bottom arrows
  line(0, 400, 25, 375);
  line(0, 400, -25, 375);
  line(0, 350, 25, 325);
  line(0, 350, -25, 325);

  // center circles
  push();
  for (var a = 30; a < 360; a += 60) {
    let x = 20 * cos(a);
    let y = 20 * sin(a);
    noFill();
    circle(x, y, map(sin(t), -1, 1, 50, 75));
    fill(255);
  }
  pop();

  // top circle
  fill(0);
  circle(0, -300, 50);

  // top orbit
  push();
  translate(0, -300);
  for (var a = 0; a < 360; a += .1) {
    fill(0);
    strokeWeight(2.5);
    rotate(t);

    if (a == 0.1) {
      x = 25 * cos(a);
      y = 25 * sin(a);
      ellipse(x, y, 15);
    }
  }
  pop();

  // outer lines
  push();
  strokeWeight(1.5);
  stroke(255);
  let xoff = 0;
  for (var a = 0; a < 360; a += 2) {
    let offset = map(noise(xoff, yoff, xoff * 5), 0, 1, 1, 2);
    let x = r * cos(a);
    let y = r * sin(a);
    line(x * offset, y * offset, x / offset, y * offset);
    xoff += 1;
  }
  pop();

  yoff += 0.005;

  t += 1;
}