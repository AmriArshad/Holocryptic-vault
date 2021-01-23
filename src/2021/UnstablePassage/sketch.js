// inspiration: https://thecodingtrain.com/CodingChallenges/036-blobby.html
// Using perlin noise with sine and tangent waves to create a pulsating effect
// 23/1/2021

let yoff = 0;
let radius = 350;

function setup() {
  createCanvas(1080, 1080);
  
  rectMode(CENTER);
  fill(0, 5);
  stroke(255);
  strokeWeight(3);
}

function draw() {
  background(0, 50);

  translate(width / 2, height / 2);
  rotate(-yoff / 2);

  let xoff = 0;
  for (var a = 0; a < 3 * PI; a += 0.1) {
    let offset = map(noise(xoff, yoff, xoff + yoff), 0, 1, -500, 350);
    let r = radius + offset;
    let x = r * sin(a);
    let y = r * cos(a);
    let size = r * sin(xoff) * tan(yoff);
    ellipse(x, y, size, size);
    xoff += 0.01;
  }
  yoff += 0.005;
}