// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(400, 400); //
}

function draw() {
  background(220); //

  // The for loop syntax is corrected to use semicolons
  for (let i = 0; i <= 400; i += 40) {
    // Draws circles diagonally from top-left
    circle(i, i, 20); //

    // Corrected second circle function: using 'i' for the x-coordinate,
    // a fixed y-coordinate of 400 (bottom edge), and a fixed diameter
    circle(i, 400-i, 20);
  }
}