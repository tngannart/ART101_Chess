let bgcounter = 0;
 let counter = 0;

function setup() {
 createCanvas(400, 400);
 background(255);
frameRate(10);
        
        
}

 function draw() {
 noStroke();
fill(255,255,0,120);
rect(0, counter, width - random(50), 10);
fill(255,0,255,120);
rect(counter, 0, 10, height - random(50));
        
        
        
console.log("bgcounter = " + bgcounter + " counter = " + counter );

 //starts as false_doesnt play, ignore
if (counter > height) {
 background(bgcounter);
bgcounter+=1;
counter = 200;
 } else {
  counter+=20;
}


} // this is when we draw