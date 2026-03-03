// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//in python we write end at the bottom
//
//in p5.js we write "interactive"
//       setup()

function setup() {
  // Create the main canvas once in setup()
  createCanvas(windowWidth, windowHeight); 
}

function displayMouse() {
  // Draw the text at the mouse coordinates
  text("circle", mouseX, mouseY); 
  // Call the function to draw the circle
  drawCircleAtMouse(); 
}

function draw() {
  // Clear the background in each frame
  background(200); 
  // Call the display function
  displayMouse(); 
}

// Renamed function to avoid conflict with the built-in circle()
function drawCircleAtMouse() { 
  // The built-in circle() function draws a circle on the existing canvas.
  // We use mouseX and mouseY so it follows the cursor.
  circle(mouseX, mouseY, 25); 
  // The describe() function is for accessibility and should be used once per sketch.
  // It provides a text description of the canvas's content for screen readers.
  // We can place it in setup or call it once.
}
