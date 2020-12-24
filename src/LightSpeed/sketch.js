// inspiration: https://thecodingtrain.com/CodingChallenges/036-blobby.html
// Travelling at the speed of light  
// Click to restart
// 8/12/2020

let yoff = 0;
let radius = 250;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
}

function draw() {
  translate(width / 2, height / 2);

  let xoff = 0;
  for (var a = 0; a < TWO_PI; a += 0.015) {
    let offset = map(noise(xoff, yoff, xoff + yoff), 0, 1, 0, width);
    let r = radius + offset;
    let x = r * cos(a + offset);
    let y = r * sin(a);
    stroke(map(sin(a * offset), -1, 1, 50, 125), 0, map(cos(a), -1, 1, 50, 150), map(sin(a * offset), -1, 1, 1, 5));
    line(0, 0, x, y);
    xoff += 0.001;
  }

  yoff += 0.0001;
}

function mousePressed() {
  background(0);
}