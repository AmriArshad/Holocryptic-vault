// Abstract paintings with perlin noise
// 28/02/2021

let points = [];
let mult = 0.005;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  angleMode(DEGREES);
  
  let density = width / 15;
  let space = width / density;
  
  // creating grid layout
  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      let p = createVector(x + random(-10, 10), y + random(-10, 10));
      points.push(p);
    }
  }
  
  mult = random(0.005, 0.01);
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    // calculate alpha
    let alpha = map(dist(width / 2, height / 2, points[i].x, points[i].y), 0, width / 2, 255, 0);

    fill(255, alpha);

    // calculate angle by which to move points
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 360);

    points[i].add(createVector(cos(angle), noise(angle)));

    // only draw within circle
    if (dist(width / 2, height / 2, points[i].x, points[i].y) < width / 2) {
      ellipse(points[i].x, points[i].y, 1);
    }
  }
  if (frameCount == 100) noLoop();
}