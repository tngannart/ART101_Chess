let cx,cy;
let bgc;
let gridSize;
let pizza;
let bgcounter = 0;
let counter = 0;

function setup() {
    createCanvas(800, 800);
    background(255);
    bgc = color(20,1);
    // set up a assets folder then add an image.
    pizza = loadImage("assets/pizza.png")
    cx = width/2;
    cy = height/2;
    gridSize = 40;
    textSize(40);
    frameRate(10);   

}

function draw() {
    // optional fade trick
    //fill(bgc);
    //rect(9,9,width,height);
 
    // checking then triggering the keyChoice for drawing
    if( keyIsPressed) {  // true/false
       keyChoice();
    }

    noStroke();
    fill(255,255,0,120);
    rect(0, counter, width - random(50), 10);
    fill(255,0,255,120);
    rect(counter, 0, 10, height - random(50));
    
    
    
    console.log("bgcounter = " + bgcounter + " counter = " + counter );

    if (counter > height) {
    //background(bgcounter);
    bgcounter+=3;
    counter = 0;
    } else {
    counter+=20;
    }
}


function keyChoice() {
 // the 'key' maps what characters on the keyboard you can use.
 // switch statment
switch(key) {
case 'a':
  console.log("a left");  // left
  cx+= -gridSize;
  image(pizza,cx,cy,gridSize,gridSize);
  break;
case 'w':
  console.log("w up");  // up
  cy+= -gridSize; 
  image(pizza,cx,cy,gridSize,gridSize);
  break;
case 'd':
  console.log("d  right");  //right
  cx+= gridSize;
  image(pizza,cx,cy,gridSize,gridSize);
  break;
case 's':
  console.log("s back");  // back
  cy+= gridSize;
  image(pizza,cx,cy,gridSize,gridSize);
  break;
case 't':
    console.log("t text");  // text
    fill(255,0,0);
    text("Pizza!",cx,cy,200);
    break;
default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}
key = "";  // you can empty it so, it does not double trigger

}




        function draw() {
        
        }