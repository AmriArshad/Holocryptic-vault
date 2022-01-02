// Genuary day 1: Draw 10,000 of something
// 10,000 strokes
// 02/01/22

let r1, r2, g1, g2, b1, b2;

function setup() {
  createCanvas(1080, 1080);
  noFill();
  noStroke();

  pickColours()
  drawLines();
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
  for (let i = 0; i < 10000; i++) {
    const x = random(width);
    const y = random(height);
    
    // calculate colour and alpha
    const r = map(x, 0, width, r1, r2);
    const g = map(y, 0, width, g1, g2);
    const b = map(x, 0, width, b1, b2);
    const alpha = map(dist(width / 2, height / 2, x, y), 0, width / 2, 255, 0);
    stroke(r, g, b, alpha);
    
    line(x, y, x + 50, y + 50);
  }
}

function mouseClicked() {
  background(0);
  pickColours();
  drawLines();
}

