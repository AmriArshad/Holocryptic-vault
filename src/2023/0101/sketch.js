let points = [];
let mult, axis, vector;
let r, g, b;

const size = 1080;
const density = size / 20;
const space = size / density;

function setup() {
  createCanvas(size, size);
  noStroke();
  angleMode(DEGREES);
  setupCanvas();
}

function draw() {
  drawLines();
}

const setupCanvas = () => {
  background(random([0, 255]));
  // background(255);
  // background(0);
  randomSeed(random(Date.now()));

  // generate multiplier
  mult = random(0.003, 0.005);

  // generate RGB values
  r = random(255);
  g = random(255);
  b = random(255);

  // reset points array
  points = [];
  // creating grid layout
  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      let p = createVector(x + random(-10, 10), y + random(-10, 10));
      points.push(p);
    }
  }

  // get random vector function
  vector = getRandomFunction();
  console.log(vector);
  // randomise axis
  axis = random([0, 1]);
};

// get random function for different outputs
const getRandomFunction = (angle) => {
  const combinations = [
    (angle) => createVector(sin(angle), sin(angle)),
    (angle) => createVector(tan(angle), tan(angle)),
    (angle) => createVector(sin(angle), mag(cos(angle), tan(angle))),
    (angle) => createVector(mag(sin(angle)), tan(angle)),
    (angle) => createVector(mag(cos(angle), cos(angle)), sin(angle)),
    (angle) => createVector(mag(sin(angle), cos(angle)), sin(angle)),
    (angle) => createVector(mag(sin(angle), sin(angle)), sin(angle)),
    // combinations with specific axis
    (angle) => axis === 0 ? createVector(sin(angle), tan(angle)) : createVector(tan(angle), sin(angle)),
    (angle) => axis === 1 ? createVector(sin(angle), tan(angle)) : createVector(tan(angle), sin(angle)),
    (angle) => {
      axis = 0;
      return createVector(tan(angle), cos(angle));
    },
    (angle) => {
      axis = 0;
      return createVector(sin(angle), sin(cos(angle), tan(angle)));
    },
    (angle) => {
      axis = 0;
      return createVector(sin(angle), sin(cos(angle), tan(angle)));
    },
    (angle) => {
      axis = 0;
      return createVector(mag(cos(angle), cos(angle)), cos(angle));
    },
    (angle) => {
      axis = 0;
      return createVector(mag(sin(angle), sin(angle)), sin(angle));
    },
  ];
  return random(combinations);
};

const drawLines = () => {
  for (let i = 0; i < points.length; i++) {
    // calculate alpha
    let alpha = map(
      dist(width / 2, height / 2, points[i].x, points[i].y),
      0,
      width / 2,
      255,
      0
    );
    fill(r, g, b, alpha);

    // calculate angle by which to move points
    let angle = randomGaussian(axis == 0 ? points[i].x : points[i].y);

    points[i].add(vector(angle));

    // only draw within circle
    if (dist(width / 2, height / 2, points[i].x, points[i].y) < width / 2) {
      ellipse(points[i].x, points[i].y, 1.5);
    }
  }
  if (frameCount === 175) noLoop();
};

function mouseClicked() {
  frameCount = 0;
  setupCanvas();
  loop();
  drawLines();
}