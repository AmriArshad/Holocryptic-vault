class Boomer {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.text = "Ok Boomer";
  }

  show() {
    textSize(50);
    textFont(font);
    text(this.text, this.x, this.y);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.checkBounce();
  }

  checkBounce() {
    if (this.x + textWidth(this.text) > width || this.x <= 0) {
      this.xSpeed *= -1;
    } else if (this.y + textDescent() > height || this.y - textAscent() <= 0) {
      this.ySpeed *= -1;
    }
  }
}