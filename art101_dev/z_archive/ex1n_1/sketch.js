

// function setup() {
//   createCanvas(500,500);
//   background(20);
//   fill(255,0,200);
// }

// function draw() {
//  ellipse(random(200), random(255), 50, 50);
// }



function setup() {
  createCanvas(500,500);
  background(20);

  noStroke();
}

function draw() {
  background(20);

if ( mouseIsPressed) {

if ( mouseX < 100) {

  if ( mouseY < 100) {
    fill(255);
  ellipse(width/4, height/4, 60, 60);
  }

}

if ( mouseX > 400) {

  if ( mouseY > 400) {
    fill(200,0,100);
  rect(width/1.5, height/1.5, 80, 80,10);
  }
}

}


if ( mouseX > 200 &&  mouseX < 300 ) {
  if ( mouseY > 200 &&  mouseY < 300 ) {
     fill(255,0,0,90);
     triangle(200,240,240,180,270,240);
  }
}


}