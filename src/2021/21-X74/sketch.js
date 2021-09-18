// 19/9/21
// Blurred Lines

let yoff = 0;

function setup() {
  createCanvas(1080, 1080);
  stroke(255, 30);
  noFill();
}

function draw() {
  background(0, 75);
  translate(width / 2, height / 2);

  for (let i = 1; i < 5; i++) {
    let xoff = 0;

    beginShape();
    for (var a = 0; a < TWO_PI; a += 0.01) {
      let offset = map(noise(xoff, yoff / 10), 0, 1, 25, 75);
      let r = i * 75 + offset;
      let x = r * cos(offset);
      let y = r * sin(a);
      vertex(x, y);
      xoff += 0.1;
    }
    endShape();
  }
  yoff += 0.005;
}