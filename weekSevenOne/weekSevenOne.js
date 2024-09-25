let colors;

var blue, red, green;

function setup() {
  createCanvas(windowWidth, windowHeight);
    background(randomColour());
  colors = [
    randomColour(),
    randomColour(),
    randomColour(),
    randomColour(),
    randomColour(),
    randomColour()
  ];
  frameRate(10);
}


function draw() {
  //fill(0,255, 0);
 // circle(mouseX, mouseY, 100);
  //fill(255, 0, 0)
  //square(width/2, height/2, 200);
  //fill(241, 34, 6);
  //rect(100, 20, 50, 300);
  for (let i = 0; i < 5; i++) {
  fill(randomColour());
  triangle(300, 300, 50, 300, 50, 75);
  }
  
  for (let i = 0; i < 5; i++) {
  fill(randomColour());
  triangle(300, 300, 50, 300, 300, 75);
  }
  
   for (let i = 0; i < 5; i++) {
  fill(randomColour());
  triangle(600, 300, 300, 300, 450, 75);
  }
}

function randomColour() {
  return color(random(255), random(255), random(255));
}

//function mousePressed() {s
  //blue = random(256);
  //red = random(256);
  //green = random(256);
  //background(blue, red, green);
  
//}
