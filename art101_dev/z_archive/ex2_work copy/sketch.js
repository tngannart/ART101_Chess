let x, y;
let imgcb, imgclown,font;
let value = 0;

function preload(){
  imgcb = loadImage("asset/cardboard.png");
  imgclown = loadImage("asset/clown.png");
  font = loadFont('asset/runytunesrevisited.otf');
}

  function setup() {
    createCanvas(550,550);
    x = width/2;
    y = height/2;
    rectMode(CENTER);
    textFont(font); 
    imgSize = 40; 
}
function drawBackground() {
let gridSize = 50; // Size of each square
for (let x = 0; x < width; x += gridSize) {
  for (let y = 0; y < height; y += gridSize) {
    if ((x / gridSize + y / gridSize) % 2 == 0) {
      fill(0); // Black squares
    } else {
      fill(255); // White squares
    }
    rect(x, y, gridSize, gridSize);
    }
  }
}
  
function draw(){
    drawBackground();
  
  noStroke();
    fill (255,0,0);
  ellipse(x-10,y,100,100);  

    //mouse moving   
  fill(random(0,255),10,70);
    ellipse(mouseX,mouseY,20,20);
    stroke(0);
  
  textSize(40);
    textAlign (CENTER);
    fill(245,108,194);
    text("press 'o' to open", 100, 100);
    if ( (key == 'x' || key == 'X' || key == " "))  {  
      fill(random(255,0),0,255);
      ellipse(x-10,y,100,100);  
    }    
    //click the box to shake
if(mouseIsPressed == true){
  console.log("shaking a box"); 
  image(imgcb, random(150,180),random(150,180), 210, 210); 
}
if( keyIsPressed) {
  choice();
  }  
 
 }


function choice(){
  switch(key) {
        case 'o':  //open the box
      console.log("clown says helloo!!");
  tint(255,0,0,100);
    image(imgclown,x/2-20,random(120,160), 350, 350); 
  tint(0,200,255);
    image(imgclown,x/2-30,random(90,180), 350, 350); 
      noTint();
  textSize(100);
    textAlign(CENTER);
    fill(0, 255, 0);
    text("surprise??!!?",200, 100);
  break;
  }
}
  
function mouseMoved() {
    console.log("moving around");
    value += 2;
    if (value >= 255) {
      value = 0;
    }
}

function keyPressed() {
  if (key == 'e' || key == 'E') {
      console.log("e up");
      y -= 50; // Move up
}
  if (key == 'd' || key == 'D') {
    console.log("d down");
      y += 50; // Move down
}
  if (key == 's' || key == 'S') {
    console.log("s left");
      x -= 50; // Move left
}
  if (key == 'f' || key == 'F') {
    console.log("f right");
      x += 50; // Move right
  }
  if (key == 'u' || key == 'U') {
    console.log("u reset");
    x = width/2 ;
    y = height/2; 
  }
}

  