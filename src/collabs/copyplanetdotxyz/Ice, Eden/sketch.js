// collab with copyplanetdotxyz
// Welcome to the tundra of Titan, the largest moon of Saturn
// 10/01/2021

let img, audio, font;
let offset = 0;
let easing = 0.05;
let n = 0;
let I, C, E; // arrays for text to point

// flow field
let points = [];
let mult = 0.005;

function preload() {
  img = loadImage('assets/Ice_3.jpg'); // load iamge
  // audio = loadSound('assets/Saturn.mp3'); // load sound
  font = loadFont('assets/Roboto-Regular.ttf') // load font
}

function setup() {
  createCanvas(1080, 1080);
  image(img, 0, 0);

  I = font.textToPoints('I', width / 2 - 300, height / 2 + 140, 400, {
    sampleFactor: 0.2
  });
  C = font.textToPoints('C', width / 2 - 170, height / 2 + 140, 400, {
    sampleFactor: 0.2
  });
  E = font.textToPoints('E', width / 2 + 120, height / 2 + 140, 400, {
    sampleFactor: 0.2
  });

  audio.play();
  audio.loop();

  // flow field
  angleMode(DEGREES);

  let density = width / 15;
  let space = width / density

  // creating grid layout
  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      let p = createVector(x + random(-10, 10), y + random(-10, 10));
      points.push(p);
    }
  }
  toggleRecording();
}

function draw() {
  let dx = map(noise(n), 0, 1, 0, width) - img.width / 2 - offset;
  offset += dx * easing;
  tint(255, 127); // Display at half opacity
  image(img, offset, 0);
  n += 0.1;

  // draw text to points
  noFill();
  stroke(0);

  beginShape()
  for (let i = 0; i < I.length; i++) {
    rect(I[i].x, I[i].y, 2, 2);
    vertex(I[i].x + tan(n * I[i].y), I[i].y);
  }
  endShape();

  beginShape()
  for (let i = 0; i < C.length; i++) {
    rect(C[i].x, C[i].y, 2, 2);
    vertex(C[i].x + tan(n * C[i].y), C[i].y);
  }
  endShape();

  beginShape()
  for (let i = 0; i < E.length; i++) {
    rect(E[i].x, E[i].y, 2, 2);
    vertex(E[i].x + tan(n * E[i].y), E[i].y);
  }
  endShape();

  // flow field
  noiseDetail(1);

  for (let i = 0; i < points.length; i++) {
    // calculate color and alpha
    let alpha = map(dist(width / 2, height / 2, points[i].x, points[i].y), 0, 700, 255, 0);

    stroke(255, alpha);

    // calculate angle by which to move points
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);

    points[i].add(createVector(cos(angle), random(1, 5)));
    if (points[i].y > height) points[i].y = 0;
    // only draw within circle
    if (dist(width / 2, height / 2, points[i].x, points[i].y) < 700) {
      ellipse(points[i].x, points[i].y, 1);
    }
  }
}