// description: Animated bits that shift in colour and value
// 28/11/2020

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(5);
}

function draw() {
  background(20);
  for (let y = 0; y <= height; y += 25) {
    for (let x = 5; x <= width; x += 25) {
      push();
      translate(x, y);
      fill(random(255), random(255), random(255), random(255));
      text(round(random(0, 1)), 0, 0);
      pop();
    }
  }
}