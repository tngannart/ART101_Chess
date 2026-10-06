// Example 2.4.3 Adjustable Array Version

let count = 4;
let loX = new Array(count);
let loY = new Array(count);
let speedX = new Array(count);
let speedY = new Array(count);
let cirSize = new Array(count);
let colorsR = new Array(count);
let colorsG = new Array(count);
let colorsB = new Array(count);

function setup() {
  createCanvas(600, 600);
  noStroke();

  for (let i=0; i < loX.length; i++) {
    loX[i] = width/2;
    loY[i] = height/2;
    speedX[i] = random(-3, 3);
    speedY[i] = random(-3, 3);
    cirSize[i] = random(10, 50);
    colorsR[i] = int(random(0, 255));
    colorsG[i] = int(random(0, 255));
    colorsB[i] = int(random(0, 255));
    console.log(speedX);
  }

}
function draw() {

  background(70);
  // makes a frame
  fill(250);
  rect(40, 40, width-80, height-80);

  for (let i = 0; i < loX.length; i++) {

     //check boundaries for all balls
     // note the '40+' and '-40' are to pull in the borders to match 
     // the background rect

    if (loX[i] < 40+cirSize[i]/2 || loX[i] > (width-40)-cirSize[i]/2 ) {
      speedX[i] = -speedX[i];
    }
    if (loY[i] < 40+cirSize[i]/2 || loY[i] > (height-40)-cirSize[i]/2) {
      speedY[i] = -speedY[i];
    }

    //draw all balls
    push();
    translate(loX[i],loY[i]);
    fill(colorsR[i],colorsG[i] ,colorsB[i]);
    ellipse(0,0,cirSize[i],cirSize[i]);
    pop();

   
    //update all positions
    loX[i] += speedX[i];
    loY[i] += speedY[i];

  } // end of loop

}
