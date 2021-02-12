// Using sine waves and perlin noise to create mountains
// 12/02/2021

let angle = 0;

function setup() {
  createCanvas(1080, 1080);
  noFill();
  stroke(255);
  strokeWeight(2);
}

function draw() {
  background(0, 50);

  translate(0, height / 2 + height / 8);
  translate(tan(angle) / 2, 0);

  for (let offset = 0; offset < width; offset += 50) {
    let size = map(sin(angle + offset) + noise(angle, offset) / 2, -1, 1, 20, 200);

    // mountains
    beginShape();
    vertex(size, 0);
    vertex(0, -size);
    vertex(-size, 0);
    endShape(CLOSE);

    // reflection
    push();
    strokeWeight(0.1);
    beginShape();
    vertex(0, size);
    vertex(size, 0);
    vertex(-size, 0);
    endShape(CLOSE);
    pop();

    translate(75, 0);
  }

  angle += 0.03;
}