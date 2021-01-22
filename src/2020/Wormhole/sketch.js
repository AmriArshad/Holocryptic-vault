// inspiration: https://thecodingtrain.com/CodingChallenges/036-blobby.html
// description: Manipulating sine and cos waves alongside perlin noise to create a wormhole
// 20/12/2020

let yoff = 0;
let radius = 150;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(20);

  rectMode(CENTER);
  fill(0, 10);
  stroke(12, 116, 137, 75);
  strokeWeight(3);

  translate(width / 2, height / 2);
  rotate(-yoff / 2);

  let xoff = 0;
  for (var a = 0; a < 1.5 * PI; a += 0.01) {
    let offset = map(noise(xoff, yoff, xoff + yoff), 0, 1, -50, 150);
    let r = radius + offset;
    let x = r * sin(a);
    let y = r * cos(a);
    ellipse(x, y, r);
    xoff += 0.01;
  }
  yoff += 0.005;
}
