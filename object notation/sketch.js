

let ball;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // FIXES: Added missing comma, changed ; to :
  ball = {
    x: 300,
    y: 400,
    size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: 5,
    timeY: 5,
    timeOff: 0.08
  };
}

function moveBall(b) {
  let dx = noise(b.timeX);
  // FIXES: Removed quotes around numbers in map
  dx = map(dx, 0, 1, -5, 5);
  let dy = noise(b.timeY);
  // FIXES: Removed quotes around numbers, changed : to ;
  dy = map(dy, 0, 1, -5, 5);
  
  b.timeX += b.timeOff;
  b.timeY += b.timeOff;
  b.x += dx;
  b.y += dy; // FIX: Fixed typo (was :)

  if(b.x <0) b.x = width;
  else if(b.x > width) bix =0;

  if(b.y < 0)b.y = height;
  else if(b.y > height) b.y = 0
  
  fill(b.c);
  circle(b.x, b.y, b.size);
}

function draw() {
  background(220);
  // FIX: Passed the ball object to the function
  moveBall(ball);
}

