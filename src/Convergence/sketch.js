// inspiration: https://p5js.org/examples/3d-sine-cosine-in-3d.html
// description: Adaptation of p5js example (Sine Cosine in 3D) using Sine and Tangent
// 10/12/2020

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function draw() {
  background(0);
  scale(0.5);
  rotateY(frameCount * 0.01);
  
  for (let j = 0; j < 20; j++) {
    push();
    for (let i = 0; i < 100; i++) {
      translate(sin(frameCount * 0.0001 + j * PI) * 100, tan(frameCount * 0.001 + j) * 50, i * 0.1);
      rotateX(frameCount * 0.0005);
      rotateZ(frameCount * 0.0001);
      fill(map(sin(j), -1, 1, 100, 200),0,map(sin(j), -1, 1, 100, 150));
      box(10);
    }
    pop();
  }
}