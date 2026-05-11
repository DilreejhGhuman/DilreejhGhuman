// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gui,b;
function setup() {
  createCanvas(300,300);
  gui = createGui();
  b = createButton("Button",50,50);
}

function draw() {
  background(220);
  drawGui();
  if(b.isPressed){
    print(b.label + "is pressed.");
  }
}
