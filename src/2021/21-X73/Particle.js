class Particle {
  constructor() {
    this.x = random(width + 300, width);
    this.y = random(0, height);
    this.dx = random(1, 3);
    this.history = [];
  }

  update() {
    // move particle
    this.x -= this.dx;
    if (this.x < 0) {
      this.x = random(width + 300, width);
      this.y = random(0, height);
      this.dx = random(1, 2.5);
      this.history = [];
    }

    // add position to history for trail
    let v = createVector(this.x, this.y);
    this.history.push(v);

    if (this.history.length > 50) {
      this.history.splice(0, 1);
    }
  }

  draw() {
    // trail
    for (let i = 0; i < this.history.length; i++){
      stroke(255, map(i, 0, this.history.length, 0, 255));
      let pos = this.history[i];
      ellipse(pos.x, pos.y, map(i, 0, this.history.length, 0, 2));
    }

    // head
    stroke(255);
    ellipse(this.x, this.y, 2);
  }
}