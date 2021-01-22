class Spider {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.dx = random(-1, 1);
    this.dy = random(-1, 1);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x < 0 || this.x > width) this.dx *= -1;
    if (this.y < 0 || this.y > height) this.dy *= -1;
  }

  drawWebs(spiders) {
    for (let i = 0; i < spiders.length; i++) {
      if (dist(this.x, this.y, spiders[i].x, spiders[i].y) < 150) {
        stroke(220, 1);
        line(this.x, this.y, spiders[i].x, spiders[i].y);
      }
    }
  }
}