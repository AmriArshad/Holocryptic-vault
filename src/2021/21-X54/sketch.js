// Tunnel simulation with trigonometry
// 8/5/2021
// inspiration: https://twitter.com/incre_ment/status/1389246775500840960

let t = 0;

function setup() {
  createCanvas(1080, 1080);
  noFill();
}

function draw() {
  background(0);

  translate(width / 2, height / 2);

  for (let i = 0; i < 99; i++) {
    for (let a = 0; a < TWO_PI; a += TWO_PI / 9) {
      let p = (4 * tan(t) + i) / 99;
      stroke(p * 255 + 255 * sin(9 * a) + 128);
      push();
      rotate(PI * p);
      circle(999 * pow(p, 3) * cos(a), 999 * pow(p, 3) * sin(a) + 150, 10 * p);
      pop();
    }
  }

  t += 0.01;
}