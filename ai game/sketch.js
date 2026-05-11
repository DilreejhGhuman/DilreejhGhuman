let gameState = "MAP"; 
let player;
let grassPatches = [];
let enemyHP = 100;
let battleMessage = "";

// Image variables
let trumpImg, bidenImg;

function preload() {
  // Replace these URLs with actual direct image links
  trumpImg = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/100px-Donald_Trump_official_portrait.jpg');
  bidenImg = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/100px-Joe_Biden_presidential_portrait.jpg');
}

function setup() {
  createCanvas(600, 400);
  player = new Player();
  
  grassPatches = [
    { x: 100, y: 100, w: 120, h: 120 },
    { x: 350, y: 200, w: 150, h: 100 }
  ];
}

function draw() {
  if (gameState === "MAP") {
    drawMap();
  } else if (gameState === "BATTLE") {
    drawBattle();
  }
}

function drawMap() {
  background(120, 210, 120);
  
  fill(60, 160, 60);
  for (let g of grassPatches) {
    rect(g.x, g.y, g.w, g.h);
    if (player.x > g.x && player.x < g.x + g.w && player.y > g.y && player.y < g.y + g.h) {
      if (player.isMoving && random(1) < 0.02) {
        gameState = "BATTLE";
        enemyHP = 100;
        battleMessage = "Wild TRUMP appeared!";
      }
    }
  }

  player.update();
  player.show();
}

function drawBattle() {
  background(240);
  
  // Draw "Enemy" Pokemon (Trump)
  image(trumpImg, 400, 50, 120, 150);
  
  // Draw "Player" Pokemon (Biden)
  image(bidenImg, 50, 180, 120, 150);
  
  // Enemy HP Bar
  fill(200);
  rect(350, 30, 200, 20);
  fill(255, 50, 50);
  rect(350, 30, map(enemyHP, 0, 100, 0, 200), 20);
  
  // UI Box
  fill(255);
  stroke(0);
  rect(20, 280, 560, 100, 10);
  
  noStroke();
  fill(0);
  textSize(18);
  text(battleMessage, 40, 320);
  
  if (enemyHP > 0) {
    fill(220);
    rect(450, 310, 100, 40, 5);
    fill(0);
    text("DEBATE", 465, 335);
  } else {
    battleMessage = "TRUMP was defeated!";
    text("Press 'SPACE' to exit", 40, 350);
  }
}

function mousePressed() {
  if (gameState === "BATTLE" && enemyHP > 0) {
    if (mouseX > 450 && mouseX < 550 && mouseY > 310 && mouseY < 350) {
      enemyHP -= 20;
      battleMessage = "BIDEN used LOGIC! It's super effective!";
    }
  }
}

function keyPressed() {
  if (gameState === "BATTLE" && enemyHP <= 0 && key === ' ') {
    gameState = "MAP";
  }
}

class Player {
  constructor() {
    this.x = 50; this.y = 50;
    this.speed = 4;
  }
  update() {
    this.isMoving = false;
    if (keyIsDown(LEFT_ARROW))  { this.x -= this.speed; this.isMoving = true; }
    if (keyIsDown(RIGHT_ARROW)) { this.x += this.speed; this.isMoving = true; }
    if (keyIsDown(UP_ARROW))    { this.y -= this.speed; this.isMoving = true; }
    if (keyIsDown(DOWN_ARROW))  { this.y += this.speed; this.isMoving = true; }
  }
  show() {
    fill(0, 0, 255);
    rect(this.x, this.y, 20, 20);
  }
}