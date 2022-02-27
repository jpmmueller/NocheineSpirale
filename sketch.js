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
  background(50,150,255);
  stepSize = 4;//fontSize / 1.5;
  fontSize = ((stepSize * 2));
  const rows = width / stepSize;
  const cols = height / stepSize;
  maxSteps = rows * cols;
  x = width / 2;
  y = height / 2;
  lineOffset = fontSize;
}// --- setup() Ende ---

function draw() {
  if (mouseIsOn ){
    textAlign(CENTER,CENTER);
    noStroke();
    textSize(fontSize);
    if (isPrime(num) == true){
      // noStroke();
      fill(255);
      circle(x, y, fontSize / 2);
      // text(num, x, y);
    }
    // stroke(255);
    // strokeWeight(0.5);
    console.log(num);
    console.log(isPrime(num));
    // line(x, y, px, py);
    theMagic();
    num++;
    step++;
  }// --- if mouseIsOn() Ende ---
  // mouseIsOn = false;

  if(step > maxSteps){
    noLoop();
  }
}// --- draw() Ende ---

function mousePressed(){
  // mouseIsOn = true;
  mouseIsOn = !mouseIsOn;
}// --- mousePressed() Ende ---

function theMagic(){
  px = x;
  py = y;
  switch (richtung){
    case 0:// nach rechts
      x += stepSize;
      break;
    case 1:// nach oben
      y -= stepSize;
      break;
    case 2:// nach links
      x -= stepSize;
      break;
    case 3:// nach unten
      y += stepSize;
      break;
  }
  if (step % stepsPerSide == 0){// wenn eine Seitenlänge gestept wurde, dann abbiegen.
    richtung = (richtung + 1) % 4;// Mod 4 bleibt immer zwischen 0 und 4.
    turnCounter++;
    if (turnCounter % 2 == 0){// wenn 2 x abgebogen wurde, dann sollen die Seitenlängen um 1 erhöht werden.
      stepsPerSide++;
    }
  }
}// --- theMagic() Ende ---

function isPrime(number){
  if (number == 1){return false;}
  for (let i = 2; i <= sqrt(number); i++){
    if ( number % i == 0){
      return false;
    }
  }
  return true;
}// --- isPrime() Ende ---


