class Particle {
  constructor() {
    this.x = random(width / 4, width - width / 4);
    this.y = random(-250, height/2);
    this.dy = random(1, 2.5);
  }

  move() {
    this.y += this.dy;
  }

  draw() {
    rect(this.x, this.y, 5);
  }
}