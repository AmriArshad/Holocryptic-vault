// inspiration: https://youtu.be/vmhRlDyPHMQ
// A triangular sine wave structure
// 4/01/2021

function setup() {
  createCanvas(1080, 1080, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  rotateX(60);
  rotateZ(frameCount / 15);
  rotateY(frameCount / 5);

  noFill();
  stroke(255);

  for (let i = 0; i < 25; i += 0.1) {

    let r = map(sin(frameCount), -1, 1, 100, 200);
    let g = map(i, 0, 25, 100, 200);
    let b = map(sin(frameCount), -1, 1, 255, 150);

    stroke(r, g, b);

    rotate(frameCount / 1000);

    beginShape();
    for (let j = 0; j < 360; j += 120) {
      let rad = i * 10;
      let x = rad * cos(j);
      let y = rad * sin(j);
      let z = sin(frameCount + i * 10) * 350;

      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
}