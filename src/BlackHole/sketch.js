// inspiration: https://thecodingtrain.com/CodingChallenges/036-blobby.html
// Offsetting the vertices of a circle using perlin noise to create a black hole
// 4/12/2020

let yoff = 0;
let radius = 200;

function setup() {
  createCanvas(1080, 1080);
}

function draw() {
  background(30);
  stroke(255, 0, 102, 150);
  strokeWeight(2);
  fill(0);

  translate(width / 2, height / 2);

  beginShape();
  let xoff = 0;
  for (var a = 0; a < TWO_PI; a += 0.001) {
    let offset = map(noise(xoff, yoff, xoff * 5), 0, 1, -50, 150);
    let r = radius + offset;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    xoff += 0.1;
  }
  endShape(CLOSE);

  yoff += 0.01;
}