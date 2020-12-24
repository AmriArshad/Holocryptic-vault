// inspiration: https://thecodingtrain.com/CodingChallenges/030-phyllotaxis.html
// inspiration: http://algorithmicbotany.org/papers/abop/abop-ch4.pdf
// description: Simulating phyllotaxis with an increasing divergence angle
// 23/12/2020

let n = 0; // ordering of a floret
let c = 3; // scaling parameter
let a; // divergence angle between two successive florets

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  a = 180 * (3 - sqrt(5)); // golden angle
}

function draw() {
  background(30);
  translate(width / 2, height / 2);
  rotate(frameCount * 0.01);

  for (let i = 0; i < n; i++) {
    let angle = i * a;
    let r = c * sqrt(i); // radius (distance from centre of the canvas to a floret)
    let x = r * cos(angle);
    let y = r * sin(angle);

    noStroke();
    fill(r % 256, angle % 100, r % 256, r % 100 + 50);

    ellipse(x, y, 5);
  }

  if (n < 5000) {
    n += 3;
  }
  a += 0.001;
}