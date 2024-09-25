var pointSize = 120;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  frameRate(80);
}

function draw() {
  //background(255, 255, 255, 24);
    //text('[CLICK HERE]', mouseX, mouseY);
  //textSize(20);
}

function mousePressed() {
  text('[CLICK HERE]', mouseX, mouseY);
  
}

function keyTyped () {
  text(key, mouseX, mouseY);
}

function keyPressed () {
  if (keyCode === LEFT_ARROW) {
    pointSize-=10;
  }
  textSize(pointSize);
   if (keyCode === RIGHT_ARROW) {
    pointSize+=10;
  }
  textSize(pointSize);
}
