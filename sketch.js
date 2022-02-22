let mouseIsOn = false;
let x,y;
let px,py;
let stepSize;
let num = 1;
let step = 1;
let state = 1;
let turnCounter = 0;

function setup() {
  createCanvas(500, 500);
  background(0);
  x = width / 2;
  y = height / 2;
  stepSize = 70;

}// setup() Ende ---

function draw() {
  if (mouseIsOn){
    textAlign(CENTER,CENTER);
    noStroke();
    textSize(45);
    fill(255);
    text(num, x, y);
    if (num > 1){
      push();
      stroke(255);
      strokeWeight(1);
      line(px,py,x-(stepSize/3),y);
      px = x+(stepSize/3);
      py = y;
      pop();
    }
    theMagic();
  }// --- mouseIsOn() Ende ---
  mouseIsOn = false;
}// draw() Ende ---

function mousePressed(){
  mouseIsOn = true;
}// mousePressed() Ende ---

function theMagic(){

  x += stepSize;
  num++;
  step++;
}

