// inspiration: https://www.pinterest.nz/pin/512495632586335040/

let angle = 0;
let offset = 50;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(200);
  rectMode(CENTER);
  translate(0, height / 2);
  fill(50);
  stroke(255);
  strokeWeight(3);

  for (let offset = 0; offset < width; offset += 50) {
    let size = map(sin(angle + 2*offset), -1, 1, 50, 150);

    beginShape();
    vertex(0, size); // top
    vertex(size, 0); // right
    vertex(0, -size); // bottom
    vertex(-size, 0); // left
    endShape(CLOSE);

    translate(75, 0);
  }

  angle += 0.05;

}