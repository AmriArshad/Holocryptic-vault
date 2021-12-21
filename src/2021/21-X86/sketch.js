// inspiration: https://twitter.com/incre_ment/status/1466829069853491204
// Koru
// 17/12/21

let t = 0
let p, x, y;
function setup() {
  createCanvas(1080, 1080);
  noStroke();
  fill(255);
  w = width / 2;
}
function draw() {
  background(0);
  translate(width / 2, height / 2);

  for (let i = 0; i < 5000; i++) {
    push();
    p = (i + t) / 2500;
    x = -w + p * width / 2;
    y = 9 * tan(x) * tan(x);
    rotate(4 * PI * pow(map(mag(x, y), 0, w, sin(t * 10), 0), 2));
    circle(x, y, 2 + sin(PI * (8 * p - t)));
    pop();
  }
  t += .0005;
}