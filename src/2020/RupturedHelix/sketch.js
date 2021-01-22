// inspiration: https://www.pinterest.nz/pin/226939268711839789/
// description: A helix that pulses with "unstable energy"
// 14/12/2020

let angle = 0;
let offset = 50;

function setup() {
  createCanvas(1080, 1080);
}

function draw() {
  background(46, 41, 78);
  translate(width / 2, 10);

  for (let offset = 0; offset < height; offset += 50) {
    let size = map(sin(angle + 1 * offset), -1, 1, 10, 125);

    // diamonds
    push();
    stroke(0, 178, 202);
    strokeWeight(2);
    noFill();
    beginShape();
    vertex(0, size); // top
    vertex(size, 0); // right
    vertex(0, -size); // bottom
    vertex(-size, 0); // left
    endShape(CLOSE);
    pop();
    
    // stems
    push();
    stroke(154, 72, 208);
    strokeWeight(1);
    line(-size - 25, 0, size + 25, 0);
    pop();

    // central ellipses
    push();
    fill(30);
    strokeWeight(5);
    stroke(220, 0, 120, 150);
    ellipse(0, 0, size * noise(offset));
    pop();

    // outer ellipses
    push();
    fill(87, 98, 213);
    stroke(11, 57, 84);
    ellipse(-size - 25, 0, size * noise(offset + angle));
    ellipse(size + 25, 0, size * noise(offset + angle));
    pop();

    translate(random(-2, 2), 50);
  }

  angle += 0.05;
}