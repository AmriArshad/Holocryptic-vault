let points = [];
let mult;
let r, g, b;

function setup() {
  createCanvas(1080, 1080);
  background(0);
  noStroke();
  angleMode(DEGREES);

  let density = width / 20;
  let space = width / density;

  // creating grid layout
  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      let p = createVector(x + random(-10, 10), y + random(-10, 10));
      points.push(p);
    }
  }

  mult = random(0.003, 0.005);

  // generate RGB values
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    // calculate alpha
    let alpha = map(dist(width / 2, height / 2, points[i].x, points[i].y), 0, width / 2, 255, 0);
    fill(r, g, b, alpha);

    // calculate angle by which to move points
    let angle = randomGaussian(points[i].y);

    points[i].add(createVector(tan(angle), sin(angle)));

    // only draw within circle
    if (dist(width / 2, height / 2, points[i].x, points[i].y) < width / 2) {
      ellipse(points[i].x, points[i].y, 1);
    }
  }
  if (frameCount == 175) noLoop();
}