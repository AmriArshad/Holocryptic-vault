// 3D effects with lines and sine waves
// 2/04/2021

let angle = 0;

function setup() {
  createCanvas(1080, 1080);
  noFill();
  stroke(255);
  strokeWeight(0.3);
}

function draw() {
  background(0, 50);
  translate(width / 2, 0);

  for (let offset = 0; offset < height; offset += 5) {
    let size = map(sin(angle * offset), -1, 1, -250, 250);

    push();
    beginShape();
    rotate(angle);
    vertex(0, size);
    vertex(-size, 0);
    endShape(CLOSE);
    pop();

    translate(0, 5);
  }

  angle += 0.01;
}