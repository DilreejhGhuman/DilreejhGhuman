
let gridspace = 50;
let goku;
let ki = 50;




function preload(){
  goku = loadImage("gokuWalking/STANDING (1).png");
  ki = loadImage("ki blast/ki.png");
 }

function setup() {
  createCanvas(4000, 4000);
 
  
}

function draw() {
  background(5,24,26);
  
  grid();
  image(goku, 0 ,0, 128, 192);
  kiblast();
  
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

function kiblast(){
  if ( mouseIsPressed === true && mouseButton === LEFT ){
    image(ki,0 ,0,128,100);

    


    
    
  }
}

