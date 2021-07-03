// inspiration: https://www.pinterest.nz/pin/356206651780777862/
// 3/7/21
// Solar system

let yoff = 0;

function setup() {
  createCanvas(1080, 1080);
  stroke(255);
  noFill();
  RANDOM_STATE = random(50);
}

function draw() {
  background(0, 50);
  translate(width / 2, height / 2);
  randomSeed(RANDOM_STATE);

  for (let i = 3; i < 10; i++) {
    let r = i * 50;
    random_point = round(random(0, TWO_PI), 1);

    // orbits
    beginShape();
    let xoff = 0;
    for (var a = 0; a < TWO_PI; a += 0.1) {
      let offset = sin(yoff) + map(noise(xoff, yoff, xoff * 5), 0, 1, 0, 1);
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
      xoff += 1;
    }
    endShape(CLOSE);

    // star
    push();
    beginShape();
    stroke(255, 10);
    for (var a = 0; a < TWO_PI; a += 0.01) {
      let offset = map(noise(xoff, yoff / 10), 0, 1, 25, 100);
      let r = 20 + offset;
      let x = r * cos(a + offset);
      let y = r * sin(a + offset);
      vertex(x, y);
      xoff += 0.1;
    }
    endShape();
    pop();

    // planets
    for (var a = 0; a < TWO_PI; a += 0.1) {
      push();
      fill(0);
      strokeWeight(2.5);
      rotate(map(i, 2, 10, 10, 2) * yoff / 5)

      if (a == 0.1) {
        x = r * cos(a + random_point);
        y = r * sin(a + random_point);
        ellipse(x, y, i * 5);
      }
      pop();
    }
  }
  yoff += 0.005;
}