// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let bubbleSize = 30;
let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  generatePoint();
  drawbubbles();
}

function drawbubbles(){
  for(let b of bubbles){
    let b = bubbles(i);
    circle(b.x,b.y,bubbleSize);
  }
}

function generatePoint(){
  for(let x = 0; x <= width; x+=bubbleSize){
    for(let y = 0; y <= height; y+=bubbleSize){
      print(x,y);
    
    
    }
  }
}
