let mouseIsOn = false;
let x,y;
let ax,ay;
let px,py;
let stepSize;
let num = 1;
let step = 1;
let stepsPerSide = 1;
let richtung = 0;
let turnCounter = 0;
let fontSize;
let lineOffset;
let maxSteps;

function setup() {
  createCanvas(500, 500);
  background(0);
  stepSize = 100;
  const rows = width / stepSize;
  const cols = height / stepSize;
  maxSteps = rows * cols;
  fontSize = stepSize / 4;
  x = width / 2;
  y = height / 2;
  lineOffset = fontSize - 20;
  px = x - lineOffset;
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
    // if (num > 0){
      push();
      stroke(255);
      strokeWeight(1);
      line(px,py,ax,ay);      
      pop();
    //  }
    theMagic();
  }// --- mouseIsOn() Ende ---
  // mouseIsOn = false;

  if(step > maxSteps){
    noLoop();
  }
}// --- draw() Ende ---

function mousePressed(){
  mouseIsOn = !mouseIsOn;
}// --- mousePressed() Ende ---

function theMagic(){
  // if (num <= 2){
  //   stepsPerSide = 3;
  // }else{
  //   stepsPerSide = 2;
  // }
  px = x;
  py = y;
  switch (richtung){
    case 0:// nach rechts
      x += stepSize;
      ax = x - lineOffset;
      break;
    case 1:// nach oben
      y -= stepSize;
      ay = y + lineOffset;
      break;
    case 2:// nach links
      x -= stepSize;
      ax = x + lineOffset;
      break;
    case 3:// nach unten
      y += stepSize;
      ay = y - lineOffset;
      break;
  }
  if (step % stepsPerSide == 0){// wenn eine Seitenlänge gestept wurde, dann abbiegen.
    richtung = (richtung + 1) % 4;// Mod 4 bleibt immer zwischen 0 und 4.
    turnCounter++;
    if (turnCounter % 2 == 0){// wenn 2 x abgebogen wurde, dann sollen die Seitenlängen um 1 erhöht werden.
      stepsPerSide++;
    }
  }
  step++;
  num++;

}// --- theMagic() Ende ---


