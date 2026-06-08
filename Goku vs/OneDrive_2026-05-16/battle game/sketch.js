let gridspace = 50;
let goku;
  //286% 297%
let ki;
let framerun = [];
let frameback;
let framestanding = [];
let gokushoots = [];

let currentframe = 0;

let gokuX = 0;
let gokuY = 0;
let kiblastX = gokuX;
let kiblastY = gokuY;
let kiTraveling = false;
let showKiblast = false;


let Ichigorun = [];



function preload(){
  ki = loadImage("ki blast/ki.png");
  
  framerun[0] = loadImage("gokuWalking/STANDING (1).png");
  framerun[1] = loadImage("gokumoves/ready to move 4.png");
  framerun[2] = loadImage("gokumoves/ready to run 5.png");
  framerun[3] = loadImage("gokumoves/ready to run 6.png");
  framerun[4]   = loadImage("gokumoves/gokuback.png");

  gokushoots[0] = loadImage("goku shoots/gokushoots1.png");
  gokushoots[1] = loadImage("goku shoots/gokushoots2.png");


  Ichigorun[0] = loadImage("ichigorun/ichigorun.png");
  Ichigorun[1] = loadImage("ichigorun/ichigorun2.png");
  Ichigorun[2] = loadImage("ichigorun/ichigorun3.png");
  Ichigorun[3] = loadImage("ichigorun/ichigorun4.png");
  Ichigorun[4] = loadImage("ichigorun/ichigorun5.png");
  Ichigorun[5] = loadImage("ichigorun/ichigorun6.png");
}


function setup() {
  createCanvas(4000, 4000);
}

function draw() {
  background(5,24,26);

  healthbargoku();
  healthbarIchigo();
 
  
  image(framerun[currentframe], gokuX, gokuY, 128, 192);
  ichigo();
  image(Ichigorun[currentframe], 100, 100, 228,192);

 
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
function ichigo(){
  if (Ichigorun% 5 === 0){
    if (currentframe < Ichigorun.length -1 ){
      currentframe++;
    }
  }
}

function healthbargoku(){
  let gokuhealth = 10000;
  
  fill (83,166,195);
  rect(1680,880,200,25);

}


function healthbarIchigo(){
  let ichigohealth = 30000;
  fill (237,114,0);
  rect(425,40,1000,25);

}





