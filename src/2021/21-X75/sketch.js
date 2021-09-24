// inspiration: https://twitter.com/incre_ment/status/1439262286179287045
// 25/9/21
// Entrance

let x = 0;
let y = 0;
let t = 0;

function setup() {
  createCanvas(1080, 1080);
  fill(255, 200);
  noStroke();
}

function draw() {
  background(0, 150);
  translate(width / 2, height / 2);

  rotate(PI * 1.5);
  for (let n = 0; n < width / 20; n++) {
    for (let i = 0; i < width / 20; i++) {
      let a = sin(PI * t + n - y);
      let b = cos(PI * t + n + y);
      x = a;
      y = b;
      circle(250 * x, 250 * y, 2);
    }
  }

  t += 0.001;
}