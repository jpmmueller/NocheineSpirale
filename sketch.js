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
  fontSize = 20;
  stepSize = 50;
  const rows = width / stepSize;
  const cols = height / stepSize;
  maxSteps = rows * cols;
  x = width / 2;
  y = height / 2;
  lineOffset = fontSize;
  // px = x - lineOffset;
  // py = y;
  // ax = x + stepSize;
  // ay = y;
}// --- setup() Ende ---

function draw() {
  if (mouseIsOn ){
    textAlign(CENTER,CENTER);
    noStroke();
    textSize(fontSize);
    if (isPrime(num) == true){
      fill(255,0,0);
      text(num, x, y);
    }else if(isPrime(num) == false){
      fill(255);
    }
    text(num, x, y);
    theMagic();
    push();
    stroke(255);
    strokeWeight(1);
    line(px,py,ax,ay);      
    pop();
  }// --- mouseIsOn() Ende ---
  // mouseIsOn = false;

  if(step > maxSteps){
    noLoop();
  }
}// --- draw() Ende ---

function mousePressed(){
  // mouseIsOn = true;//!mouseIsOn;
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
      px = x + lineOffset;
      x += stepSize;
      ax = x - lineOffset;
      ay = y;
      break;
    case 1:// nach oben
      py = y - lineOffset;
      y -= stepSize;
      ay = y + lineOffset;
      ax = x;
      break;
    case 2:// nach links
      px = x - lineOffset;
      x -= stepSize;
      ax = x + lineOffset;
      ay = y;
      break;
    case 3:// nach unten
      py = y + lineOffset;
      y += stepSize;
      ay = y - lineOffset;
      ax = x;
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

function isPrime(number){
  if (number == 1){
    return false;
  }
  for (let i = 2; i <= sqrt(number); i++){
    if ( number % i == 0)
    return false;
  }
  return true;
}


