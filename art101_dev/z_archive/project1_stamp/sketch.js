
let currentkey = '1';
let gkcount;
let cx,xy;
let bgc;
let gridSize;
let imgSize;
let pizza;
let pineapple;
let cimg;
let k;
let tool;
let mark;

function setup() {
    createCanvas(900, 900);
    background(255);
    smooth();
    bgc = color(255);
    k = color(255,0,0);
    // set up a assets folder then add an image.
    pizza = loadImage("assets/pizza.png");
    pineapple = loadImage("assets/pineapple.png");
    cx = width/2;
    cy = height/2;
    gridSize = 40;
    imgSize = 40;
    textSize(40);
    sWeight = 2;
    cimg = pizza;
    tool = "";
    mark = 0;
}


function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
      stampChoice();  
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
      // use this?
    }
}


function stampChoice() {
 
// key global variable contains whatever key was last pressed
let currentkey = key;

switch(currentkey) {

case 'a':
  console.log("a left");  // left
  cx+= -gridSize; 
  mark = 1;
  break;
case 'w':
  console.log("w up");  // up
  cy+= -gridSize;  
  mark = 1;
  break;
case 'd':
  console.log("d  right");  //right
  cx+= gridSize;
  mark = 1;
  break;
case 's':
  console.log("s back");  // back
  cy+= gridSize;
  mark = 1;
  break;
case '1':
  console.log("1 - pizza");  // first img
  cimg = pizza;
  tool = "pix";
  break;
case '2':
  console.log("2 - pineapple");   // second img
  cimg = pineapple;  // replace with your own images
  tool = "pix";
  break;
case 'c':
  console.log("c - circ");   //circle/ellipse
  tool = "circ";
  break;
  case 't':
    console.log("t - triangle");   //triangle
    tool = "tri"; 
  
case 'r':
  console.log("r - rect");   //rectangle
  tool = "rect";
  break;
case 'b':
  console.log("b - erase");  // erase with bg color
  tool = "erase";
  break;
case '>':
  console.log("+"); 
  imgSize+=10;
  break;
case '<':
  console.log("-"); 
  imgSize-=10;
  break;
default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

if (mark == 1) {
  if (tool == "pix"  )  {
    stampImage(cimg,cx,cy,imgSize); 
  } else if (tool == "circ") {
    drawCircle( k, cx,cy, imgSize, imgSize);
  } else if (tool == "rect"){
    drawRect( k, cx,cy, imgSize, imgSize)
  } else if (tool == "erase"){
    eraser(bgc,cx,cy,imgSize);  
  } else if (tool == "tri"){
    console.log("triangle yes1");
    sdtriangle(k, cx,cy, imgSize, imgSize);
    // eraser(bgc,cx,cy,imgSize);
  } else {
    // do nothing
  }
mark=0;  // resets the option if we make a mark or not
}

if (key == 'x' || key == 'X') {
  background(bgc);
}

// if (key == 'p' ) {
//  saveFrames('image-0', 'png', 1, 1);
//   key = '';  // resets the key so it does not make more than one image.
// }

key = '';  // resets the key so it does not make more than one image.

}

function stampImage(pix,lx,ly,s)  {
  // cheap centering trick with the s var /2
  image(pix,lx-(s/2),ly-(s/2),s,s);
}

function drawCircle( k,  lx, ly,  w, h) {
  strokeWeight(sWeight);
  stroke(k);
  noFill();
  ellipse(lx, ly, w, h);
}

function drawRect( k,  lx, ly,  w, h) {
  strokeWeight(sWeight);
  stroke(k);
  noFill();
  rect(lx-(w/2),ly-(h/2), w, h);
}

function sdtriangle( k,  lx, ly,  w, h) {
  strokeWeight(sWeight);
  stroke(k);
  noFill();
  triangle(lx-(w/2),ly-(h/2)+50, lx-(w/2)+30,ly-(h/2)+30,lx-(w/2),ly-(h/2));
}

function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}


