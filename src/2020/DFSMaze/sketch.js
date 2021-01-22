// inspiration: https://thecodingtrain.com/CodingChallenges/010.1-maze-dfs-p5.html
// inspiration: https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_backtracker
// An iterative implementation of the depth-first search maze generation algorithm
// 25/12/2020

let cols, rows, current, initial;
let w = 25;
let grid = [];
let stack = [];

function setup() {
  createCanvas(1080, 1080);
  colorMode(HSB);
  cols = floor(width / w);
  rows = floor(height / w);

  // set up grid in 2D array
  for (let i = 0; i < rows; i++) {
    grid[i] = [];
    for (let j = 0; j < cols; j++) {
      let cell = new Cell(i, j);
      grid[i].push(cell);
    }
  }

  // choose centre cell as initial
  let a = floor(grid.length / 2);
  let b = floor(grid[a].length / 2);
  stack.push(grid[a][b]);

}

function draw() {
  push();
  colorMode(RGB);
  background(30);
  pop();
  
  // draw grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let cell = new Cell(i, j);
      grid[i][j].show();
    }
  }

  // DFS iterative implementation (wikipedia)
  if (stack.length > 0) {
    current = stack.pop();
    current.visited = true;
    current.highlight();
    next = current.checkNeighbors();
    if (next) {
      stack.push(current);
      removeWalls(current, next);
      current = next;
      stack.push(current);
    }
  }
}

// check which walls to remove and remove them
function removeWalls(a, b) {
  let x = a.i - b.i;
  let y = a.j - b.j;

  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }

  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}