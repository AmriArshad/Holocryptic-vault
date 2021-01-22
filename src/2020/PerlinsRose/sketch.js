// inspiration: https://thecodingtrain.com/CodingChallenges/036-blobby.html
// description: Using perlin noise to create different rose designs
// 19/12/2020

let yoff = 0;
let radius = 250;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(30);
}

function draw() {
  stroke(255, 0, 100, 100);
  strokeWeight(3);
  
  translate(width / 2, height / 2);
  rotate(yoff);
  
  let xoff = 0;
  for (var a = 0; a < TWO_PI; a += 1) {
    let offset = 3 * map(sin(xoff * yoff), 0, 1, -250, 250) / map(noise(xoff, yoff), 0, 1, -50, 50);
    let r = radius + offset;
    let x = r * sin(a);
    let y = r * cos(a);
    point(x, y);
    xoff += 0.01;
  }

  yoff += 0.01;

  if (frameCount == 2000) {
    noLoop();
  }
}