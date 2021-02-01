// Experimenting with points in a circle
// 1/02/2021

let points = [];

function setup() {
  createCanvas(1080, 1080);
  fill(255);
  noStroke();

  for (let r = 0; r < 150; r += 10) {
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

  rotate(frameCount * 0.001);

  for (let p of points) {
    let offset = map(p.radius, 0, 100, 0, 300);

    let t = frameCount / 50 + p.radius / 100;
    let r = sin(t / 2) * offset;

    let x = r * cos(p.angle) + tan(t);
    let y = r * sin(p.angle) - 100 * sin(t);

    ellipse(x, y, 5);
  }
}