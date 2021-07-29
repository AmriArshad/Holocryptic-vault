// Random particle flow
// 29/7/21

let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();
  for (let i = 0; i < width; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0, 10);
  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].draw();
  }
}