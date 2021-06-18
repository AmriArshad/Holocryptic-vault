// 18/6/21
// Quantum realm

let t = 0;

function setup() {
  createCanvas(1080, 1080);
  stroke(255);
  noFill();
}

function draw() {
  background(0, 150);
  translate(width / 2, height / 2);

  for (let i = 0; i < 50; i++) {
    for (let a = 0; a < TWO_PI; a += TWO_PI / 25) {
      let p = (100 * tan(t + i)) / 75;
      stroke(p * 255 + 255 * sin(9 * a) + 128);
      push();
      rotate(PI * p);
      circle(500 * pow(p, 5) * cos(a), 350 * sin(a), 10);
      pop();
    }
  }

  t += 0.003;
}