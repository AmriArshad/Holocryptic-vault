const SIZE = 150;
const SIDES = 6;

const SCALE = 215;

let PALLETE = [];
let CRYSTALS = [];

function setup() {
  createCanvas(1080, 1080);

  PALLETE = [
    color(255, 52, 154), // pink
    color(4, 0, 152), // blue
  ]

  angleMode(DEGREES);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  background(255);

  for (let i = SCALE; i < width - SCALE; i += SCALE) {
    for (let j = SCALE; j < height - SCALE; j += SCALE) {
      CRYSTALS.push(makeCrystal({ x: i, y: j }));
    }
  }

  CRYSTALS.forEach(crystal => {
    drawCrystal(crystal);
  });
}