// Hive Orbit
// 28/11/21

const r = 160;
let t = 0;

function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);
  strokeWeight(3);
  stroke(255);
  noFill();
}

function draw() {
  background(0, 100);
  translate(width / 2, height / 2);
  
  // outer circle
  push();
  strokeWeight(2);
  circle(0,0, 650);
  pop();

  // center hexagon
  for (let i = 0; i < 5; i++) {
    push();
    rotate(t * i * 10);
    hexagon(0, 0, i * 20);
    pop();
  }

  // outer orbitals
  push();
  rotate(t * 40);
  for (let i = -1; i < 2; i++) {
    line(i * 10, -275, i * 10, -375); // top
    line(i * 10, 275, i * 10, 375); // bottom
  }
  pop();
  
  // outer hexagons
  push();
  for (var a = 30; a < 360; a += 60) {
    let x = r * cos(a);
    let y = r * sin(a);
    noFill();
    hexagon(x, y, 75)
    fill(255);
    hexagon(x, y, map(sin(y * t), -1, 1, 10, 50));
  }
  pop();

  t += 0.01;
}

const hexagon = (posX, posY, radius) => {
  const rotAngle = 360 / 6;
  push();
  rotate(90);
  beginShape();
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle);
    vertex(thisVertex.x, thisVertex.y);
  }
  endShape(CLOSE);
  pop();
}

const pointOnCircle = (posX, posY, radius, angle) => {
  const x = posX + radius * cos(angle);
  const y = posY + radius * sin(angle);
  return createVector(x, y);
}