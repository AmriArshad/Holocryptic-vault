// Grid of unstable cubes
// 19/02/2021

let scl;
let t = 0;

function setup() {
  createCanvas(1080, 1080, WEBGL);
  angleMode(DEGREES);

  scl = 75;

  stroke(255);
  noFill();
}

function draw() {
  background(0);

  translate(-width / 2, -height / 2);

  for (let x = scl * 2; x <= width - scl * 2; x += scl) {
    for (let y = scl * 2; y <= height - scl * 2; y += scl) {
      push();
      // move to position
      translate(x, y);

      // rotate and manage displacement of object
      rotateX(t);
      rotateY(t);
      rotateZ(t);
      translate(0, 50 * sin(x * y * t / 100000) + tan(x * y * t / 100000));

      box(map(sin(x * y * t / 100000), -1, 1, 10, 20));
      
      pop();
    }
  }
  t += 0.1;
}