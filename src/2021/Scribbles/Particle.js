class Particle {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.history = [];
  }

  move() {
    // move particle
    this.x += random(-15, 15);
    this.y += random(-15, 15);

    // store history
    this.history.push(createVector(this.x, this.y));

    if (this.history.length > 75) this.history.splice(0, 1);

    // if particle hits edges
    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.x = random(0, width);
      this.y = random(0, height);
      this.history = []
    }
  }

  show() {
    // draw scribble

    noFill()
    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i < this.history.length; i++) {
      let col;
      if (dark) col = map(i, 0, this.history.length, 0, 255);
      else col = map(i, 0, this.history.length, 255, 0);
      stroke(col);
      vertex(this.history[i].x, this.history[i].y);
    }
    endShape();
  }
}