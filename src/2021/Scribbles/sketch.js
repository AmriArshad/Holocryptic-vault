// inspiration: https://youtu.be/vqE8DMfOajk
// Triangular scribbles on a canvas
// Click anywhere to switch to dark mode and back
// 12/01/2021

let particles = [];
let dark = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < width / 40; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  if (dark) background(0);
  else background(255);

  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].show();
  }
}

function mousePressed() {
  dark = !dark;
}