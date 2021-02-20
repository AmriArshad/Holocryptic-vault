// Experimenting with sine and tangent waves in 3D
// 21/02/2021

let t = 0;

function setup() {
  createCanvas(1080, 1080, WEBGL);
  stroke(255);
  noFill();
}

function draw() {
  background(0);
  rotateZ(HALF_PI);

  for (let j = 0; j < 20; j++) {
    push();
    for (let i = 0; i < 100; i++) {
      let x = sin(t * 0.1 + j * PI) * 50;
      let y = tan(t * 0.1 + j) * 10 * PI;
      let z = i * 0.1 + tan(1.5 * t);
      translate(x, y, z);

      rotateX(t * 0.05);
      rotateY(t * 0.01);
      rotateZ(t * 0.01);

      box(10);
    }
    pop();
  }

  t += 0.01;
  t %= 7;
}