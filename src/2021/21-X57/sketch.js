// Unstable containment
// 22/5/21

let yoff = 0;
let radius = 250;

function setup() {
  createCanvas(1080, 1080);
  stroke(255);
  fill(0);
}

function draw() {
  background(0, 50);

  push();
  translate(width / 2, height / 2);

  rotate(yoff / 2);

  // inner object
  beginShape();
  let xoff = 0;
  for (var a = 0; a < TWO_PI; a += 0.1) {
    let offset = tan(yoff) + map(noise(xoff, yoff, xoff * 5), 0, 1, 0, 7);
    let r = 50;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x + tan(xoff * yoff), y + sin(xoff * yoff));
    line(x, y, x * offset, y * offset);
    xoff += 1;
  }
  endShape(CLOSE);
  pop();

  // triange container
  push();
  noFill();
  stroke(255);
  strokeWeight(5);
  triangle(width / 2, height / 4, width / 4.5, height - height / 3, width - width / 4.5, height - height / 3);

  // darken outer sections
  fill(0);
  noStroke();
  triangle(0, 0, width - width / 3, 0, 0, height);
  triangle(width, 0, width / 3, 0, width, height);
  quad(0, width - width / 3, 0, height, width, height, width, width - width / 3);
  pop();

  yoff += 0.005;
}