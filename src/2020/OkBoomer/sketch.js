// 28/11/2020

let boomers = [];
let font;

function preload() {
  font = loadFont('assets/ComicSans.ttf')
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  boomers.push(new Boomer(10, 50, 5, 4)); 
}

function draw() {
  background(200);
  for (let boomer of boomers){
    boomer.show();
    boomer.move();
  }
}

function mousePressed(){
  boomers.push(new Boomer(mouseX, mouseY, random(-10,10), random(-10,10))); 
}