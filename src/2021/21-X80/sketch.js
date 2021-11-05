// 5/11/2021
// Overflow

let particles = [];

function setup() {
  createCanvas(1080, 1080);
  stroke(255);
  noFill();
  for (let i = 0; i < width/10; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0, 10);
  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].draw();
  }
  if (frameCount == 250) noLoop();
}