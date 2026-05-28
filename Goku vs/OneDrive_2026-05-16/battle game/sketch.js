let gridspace = 50;
let goku;
let ki;
let framerun = [];
let currentframe = 0;
let gokuX = 0;
let gokuY = 0;
let kiblastX = gokuX;
let kiblastY = gokuY;
let kiTraveling = false;
let showKiblast = false;











function preload(){
  framerun[0] = loadImage("gokuWalking/STANDING (1).png");
  ki = loadImage("ki blast/ki.png");
  framerun[1] = loadImage("gokumoves/ready to move 1.png");
  framerun[2] = loadImage("gokumoves/ready to move 2.png");
  framerun[3] = loadImage("gokumoves/ready to move 3.png");
  framerun[4] = loadImage("gokumoves/ready to move 4.png");
  framerun[5] = loadImage("gokumoves/ready to run 5.png");
  framerun[6] = loadImage("gokumoves/ready to run 6.png");

  
 }


function setup() {
  createCanvas(4000, 4000);
}

function draw() {
  background(5,24,26);
  image(framerun[6], 700 ,100, 128, 192);
  image(framerun[currentframe], gokuX, gokuY, 128, 192);
  blast();
  kiblast();
  kiattack();
  gokumovement();
  
}


function gokumovement(){
  if ( (keyIsPressed)){
    if (key == 'd'){
      gokuX += 6;
      if (currentframe <framerun.length -1 ){
        currentframe++;
      }

    }
    
  }
  if ((keyIsPressed)){
    if (key == 'd'){

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
  if (kiTraveling === true){
    kiblastX += 12;
    }
  }




