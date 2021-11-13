// Multi-Helix
// 14/11/21

let n = 999;
let a = [];
let r = 0;

function setup() {
  createCanvas(1080, 1080);
  noStroke();
  fill(255);

  for (let i = 0; i < n * 2; i++) {
    a[i] = random(width) - width / 2;
  }
}

function draw() {
  background(0, 50);

  translate(width / 2, height / 2);

  for (let i = 0; i < n * 2 - 1; i++) {
    push();
    let x = 250 * sin(mag(a[i], a[i + 1]) / 100 + r) * sin(mag(a[i], a[i + 1]) * r);
    let y = 350 * sin(mag(a[i], a[i + 1]) / 20 + r);
    translate(x, y);
    ellipse(0, 0, 3);
    pop();
  }

  r += .00005;
}