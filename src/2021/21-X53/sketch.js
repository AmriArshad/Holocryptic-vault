// Hypnotic patterns with sine, cos and tan waves
// 1/5/2021

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

  rotate(frameCount * 0.01);

  for (let p of points) {
    let offset = map(p.radius, 0, 150, 100, 250);

    let t = frameCount / 500 + p.radius / 10;
    let r = tan(t / 2) * offset + p.radius;

    let x = r * cos(p.angle);
    let y = r * sin(p.angle);

    ellipse(x, y, 5);
  }
}