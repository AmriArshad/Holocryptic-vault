// 
// 14/02/2021

let lines1 = [];
let lines2 = [];
const num = 20;

function setup() {
  createCanvas(1080, 1080);
  // set up initial position of lines
  for (let i = 0; i < num; i++) {
    lines1[i] = height / num * i;
    lines2[i] = height / num * i;
  }
}

function draw() {
  background(0, 30);

  // drawwing first set of lines
  for (let i = 0; i < num; i++) {
    strokeWeight(map(lines1[i], 0, height, 10, 1));
    stroke(255);

    line(0, lines1[i], width, lines1[i]);

    lines1[i] += 0.5;
    if (lines1[i] > height) lines1[i] = 0;
  }

  // drawing side triangles
  stroke(0);
  strokeWeight(1);
  triangle(width / 2, height, width - width / 4, height / 2, width, height);
  triangle(width / 2, height, width / 4, height / 2, 0, height);

  // drawing second set of lines
  for (let i = 0; i < num; i++) {
    strokeWeight(map(lines2[i], 0, height, 1, 25));
    stroke(255);

    line(0, lines2[i], width, lines2[i]);
    
    lines2[i] -= 0.5;
    if (lines2[i] < 0) lines2[i] = height;
  }

  // drawing two triangles on the sides so that the lines appear in a triangle shape
  fill(0);
  stroke(0);
  strokeWeight(1);
  triangle(0, 0, width / 2, 0, 0, height);
  triangle(width, 0, width / 2, 0, width, height);
}