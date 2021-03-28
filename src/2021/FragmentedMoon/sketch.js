// Utilizing perlin noise to create abstract shapes
// 27/03/2021

let yoff = 0;
let radius = 250;

function setup() {
  createCanvas(1080, 1080);
  stroke(255, 150);
  noFill();
}

function draw() {
  background(0, 50);

  translate(width / 2, height / 2);

  beginShape();
  let xoff = 0;
  for (var a = 0; a < TWO_PI; a += 0.01) {
    let offset = map(noise(xoff, yoff, xoff * 5), 0, 1, 0, 200);
    let r = map(sin(frameCount / 100), -1, 1, 275, 350);
    let x = r * cos(a) + tan(frameCount / 50);
    let y = r * sin(a);
    vertex(x, y);
    line(x, y, x - offset, y);
    xoff += 0.1;
  }
  endShape(CLOSE);

  yoff += 0.01;
}