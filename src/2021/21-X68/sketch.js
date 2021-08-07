// Celestial core
// inspiration: https://www.pinterest.nz/pin/717268678136537293/
// 7/8/21

let yoff = 0;

function setup() {
  createCanvas(1080, 1080);
  stroke(255);
  noFill();
  RANDOM_STATE = random(50);
}

function draw() {
  background(0, 75);
  translate(width / 2, height / 2);
  randomSeed(RANDOM_STATE);

  for (let i = 3; i < 4; i++) {
    let r = i * 75;
    random_point = round(random(0, TWO_PI), 1);

    beginShape();
    let xoff = 0;
    for (var a = 0; a < TWO_PI; a += 0.01) {
      let offset = map(noise(xoff, yoff, xoff * 5), 0, 1, 0, 3);
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
      line(x / offset, y, x / offset, y * offset);
      xoff += 1;
    }
    endShape(CLOSE);

    push();
    beginShape();
    stroke(255, 20);
    for (var a = 0; a < TWO_PI; a += 0.01) {
      let offset = map(noise(xoff, yoff / 10), 0, 1, 25, 75);
      let r = 20 + offset;
      let x = r * cos(a + offset);
      let y = r * sin(a + offset);
      vertex(x, y);
      xoff += 0.1;
    }
    endShape();
    pop();
  }
  yoff += 0.005;
}