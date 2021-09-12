// Invasion
// 12/9/21

let yoff = 0;
let particles = [];

function setup() {
  createCanvas(1080, 1080);
  for (let i = 0; i < width / 30; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0);

  // ships
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }

  // portal
  push();
  fill(0);
  stroke(255, 100);
  translate(-200, height / 2);
  for (let i = 0; i < 5; i++) {
    push();
    beginShape();
    let xoff = 1;
    for (var a = 0; a < TWO_PI; a += 0.01) {
      let offset = map(noise(xoff, yoff / 10), 0, 1, 25, 100);
      let r = 500 + offset;
      let x = r * cos(a + offset);
      let y = r * sin(a + offset);
      vertex(x, y);
      xoff += 0.01;
    }
    endShape();
    pop();
  }
  pop();

  // placeholder ellipse
  push();
  fill(0);
  noStroke();
  ellipse(-200, height / 2, 1000);
  pop();

  yoff += 0.005;
}