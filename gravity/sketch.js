
let gridspace = 50;

function setup() {
  createCanvas(4000, 4000);
 
  
}

function draw() {
  background(0);
  grid();
}

function grid(){
  for (let x = 0; x < width ; x += gridspace){
    stroke(255)
    line(x, 0, x, height);
  }
  for (let y = 0; y < height ; y += gridspace){
    stroke(255);
    line(0, y, width, y);
}
}

function interface(){
  new button (type("box"),0,0);
  
}


