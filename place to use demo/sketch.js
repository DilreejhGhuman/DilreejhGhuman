// Basics of Coordinate Systems
//
// In Python, we wrote "run-to-completion"
//    (start at top, end at the bottom)
//
// In p5.js, we write "interactive"
//    setup() → runs once, at the start
//    draw() → runs over and over (after setup)
//               targeting 60 times per second
//  
//           screen is updated at bottom of draw

// ---- Global Variable Section -----
// we can DECLARE variables here
// we can INITIALIZE variables with 
//     simple data types (num, strings)
//    > don't have access to system variables
let circleX = 200;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  // repeats over and over (automatically) 60fps
  // aim to keep this TIDY
  background(100); //wipes the screen
  //drawTwoCircles();
  fiveCircles();
}

function fiveCircles(){

}

function drawTwoCircles(){
  
  
  //   R     G    B
  fill(200, 100, 20);
  stroke("#00FF00")
  //     x          y  dia
  circle(circleX, 100, 50);

  // SECOND CIRCLE
  fill("red");
  noStroke();  //noFill()
  circle(width/2, height/2, 200);
}