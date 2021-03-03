// Experimenting with circular patterns
// 3/03/2021

let points = [];
let t = 0;

function setup() {
  createCanvas(1080, 1080);
  fill(255);
  noStroke();

  for (let r = 0; r < 150; r += 7) {
    for (let i = 0; i < r / 2; i++) {
      let a = map(i, 0, r / 2, 0, TWO_PI);
      points.push({
        radius: r,
        angle: a
      });
    }
  }
}

function draw() {
  background(0, 50);
  translate(width / 2, height / 2);

  rotate(t / 10);

  for (let p of points) {
    let r = map(p.radius, 0, 100, 0, 250);
    let x = r * cos(p.angle) * sin(p.angle * t / 2) + tan(t * 3);
    let y = r * sin(p.angle) * cos(p.angle * t / 3);

    ellipse(x, y, 5);
  }
  t += 0.005;
}