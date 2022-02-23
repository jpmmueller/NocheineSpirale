let mouseIsOn = false;
let x,y;
let ax,ay;
let px,py;
let stepSize;
let num = 1;
let step = 1;
let state = 1;
let turnCounter = 0;
let fontSize;
let lineOffset;
let maxSteps;

function setup() {
  createCanvas(500, 500);
  background(0);
  stepSize = 50;
  const rows = width / stepSize;
  const cols = height / stepSize;
  maxSteps = rows * cols;
  fontSize = 45;
  x = width / 2;
  y = height / 2;
  lineOffset = fontSize - 20;
  px = x;
  py = y;
  ax = x + stepSize;
  ay = y;
}// --- setup() Ende ---

function draw() {
  if (mouseIsOn ){
    textAlign(CENTER,CENTER);
    noStroke();
    textSize(fontSize);
    fill(255);
    text(num, x, y);
    if (num > 0){
      push();
      stroke(255);
      strokeWeight(1);
      line(px,py,ax,ay);      
      pop();
    }
    theMagic();
  }// --- mouseIsOn() Ende ---
  mouseIsOn = false;

  if(step > maxSteps){
    noLoop();
  }
}// --- draw() Ende ---

function mousePressed(){
  mouseIsOn = true;
}// --- mousePressed() Ende ---

function theMagic(){
  if (step % 2 == 0){
    px = ax;
    py = y;
    y -= stepSize;
    ay = y;
  }else{
    px = ax;
    py = ay;
    x += stepSize;
    ax = x;
  }

  num++;
  step++;

}// --- theMagic() Ende ---


