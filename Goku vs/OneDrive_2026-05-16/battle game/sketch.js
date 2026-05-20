
let gridspace = 50;
let goku;
let ki;


let gokuX = 0;
let gokuY = 0;
let kiblastX = gokuX;
let kiblastY = gokuY;

let kiTraveling = false;
let showKiblast = false;
//------------------------------------------------------------------------------------------------------------------
function preload(){
  goku = loadImage("gokuWalking/STANDING (1).png");
   ki = loadImage("ki blast/ki.png");
 }
//--------------------------------------------------------------------------------------------------------------------
function setup() {
  createCanvas(4000, 4000);
}

function draw() {
  background(5,24,26);
 // grid();
 
  image(goku, gokuX ,gokuY, 128, 192);
  blast();
  kiblast();
  kiattack();
  gokumovement();
  
}
//-------------------------------------------------------------------------------------------------------------------------
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
  if ( (keyIsPressed)){
    if (key == 'd'){
      gokuX += 6;

    }
  }

  if ( (keyIsPressed)){
    if (key == 'a'){
      gokuX -= 6;

    }
  }

  if ( (keyIsPressed)){
    if (key == 's'){
      gokuY+= 6;
    }
  }

  if ( (keyIsPressed)){
    if (key == 'w'){
      gokuY -= 6;
    }
  }
}
//------------------------------------------------------------------------------------------------------------------------------
function blast(){
  if(showKiblast === true){
    image(ki,kiblastX,kiblastY ,128,100);

  }
}

function kiblast(){
  if (mouseIsPressed === true && mouseButton === LEFT ){
    showKiblast = true;
    kiTraveling = true;
  }
}

function kiattack(){
  if (kiTraveling = true){
    kiblastX += 4;
    }
  }







 