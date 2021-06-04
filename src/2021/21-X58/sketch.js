// 5/6/21
// Multiplicative Lissajous curve

let yoff = 0;
let radius = 250;

function setup() {
  createCanvas(1080, 1080);
  stroke(255);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(0, 100);
  translate(width / 2, height / 2);
  rotate(PI / 4);

  beginShape();
  let xoff = 0;
  for (var a = 0; a < TWO_PI; a += 0.01) {
    let offset = map(noise(xoff, yoff, xoff * 5), 0, 1, 0, 5);
    let r = 350;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x * cos(xoff * yoff), y * sin(xoff * yoff));
    xoff += 0.01;
  }
  endShape();

  yoff += 0.007;
}