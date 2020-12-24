// inspiration: https://thecodingtrain.com/CodingChallenges/036-blobby.html
// description: Manipulating the vertices of a circle using perlin noise
// 3/12/2020

let yoff = 0;
let radius;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  radius = width/5;
}

function draw() {
  background(200);
  fill(50, 200);

  translate(width / 2, height / 2);

  beginShape();
  let xoff = 0;
  for (var a = 0; a < TWO_PI; a += 0.01) {
    let offset = map(noise(xoff, yoff, xoff + yoff), 0, 1, -50, 75);
    let r = radius + offset;
    let x = r * cos(a + offset);
    let y = r * sin(a + offset);
    stroke(map(sin(a + r), -1, 1, 150, 50), 0, 100, map(sin(a), -1, 1, 50, 150));
    vertex(x, y);
    xoff += 0.1;
  }
  endShape(CLOSE);

  yoff += 0.0003;
}