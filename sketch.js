function setup() {
  createCanvas(640, 480);
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  noLoop();
}

function draw() {
  background(220);
  drawRectangle(width/2, height/2, 100);
  drawRectangle(300,300,50,45);
}

function drawRectangle(x,y,w,r = 0) {
  rotate(r);
  rect(x,y,w);
  rotate(-1 * r );
}