// Random vs Noise
// Mr. Scott
// Feb 27, 2026
//
// Looking at unpredictability
// Specifically the difference between
// Uniformly distributed numbers
// and Perlin Noise
//
// Challenge: use noise() to make/use a
// ySpeed variable. Each frame, add 
// ySpeed to y2;
//


// Global Variables
let d1, d2;
let minSize = 5;  let maxSize = 200;
let x1, x2, y1, y2;

// variables for using noise()
let noiseTime = 5, noiseSpeed = 0.02;
//"noiseSpeed" controls how connected
//the random noise() values are





function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width * 0.3;  y1 = height * 0.5;
  x2 = width * 0.7;  y2 = height * 0.5;
  //  frameRate(3);
}

let ySpeed = 0; //range:  -5 and + 5
let yNoiseTime = 10, yNoiseSpeed = 0.1;

function draw() {
  background(0);
  // randomSeed(703); //actual value
  // stars();
  ySpeed = noise(yNoiseTime);
  ySpeed = map(ySpeed,0,1,-5,5);
  y2 += ySpeed;
  yNoiseTime += yNoiseSpeed;
  //randomCircle();
  noiseCircle();
}



function noiseCircle(){
  //draw a fixed circle with randomly
  //changing (but smooth!) diameter
  fill(200,150,50);
  d2 = noise(noiseTime);//yields value between 0-1
  d2 = map(d2, 0, 1, minSize, maxSize);
  circle(x2, y2, d2);
  noiseTime += noiseSpeed;
}

function randomCircle(){
  //draw a fixed circle with random()ly
  //changing diameter
  fill(120,180,60);
  d1 = random(minSize, maxSize);
  circle(x1,y1,d1);
}

function stars() {
  //use random() to generate 100 stars
  //[alt][shft][F] - autoformat
  fill(255);
  for (let i = 0; i < 100; i++) {
    let x = random(0, width);
    let y = random(0, height);
    circle(x, y, 6);
  }

}