
let gridspace = 50;
let goku;




function preload(){
  goku = loadImage("gokuWalking/STANDING (1).png");
 }

function setup() {
  createCanvas(4000, 4000);
  gokumovement();
 
  
}

function draw() {
  background(5,24,26);
  grid();
  image(goku, 0 ,0, 128, 192);
  
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

function gokumovement(){
  if (w (keyIsPressed)){
    goku (x =+ 50);
  }

}

