// inspiration: https://www.pinterest.nz/pin/226939268711839829/ 
// 2/12/2020

let angle = 0;
let size = 100;

function setup() {
  createCanvas(1080, 1080);
}

function draw() {
  background(200);
  stroke(200);
  strokeWeight(5);
  translate(width / 2 + 175, height / 2 - 50);

  for (let i = 0; i < 15; i++) {
    fill(map(sin(angle + i / 2), -1, 1, 125, 50)); // greyscale
    // fill(map(sin(a + i / 2), -1, 1, 175, 50), 0, 120); // blue - pink
    triangle(-size, size, 0, -size, size, size);
    translate(-25, 0);
  }

  angle += 0.1; //speed of wave
}
