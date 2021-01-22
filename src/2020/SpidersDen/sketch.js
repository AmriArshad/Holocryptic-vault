// inspiration: https://p5js.org/examples/simulate-particles.html
// description: Spiders weaving their den
// 9/12/2020

let spiders = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < width / 10; i++) {
    spiders.push(new Spider());
  }
  background(10);
}

function draw() {
  for (let i = 0; i < spiders.length; i++) {
    spiders[i].move();
    if (frameCount == 700) {
      noLoop();
    }
    else {
      spiders[i].drawWebs(spiders.slice(i));
    }
  }
}