// inspiration: https://twitter.com/incre_ment/status/1439262286179287045
// Skull Formation
// 21/11/21

let x = 0;
let y = 0;
let t = 0;

function setup() {
  createCanvas(1080, 1080);
  fill(255, 150);
  noStroke();
}

function draw() {
  background(0, 150);
  translate(width / 2, height / 2);

  rotate(PI * 1.5);
  for (let n = 0; n < width / 15; n++) {
    for (let i = 0; i < width / 15; i++) {
      let a = sin(PI * t + n - y) * cos(PI * t + PI * i + x) * sin(PI * t * i - x);
      let b = cos(PI * t + n + y) * sin(PI * t + PI * i - x);
      x = a;
      y = b;
      circle(350 * x, 350 * y, 3);
    }
  }

  t += 0.00005;
}