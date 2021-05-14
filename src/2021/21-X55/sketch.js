// Eid Mubarak
// 14/5/21

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

  rotate(PI/3.5);

  beginShape();
  let xoff = 0;
  for (var a = 0; a < PI; a += 0.01) {
    let offset = map(noise(xoff, yoff, xoff * 5), 0, 1, 0, 5);
    let r = map(sin(frameCount / 100), -1, 1, 275, 375);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    line(x, y, x, y / offset);
    xoff += 0.1;
  }
  endShape();

  yoff += 0.007;
}