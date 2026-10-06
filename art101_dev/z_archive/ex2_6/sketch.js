let cx,cy;
let bgc;
let gridSize;
let pizza;
let pineapple;

function setup() {
    createCanvas(800, 800);
    background(255);
    bgc = color(20,1);
    // set up a assets folder then add an image.
    pizza = loadImage("assets/pizza.png");
    pineapple = loadImage("assets/pineapple.png");
    cx = width/2;
    cy = height/2;
    gridSize = 40;
}

function draw() {
    // optional fade trick
    //fill(bgc);
    //rect(9,9,width,height);
 
    // checking then triggering the keyChoice for drawing

    //global properties (key)

//     mouseX
//     mouseY
//     width
//     height
//     key 
 
//  mouseIsPressed // true or false
//  keyIsPressed // true or false
 
   if( keyIsPressed) {  // true/false
    //console.log("yes i am here as your happy keyboard")  
    keyChoice();    //wrapper function
    }
}


// function mousePressed(){

//   rect (0,0,20,20);

// }

// function mouseMoved(){

//   rect (100,20,0,20);

// }


function keyChoice() {
 // the 'key' maps what characters on the keyboard you can use.
 // switch statment

 //control statement controls the flow of code

 //for loop and if statement (else/else if)



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
  image(pineapple,cx,cy,gridSize,gridSize);
  break;
case 'p': 
  console.log("p random");  // down to right
  cx+= random(50);
  cy+= random(50);
  image(pizza,cx,cy,gridSize,gridSize);
  break;
case 't':
    console.log("t text");  // text
    fill(255,0,0);
    text("Pizza!",cx,cy,200);
    break;
default:             // Default executes if the case labels
  console.log("Guessed wrong try again");   // don't match the switch parameter
  break;
}
key = "";  // you can empty it so, it does not double trigger

}
