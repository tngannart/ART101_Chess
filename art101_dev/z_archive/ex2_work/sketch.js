let cx, cy; // center
let flo, lea,font;
let bgcounter = 0;
let counter = 0;
let angle = 0;
let value = 0;
let fsize = 0;
let isRect = true;

function preload(){
  flo = loadImage("asset/cherry_blossom.png");
  lea = loadImage("asset/green_leave.png");
  font = loadFont('asset/runytunesrevisited.otf');
}

function setup(){
  createCanvas(600,600);
  cx = width / 2;
  cy = height /2;
  background(255,350,50);
  rectMode(CENTER);
  textFont(font);
  fill(245,164,78);
}

function draw(){

if (counter > bgcounter) {
  background(bgcounter + 19,60,50);
  bgcounter += 20;
  counter = 5;

} else {
  //* background(bgcounter + 23,70,90);
  counter +=30;
}

  //* center ellipse
  /* fill(value);
  noStroke ();
if(isRect == 0){
  rect(300, 300, 100, 100);
  //value = 255;
} else{
  fill(value);
  noStroke();
  ellipse(width/2,height/2,100,100);
  //value=0
} */

fill(245,106,78);
 rectMode(CENTER);
 rect(mouseX,mouseY,20,20);
 stroke(0);

push();
rotate(angle-1 * 1.5);
image(flo, 100,100, 100, 100); 

rotate(angle-2);
tint(255);
image(lea, 400,400, 100, 100); 

angle += 0.05;
pop();

if ( mouseIsPressed && keyIsPressed )  {
  console.log("Petal is appearing");

  textSize(fsize/5+4);
    textAlign (CENTER);
    fill(245,108,194);
text("petal", width/2, fsize);
} else  {
  
  textSize(fsize/5);
  textAlign(CENTER);
  fill(245, 164, 78);
  text("bloom",width/2,height/2);

  fsize +=1.5;
    if (fsize > width) {
      fsize = -50;
    }
  } 
}

function mouseMoved() {
  console.log("mouse goes around");
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

function mousePressed(isRect) {
  console.log("pressing");
  if(isRect==true || isRect ==false){
    noStroke ();
    //fill(255,0,0)
    rect(300, 300, 100, 100);
    //value = 255;
  } else {
    //value = 0;
    fill(255,100,0);
    ellipse(width/2,height/2,100,100);
    }
  }


