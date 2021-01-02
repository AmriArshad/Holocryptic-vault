// inspiration: https://youtu.be/EYLWxwo1Ed8
// inspiration: https://en.wikipedia.org/wiki/Collatz_conjecture
// a simple Collatz Conjecture visualisation

let len;
let angle1;
let angle2l;
let x;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  len = 25;
  angle1 = PI / 15;
  angle2 = PI / 22.5;
  x = 0;
  y = height;
}

function draw() {
  let sequence = [];
  let n = ceil(millis());
  do {
    sequence.push(n);
    n = collatz(n);
  } while (n != 1);
  sequence.push(1);
  sequence.reverse();

  resetMatrix();
  translate(width / 15, height);
  rotate(-PI / 3);
  for (let j = 0; j < sequence.length; j++) {
    if (sequence[j] % 2 == 0) {
      rotate(angle1);
    } else {
      rotate(-angle2);
    }
    strokeWeight(3);
    stroke(map(x % width, 0, width, 0, 255), map(y % height, 0, height, 0, 255), 200, 50);
    line(0, 0, len, -len);
    translate(len, -len);
    x += len;
    y += -len;
  }

  if (frameCount == 250) noLoop();
}

function collatz(n) {
  if (n % 2 == 0) return n / 2;
  else return (3 * n + 1) / 2;
}