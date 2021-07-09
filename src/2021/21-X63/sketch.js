// 9/7/21
// Playing around with sine and cosine~

let t = 0;

function setup() {
  createCanvas(1080, 1080);
  stroke(255);
  noFill();
}

function draw() {
  background(0, 150);
  translate(width / 2, height / 2);
  
  for (let i = 0; i < 25; i++) {
    for (let a = 0; a < TWO_PI; a += TWO_PI / 75) {
      let p = (100 * sin(t + i)) / 5;
      push();
      rotate(PI * p);
      let x = 100 * pow(p, 2) * sin(a);
      let y = 250 * cos(a * p);
      circle(x, y, 5);
      pop();
    }
  }
  t += 0.0003;
}