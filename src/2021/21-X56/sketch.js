// Star formation with a 4 cusp hypocycloid
// 21/5/21

let size = 30;
let t = 0;

function setup() {
  createCanvas(1080, 1080);
  stroke(255);
  strokeWeight(1.5);
  noFill();
}

function draw() {
  background(0, 50);

  push();
  translate(width / 2, height / 2);

  stroke(255, 150)
  strokeWeight(1);

  for (let j = 0; j < height; j++) {
    ellipse(500 * tan(j * t / 10) * sin(j + t) + tan(j + t), -j, 5);
    ellipse(500 * tan(j * t / 10) * sin(j + t) + tan(j + t), j, 5);
  }

  t += 0.0001;
  pop();

  translate(width / 2, height / 2);

  rotate(t * 50)
  
  if (size < 300){
    size += 0.3;
    translate(tan(t * 500), 0)
  }

  line(0, 0, size, 0);
  line(0, 0, -size, 0);
  line(0, 0, 0, size);
  line(0, 0, 0, -size);

  // top lines
  // right side
  line(0, -size, size / 5, 0)
  line(0, -4 * size / 5, 2 * size / 5, 0)
  line(0, -3 * size / 5, 3 * size / 5, 0)
  line(0, -2 * size / 5, 4 * size / 5, 0)
  line(0, -2 * size / 5, 4 * size / 5, 0)
  line(0, -size / 5, 5 * size / 5, 0)

  // left side
  line(0, -size, -size / 5, 0)
  line(0, -4 * size / 5, -2 * size / 5, 0)
  line(0, -3 * size / 5, -3 * size / 5, 0)
  line(0, -2 * size / 5, -4 * size / 5, 0)
  line(0, -2 * size / 5, -4 * size / 5, 0)
  line(0, -size / 5, 5 * -size / 5, 0)

  // bottom lines
  // right side
  line(0, size, size / 5, 0)
  line(0, 4 * size / 5, 2 * size / 5, 0)
  line(0, 3 * size / 5, 3 * size / 5, 0)
  line(0, 2 * size / 5, 4 * size / 5, 0)
  line(0, 2 * size / 5, 4 * size / 5, 0)
  line(0, size / 5, 5 * size / 5, 0)

  // left side
  line(0, size, -size / 5, 0)
  line(0, 4 * size / 5, -2 * size / 5, 0)
  line(0, 3 * size / 5, -3 * size / 5, 0)
  line(0, 2 * size / 5, -4 * size / 5, 0)
  line(0, 2 * size / 5, -4 * size / 5, 0)
  line(0, size / 5, 5 * -size / 5, 0)
}