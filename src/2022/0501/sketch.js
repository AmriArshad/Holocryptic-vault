// Genuary Day 4: The next next Fidenza.
// Simple Flowfield
// 05/01/22

let points = [];
let mult = 0.005;
let alpha, padding;

let r1, r2, g1, g2, b1, b2;

function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);
  rectMode(CENTER);
  background(0);

  let density = width / random(10, 20);
  let space = width / density
  padding = width / 20;
  alpha = random(100, 200);

  // creating grid layout
  for (let x = padding; x < width - padding; x += space) {
    for (let y = padding; y < height - padding; y += space) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

  // random ranges for rgb values
  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);

  mult = random(0.001, 0.005);

  // lerp colours and draw outer rectangle
  c1 = color(r1, g1, b1);
  c2 = color(r2, g2, b2);
  c = lerpColor(c1, c2, 0.5);

  stroke(c1);
  noFill();
  rect(width / 2, height / 2, width - padding);
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    // calculate color
    let r = map(points[i].x, 0, width, r1, r2);
    let g = map(points[i].y, 0, width, g1, g2);
    let b = map(points[i].x, 0, width, b1, b2);
    fill(r, g, b, alpha);
    noStroke();

    // calculate angle by which to move points
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);
    points[i].add(createVector(sin(angle), cos(angle)));

    // only draw within square
    if (points[i].x < width - padding && points[i].x > padding && points[i].y < height - padding && points[i].y > padding) {
      ellipse(points[i].x, points[i].y, 1);
    }
  }
}