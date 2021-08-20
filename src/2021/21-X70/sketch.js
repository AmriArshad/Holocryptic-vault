// inspiration: https://scrapbox.io/hisadan/%E3%81%A4%E3%81%B6%E3%82%84%E3%81%8DProcessing_(2021%2F8%2F18)
// 21/8/21
// Black hole Regurgitation

let n = 999;
let a = [];
let r = 0;

function setup() {
  createCanvas(1080, 1080, WEBGL);
  stroke(255);
  
  for (let i = 0; i < n * 2; i++) {
    a[i] = random(width) - width / 2;
  }
}

function draw() {
  background(0);

  for (let i = 0; i < n * 2 - 1; i++) {
    push();
    translate(a[i], a[i + 1], 300 * sin(mag(a[i], a[i + 1]) / 75 - r));
    point(0, 0);
    pop();
  }

  r += .1;
}