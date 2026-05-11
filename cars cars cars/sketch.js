// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myVechials = new Vehicle(width/2, height/2);
  
}

function draw() {
  background(0);
  myVechials.display();
  
 
}




 class Vehicle{
  constructor(){
    this.speed = random(5,5);
    this.angle = 0;
    this.orbetRadius = random(200,200);
    this.s = random(10,50); 


  }

  move(){
    this.angle += this.speed;
  }

  display(x,y){
    push();
    translate(x,y);
    rotate(this.angle);
    rect(this.orbetRadius,0, this.s);
    pop()

   
  }

  update(x,y){
    this.move();
    this.display(x,y);
  }


 }








 