let shapeState = 0;
let startTime; // Define variable

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();
  rectMode(CENTER); // Centers squares
}

function draw() {
  background(220);
  drawShape();
  manageTime();
}

// Fixed function name to keyPressed (case sensitive)
function keyPressed() {
  updatestate();
}

function updatestate() {
  shapeState++;
  if (shapeState > 3) shapeState = 0;
}

function manageTime() {
  let elapsedTime = millis() - startTime;
  if (elapsedTime > 1000) {
    updatestate();
    startTime = millis();
  }
} // Removed the extra closing brace here

function drawShape() {
  let x = width / 2;
  let y = height / 2;
  switch (shapeState) {
    case 0:
      circle(x, y, 150);
      break;
    case 1:
      square(x, y, 150);
      break;
    case 2:
      triangle(x - 50, y + 50, x + 50, y + 50, x, y - 25);
      break;
    case 3:
      for (let i = 0; i < 30; i++) {
        let x2 = random(x - 80, x + 80);
        let y2 = random(y - 80, y + 80);
        line(x, y, x2, y2);
      }
      break;
  }
}
