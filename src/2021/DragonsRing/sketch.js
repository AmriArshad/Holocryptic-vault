// inspiration: https://en.wikipedia.org/wiki/Dragon_curve
// Using four Dragon Curves, also known as the Heighway dragon, to create a ring
// 14/01/2021

let n = 0;
function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);
  strokeWeight(2);
  frameRate(5);
}

function draw() {
  background(0);

  translate(width / 3.2, height / 1.45);
  stroke(255);

  dragonCurve(n, 400);
  dragonCurve(n, -400);
  dragonCurve(n, 400);
  dragonCurve(n, -400);


  if (n < 12) n++;
  // loop
  else setTimeout(reset, 500);
}

function reset(){
  n = 0;
}

function dragonCurve(order, length) {
  rotate(order * 45);
  dragonCurveRecursive(order, length, 1);
}

function dragonCurveRecursive(order, length, sign) {
  if (order == 0) {
    line(0, 0, length, 0);
    translate(length, 0);
  } else {
    let rootHalf = pow(1 / 2, 1 / 2);

    // rotate(sign * -90);
    dragonCurveRecursive(order - 1, length * rootHalf, 1);
    rotate(sign * -90);
    dragonCurveRecursive(order - 1, length * rootHalf, -1);
  }
}