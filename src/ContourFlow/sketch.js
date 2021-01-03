// inspiration: https://youtu.be/1-QXuR-XX_s
// Experimenting with perlin noise and noise detail to create abstract contour maps
// 3/01/2021

let points = [];
let mult = 0.005;

let r1, r2, g1, g2, b1, b2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  noiseDetail(2, 5);

  let density = width / 20;
  let space = width / density

  // creating grid layout
  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      let p = createVector(x + random(-10, 10), y + random(-10, 10));
      points.push(p);
    }
  }

  // random ranges for rgb values used in mapping color
  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);

  mult = random(0.001, 0.01);
}

function draw() {
  noStroke();

  for (let i = 0; i < points.length; i++) {
    // calculate color and alpha
    let r = map(points[i].x, 0, width, r1, r2);
    let g = map(points[i].y, 0, width, g1, g2);
    let b = map(points[i].x, 0, width, b1, b2);
    let alpha = map(dist(width / 2, height / 2, points[i].x, points[i].y), 0, width / 2, 255, 0);

    fill(r, g, b, alpha);

    // calculate angle by which to move points
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);

    points[i].add(createVector(cos(angle), sin(angle)));

    // only draw within circle
    if (dist(width / 2, height / 2, points[i].x, points[i].y) < width / 2) {
      ellipse(points[i].x, points[i].y, 1);
    }
  }
}