// 25/6/21
// KatakanaShift

function setup() {
  createCanvas(1080, 1080);
  textSize(20);
  frameRate(5);
}

function draw() {
  background(0);
  for (let y = 25; y <= height; y += 50) {
    for (let x = 5; x <= width; x += 50) {
      push();
      translate(x, y);
      fill(255, random(255));
      text(String.fromCharCode(0x30A0 + floor(random(0, 97))), 0, 0);
      pop();
    }
  }
}