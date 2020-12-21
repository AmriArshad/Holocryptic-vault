//  inspiration: https://thecodingtrain.com/CodingChallenges/076-10print.html
// 10 PRINT CHR$(205.5+RND(1)); : GOTO 10
// 21/12/2020

let x = 0;
let y = 0;
let size = 25;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(30);
  stroke(200);
  strokeWeight(3);
  rectMode(CENTER);
}

function draw() {
  let r = random(1);

  if (r < 0.3) {
    line(x, y, x + size, y + size);
  }
  else if (r < 0.9) {
    line(x, y + size, x + size, y);
  } else {
    push();
    strokeWeight(1);
    noFill();
    if (random(1) < 0.5) {
      circle(x, y, size / 2);
    }
    else {
      rect(x, y, size / 2);
    }
    pop();
  }

  x += size;
  if (x > width) {
    x = 0;
    y += size;
  }

  if (y > height) {
    noLoop();
  }
}