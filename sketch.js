function setup() {
  createCanvas(640, 480);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(220);
  drawRectangle(width/2, height/2, 100);
}

function drawRectangle(x,y,w,r = 0) {
  push(); //store current state
  translate(x,y); //move canvas to where we want to draw
  rotate(r); //rotate canvas
  rect(0,0,w); //draw rect at origin
  pop(); //restore the previous state
}