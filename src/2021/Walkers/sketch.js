// inspiration: https://www.generativehut.com/post/random-walkers
// Using perlin noise to visualise random walkers
// 1/01/2021

let walkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 2000; i++) {
    walkers.push(new Walker(width / 2, height));
  }
  background(0);
}

function draw() {
  for (let i = 0; i < walkers.length; i++) {
    if (!walkers[i].isOut()) {
      walkers[i].velocity();
      walkers[i].move();
      walkers[i].draw();
    }
  }
}