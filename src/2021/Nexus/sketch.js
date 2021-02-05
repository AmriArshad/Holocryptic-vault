// inspiration: https://p5js.org/examples/simulate-particles.html
// A simple particle system
// 5/02/2021

let particles = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < width / 10; i++) {
    particles.push(new Particle());
  }
  stroke(255);
  noFill();
}

function draw() {
  background(0, 75);
  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].draw(particles.slice(i));
  }
}