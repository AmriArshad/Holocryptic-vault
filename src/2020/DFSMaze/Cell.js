class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;
  }

  // return available paths if any
  checkNeighbors() {
    let neighbors = [];
    let top, right, bottom, left;

    // check to see if the desired index is valid
    if (!(typeof grid[this.i][this.j - 1] === 'undefined')) {
      top = grid[this.i][this.j - 1];
    }
    if (!(typeof grid[this.i + 1] === 'undefined')) {
      right = grid[this.i + 1][this.j];
    }
    if (!(typeof grid[this.i][this.j + 1] === 'undefined')) {
      bottom = grid[this.i][this.j + 1];
    }
    if (!(typeof grid[this.i - 1] === 'undefined')) {
      left = grid[this.i - 1][this.j];
    }

    // push valid neighbors to neighbors array
    if (top && !top.visited) neighbors.push(top);
    if (right && !right.visited) neighbors.push(right);
    if (bottom && !bottom.visited) neighbors.push(bottom);
    if (left && !left.visited) neighbors.push(left);

    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length))
      return neighbors[r];
    } else return undefined;
  }

  // display walls
  show() {
    let x = this.i * w;
    let y = this.j * w;

    if (this.visited) {
      noStroke();
      fill(this.i + this.j % 120 + 150, 360, 360); // blue
      // fill(this.i + this.j % 100 + 250, 360, 360); // purple
      rect(x, y, w, w);
      stroke(0);
      strokeWeight(5);
    } else {
      stroke(200);
      strokeWeight(0.1);
    }

    if (this.walls[0]) {
      line(x, y, x + w, y); // top
    }
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w); // right
    }
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w); // bottom
    }
    if (this.walls[3]) {
      line(x, y + w, x, y); // left
    }
  }

  // highlight square
  highlight() {
    let x = this.i * w;
    let y = this.j * w;
    noStroke();
    fill(0);
    rect(x, y, w, w);
  }
}