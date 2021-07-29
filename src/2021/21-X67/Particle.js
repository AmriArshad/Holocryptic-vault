class Particle {
  constructor() {
    this.x = random(0, width);
    this.y = random(-height / 2, 0);
    this.dy = random(1, 2.5);
  }

  move() {
    this.y += this.dy;
    if (this.y > height) {
      this.x = random(0, width);
      this.y = random(-50, -10);
      this.dy = random(1, 2.5);
    }
  }

  draw() {
    ellipse(this.x, this.y, 1);
  }
}