// 
// 

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
    // x = 9 * sin(y) * tan(y) * y;
    // y = -w + p * w;
    x = -w + p * w;
    y = 9 * mag(sin(PI * x * t / 100), tan(PI * x / 10)) * tan(PI * x / 10) / sin(t / 10);
    circle(x, y, 2.5 + sin(PI * (8 * p - t)));
    pop();
  }
  t += .005;
}