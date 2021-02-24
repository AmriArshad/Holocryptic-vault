// Two interconnected maurer roses created with triangle strips
// 25/02/2021

let n = 2;
let d = 10;
let t = 0;

function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);
  stroke(255);
  noFill();
}

function draw() {
  background(0, 50);
  translate(width / 2, height / 2);
  rotate(t/10);

  beginShape(TRIANGLE_STRIP);
  for (let a = 0; a <= 360; a += 15) {
    let k = a * d;
    let r = 500 * sin(n * k);
    let x = r * cos(k) + tan(t);
    let y = r * sin(k);
    vertex(x, y);
    vertex(-x, -y);
  }
  endShape(CLOSE);

  n += 0.00003;
  d += 0.0003;
  t += 0.5;
}