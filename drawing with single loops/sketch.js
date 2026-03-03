// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let cX = 0;
function setup() {
createCanvas(windowWidth, windowHeight);
}
function movingball() {
cX += 5;
if (cX > width) cX = 0;
circle(cX, 50, 25);
}
function circleLine(y, size) {
let xStart = width * 0.1;
let xEnd = width * 0.9;
for (let x = xStart; x < xEnd; x += size) {
circle(x, y, size);
}
}

function grandientbackground(){
  let h = 15;
  let y = 0;

  noStroke();

  while(y < height){
    let value = map (y,0,height,0,255)
    fill (value,15, 200);
    rect(0, y, width, h);
    y += h;


  }



}
function draw() {
  background(200);
grandientbackground();
background(220);
movingball();
circleLine(height * 0.35, 30);
circleLine(height / 2, 50);
circleLine(height * 0.65, 80);
} 
