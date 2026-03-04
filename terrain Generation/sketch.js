// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}

function generateTerrain(){
  for(let x = 0; x < width; x+=rectWidth){
    let rectHeight = random(0, height*.75);

    rect(x,height,rectWidth,-rectHeight);
  }
}

function draw() {
  

 
  background(220);
  generateTerrain();
  frameRate(10);
}
