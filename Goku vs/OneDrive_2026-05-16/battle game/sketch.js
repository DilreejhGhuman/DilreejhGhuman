let gridspace = 50;
let goku;

let ki;
let framerun = [];
let frameback;
let framestanding = [];
let gokushoots = [];

let currentframe = 0;
let gokuhealth = 10000;
let gokuX = 0;
let gokuY = 0;
let kiblastX = gokuX;
let kiblastY = gokuY;
let kiTraveling = false;
let showKiblast = false;


function preload(){
  ki = loadImage("ki blast/ki.png");
  
  framerun[0] = loadImage("gokuWalking/ichigostand.png");
  framerun[1] = loadImage("gokumoves/ready to move 4.png");
  framerun[2] = loadImage("gokumoves/ready to run 5.png");
  framerun[3] = loadImage("gokumoves/ready to run 6.png");
  framerun[4]   = loadImage("gokumoves/gokuback.png");

  gokushoots[0] = loadImage("goku shoots/gokushoots1.png");
  gokushoots[1] = loadImage("goku shoots/gokushoots2.png");
 
  
}


function setup() {
  createCanvas(4000, 4000);
}

function draw() {
  background(5,24,26);
  
  image(framerun[currentframe], gokuX, gokuY, 228, 192);
  print(gokuhealth);
  //image(ichigo, 100, 200, 228 , 192);
  
  
  blast();
  kiblast();
  kiattack();
  gokumovement();
  
}


function gokumovement(){


  if ( (keyIsPressed)){
    if (key == 'd'){
      gokuX += 10;

      if (frameCount% 6 === 0){
        if (currentframe < framerun.length -1 ){
          currentframe++;
        }
  

      }
     
    }
    
  }
  
  
  if ( (keyIsPressed)){
    
    if (key == 'a'){
      gokuX -= 6;
      framerun[currentframe = 4];


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
    if (currentframe < gokushoots.length -1 ){
      currentframe++;
    }

  }
}

function kiattack(){
  if (kiTraveling === true){
    kiblastX += 12;
    }
  }
  if (frameCount% 2 === 0){
    
  if (currentframe <gokushoots.length -1 ){
    currentframe++;
  }


  }




