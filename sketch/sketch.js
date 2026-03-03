// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function checkMulti(){
  strokeWeight(mouseX /10); // Fixed: strockweight -> strokeWeight
  stroke(255,0,0);           // Fixed: strock -> stroke
  let a = keyIsDown(65);     // Fixed: KeyIsDown -> keyIsDown
  let b = keyIsDown(66);
  let c = keyIsDown(67);
  let str = "a: " + a + " b: " + b + " c: " + c;
  textSize(40);
  text(str, 100, 300);
}

function draw() {
  background(220);
  checkMulti();
}


