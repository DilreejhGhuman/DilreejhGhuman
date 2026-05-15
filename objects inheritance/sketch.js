// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let object = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i <200; i++){
    object.push(new AnimatedObjects(random(width),random(height)));
  }
}

function draw() {
  background(220);
  for(let o of object){
    o.move();
    o.display();
  }

}
class AnimatedObjects{
  constructor(x,y){
    this.x = x; this.y = y;
    this.size = 6;

  }


  move(){
    this.x += random(-2,2);
    this.y += random(-2,2);
  }

  display(){
    strokeWeight(this.size);
    point(this.x, this.y);

  }
}