// inspiration: https://youtu.be/TOm5wKmn9yw, thedotisblack.com, @thedotiswhite on instagram
// My version of the classic vaporwave sunset
// 15/01/2021

let lines = [];
const num = 20;

function setup() {
  createCanvas(1080, 1080);
  colorMode(HSB);

  // set up initial position of lines
  for (let i = 0; i < num; i++) {
    lines[i] = height / num * i;
  }
}

function draw() {
  background(0);

  // draw lines
  for (let i = 0; i < num; i++) {
    let hue = map(lines[i], 0, height, 355, 280);
    strokeWeight(map(lines[i], 0, height, 75, 5));
    stroke(hue, 360, 360);

    line(0, lines[i], width, lines[i]);

    lines[i] += 0.5;
    if (lines[i] > height) lines[i] = 0;
  }

  // draw ellipse around lines to contain them in a circle
  stroke(0);
  strokeWeight(height / 3);
  noFill();
  ellipse(width / 2, height / 2, height + height / 6, height + height / 6);
}