// 10PrintCircuit V2
// 05/09/22

const scale = 10;
const padding = 50;
let r1, r2, g1, g2, b1, b2;

function setup() {
  createCanvas(1080, 1080);
  noiseDetail(2, .75);
  rectMode(CENTER);
  noFill();

  drawLines();
}

// get random colour palette
const pickColours = () => {
  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);
};

// get random function for different outputs
const getRandomCombination = () => {
  const combinations = [
    () => noise(i * t, j * t + t),
    () => noise(i * t, sin(j * t)),
    () => noise(sin(i * t), j * t),
    () => noise(mag(i * t, j * t)),
    () => noise(mag(i + t, j * t)),
    () => noise(sin(i * j * t)),
    () => noise(sin(i * j + t), cos(i * t + t * j)),
    () => noise(mag(sin(i * t), j)),
    () => noise(mag(i * t, j)),
    () => noise(mag(i / j, j / i) * 2),
    () => noise(mag(i / j, i * t, j * t + t)),
    () => noise(mag(i / j, i * t + sin(j * t))),
    () => noise(mag(sin(i * t) + i / j, i * t + j * t) / 2),
  ];
  return random(combinations);
};

const drawLines = () => {
  background(0);
  // randomise noise seed to prevent same
  // pattern when re-rendering via click
  noiseSeed(random(Date.now()));
  // pick set of colours
  pickColours();

  // draw outer rectangle
  stroke(r2, g2, b2);
  drawingContext.setLineDash([]);
  rect(width / 2, height / 2, width - padding);

  // get random combination
  let combination = getRandomCombination();
  t = random(0.02, 0.04);

  // loop though points in grid
  for (i = padding; i < width - padding; i += scale) {
    for (j = padding; j < height - padding; j += scale) {

      // calculate colour and alpha
      const x = random(width);
      const y = random(height);

      const r = map(x, 0, width, r1, r2);
      const g = map(y, 0, width, g1, g2);
      const b = map(x, 0, width, b1, b2);

      // calculate noise from random combination
      let n = combination(i, j, t);

      // set line dash and colour
      drawingContext.setLineDash([2, 3]);

      // stroke settings
      if (n < 0.3) {
        drawingContext.setLineDash([n * 2, 1]);
        strokeWeight(3);
        stroke(r1, g1, b1);
      } else {
        strokeWeight(1.5);
        stroke(r, g, b);
      }

      // draw line
      if (n < 0.4) {
        line(i, j, i + scale, j + scale);
      } else if (n < 0.715) {
        line(i + scale, j, i, j + scale);
      } else {
        // draw rect or circle
        drawingContext.setLineDash([]);
        strokeWeight(2);
        stroke(r, g, b);
        if (random(1) < 0.3) rect(i, j, scale / 2);
        else circle(i, j, scale / 2);
      }
    }
  }
}

// render new piece on mouse click
function mouseClicked() {
  drawLines();
}