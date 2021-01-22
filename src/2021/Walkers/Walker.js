class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.ppos = createVector(x, y);
    this.vel = createVector(random(-5, 5), random(-5, 5));
  }
  isOut() {
    return (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height);
  }
  velocity() {
    this.vel.add(map(noise(this.pos.x * 0.003, this.pos.y * 0.003, millis() * 0.001), 0, 1, -3, 3), map(noise(this.pos.y * 0.003, this.pos.x * 0.003, millis() * 0.001), 0, 1, -0.7, 0.5))
  }
  move() {
    this.pos.add(this.vel)
  }
  draw() {
    stroke(map(this.pos.x, 0, width, 0, 255), map(this.pos.y, 0, height, 0, 255), 255, 75);
    line(this.pos.x, this.pos.y, this.ppos.x, this.ppos.y);
    this.ppos.x = this.pos.x;
    this.ppos.y = this.pos.y;
  }
}