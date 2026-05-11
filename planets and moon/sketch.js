// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let myPlanet; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  noStroke();

  background(0);
  myPlanet.display();
}

function mousePressed(){
  if(keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet(width/2, height/2);
  }
  else myPlanet.createMoon();
}

function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.y = mouseY;
    myPlanet.x = mouseX
  }
}


class Planet{
  
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.s = 100;
    this.moons = [];
  }


  createMoon(){
    this.moons.push(new Moon());

  }

 

  display(){
    circle(this.x, this.y, this.s);
    for (let m of this.moons){
      m.update(this.x, this.y);
      
    }


  }
}

class Moon{
  constructor(){
    this.speed = random(5,5);
    this.angle = 0;
    this.orbetRadius = random(200,200);
    this.s = random(10,50);
  }

  move(){
    this.angle += this.spee;
  }

  display(x,y){
    push();
    translate(x,y);
    rotate(this.angle);
    rect(this.orbetRadius,0, this.s);
    pop();
  }

  update(x,y){
    this.move();
    this.display(x,y);
  }



}